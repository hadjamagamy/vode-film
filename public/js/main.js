/**
 * main.js - Script principal pour le clone Netflix
 * Récupère les films depuis l'API et gère l'interaction utilisateur
 */

// Objet pour stocker les films récupérés depuis l'API, organisés par catégories
let apiMovies = {
  trending: [],
  action: [],
  comedy: [],
  horror: [],
  drama: [],
  documentary: [],
  newReleases: []
};

// Liste des films ajoutés à "Ma Liste" par l'utilisateur
let myListMovies = [];

// Fonction pour charger les films depuis l'API
async function loadMoviesFromAPI() {
  try {
    const response = await fetch('/backend/api/api-proxy.php?endpoint=top');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des films');
    }
    
    const data = await response.json();
    
    // Organiser les films par catégories
    data.items.forEach(movie => {
      // Extraire le genre principal (après le point)
      const genreParts = movie.genre.split(' . ');
      const primaryGenre = genreParts.length > 1 ? genreParts[1] : genreParts[0];
      
      // Ajouter aux "Tendances actuelles" (les 6 premiers films)
      if (apiMovies.trending.length < 6) {
        apiMovies.trending.push(movie);
      }
      
      // Ajouter à la catégorie correspondante selon le genre
      if (primaryGenre === 'Action') {
        apiMovies.action.push(movie);
      } else if (primaryGenre === 'Comédie' || primaryGenre === 'Comédie') {
        apiMovies.comedy.push(movie);
      } else if (primaryGenre === 'Horreur') {
        apiMovies.horror.push(movie);
      } else if (primaryGenre === 'Drame') {
        apiMovies.drama.push(movie);
      } else if (primaryGenre === 'Documentaire' || genreParts[0] === 'Documentaire') {
        apiMovies.documentary.push(movie);
      }
      
      // Ajouter aux nouveautés si le film est marqué comme nouveau
      if (movie.isNEW) {
        apiMovies.newReleases.push(movie);
      }
    });
    
    // Afficher les films dans les sections correspondantes
    displayMovies();
    
    // Configurer les boutons de la bannière hero avec le premier film tendance
    setupHeroButtons(apiMovies.trending[0]);
    
  } catch (error) {
    console.error('Erreur:', error);
  }
}

// Fonction pour afficher les films dans les sections correspondantes
function displayMovies() {
  // Afficher les films par catégorie
  for (const [category, movies] of Object.entries(apiMovies)) {
    // Ne pas afficher les catégories vides ou avec trop peu de films
    if (movies.length < 2 && category !== 'trending') continue;
    
    const container = document.getElementById(category);
    if (container) {
      // Vider le conteneur
      container.innerHTML = '';
      
      // Ajouter les films
      movies.forEach(movie => {
        container.appendChild(createMovieCard(movie));
      });
    }
  }
}

// Fonction pour configurer les boutons de la bannière hero
function setupHeroButtons(movie) {
  if (!movie) return;
  
  const playButton = document.getElementById('playButton');
  const infoButton = document.getElementById('infoButton');
  
  if (playButton) {
    playButton.addEventListener('click', () => {
      playMovie(movie);
    });
  }
  
  if (infoButton) {
    infoButton.addEventListener('click', () => {
      showMovieDetails(movie);
    });
  }
}

// Fonction pour créer une carte de film
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";
  card.setAttribute('data-movie-id', movie.url);
  
  // Déterminer si le film est dans la liste personnelle
  const inMyList = myListMovies.some(item => item.url === movie.url);
  
  // Extraire le genre principal (après le point)
  const genreParts = movie.genre.split(' . ');
  const primaryGenre = genreParts.length > 1 ? genreParts[1] : genreParts[0];
  
  card.innerHTML = `
    <div class="relative">
      ${movie.isNEW ? '<div class="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">NOUVEAU</div>' : ''}
      <img src="${movie.cover}" alt="${movie.title}" class="w-full h-auto rounded-lg shadow-lg">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
        <div class="p-4 w-full">
          <h3 class="text-lg font-bold mb-1">${movie.title}</h3>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-300">${primaryGenre}</p>
            <div class="flex space-x-2">
              <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button" data-id="${movie.url}">
                <i class="fas fa-info-circle"></i>
              </button>
              <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button" data-id="${movie.url}">
                <i class="fas fa-play"></i>
              </button>
              <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full add-to-list-button ${inMyList ? "active" : ""}" data-id="${movie.url}">
                <i class="fas ${inMyList ? "fa-check" : "fa-plus"}"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Ajouter les écouteurs d'événements pour les boutons
  card.querySelector(".info-button").addEventListener("click", (e) => {
    e.stopPropagation();
    const movieUrl = e.currentTarget.getAttribute('data-id');
    const movie = findMovieByUrl(movieUrl);
    if (movie) showMovieDetails(movie);
  });

  card.querySelector(".play-button").addEventListener("click", (e) => {
    e.stopPropagation();
    const movieUrl = e.currentTarget.getAttribute('data-id');
    const movie = findMovieByUrl(movieUrl);
    if (movie) playMovie(movie);
  });

  card.querySelector(".add-to-list-button").addEventListener("click", (e) => {
    e.stopPropagation();
    const movieUrl = e.currentTarget.getAttribute('data-id');
    const movie = findMovieByUrl(movieUrl);
    if (movie) toggleMyList(movie);

    // Mettre à jour l'icône
    const button = e.currentTarget;
    const icon = button.querySelector("i");
    const isInMyList = myListMovies.some(item => item.url === movieUrl);
    
    if (isInMyList) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-check");
      button.classList.add("active");
    } else {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-plus");
      button.classList.remove("active");
    }
  });

  return card;
}

// Fonction pour trouver un film par URL
function findMovieByUrl(url) {
  for (const category of Object.values(apiMovies)) {
    const movie = category.find(m => m.url === url);
    if (movie) return movie;
  }
  
  return null;
}

// Fonction pour afficher les détails du film
function showMovieDetails(movie) {
  if (!movie) return;

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  // Utiliser l'image de couverture comme arrière-plan
  modalBackdrop.style.backgroundImage = `url('${movie.cover}')`;

  // Extraire le genre principal (après le point)
  const genreParts = movie.genre.split(' . ');
  const primaryGenre = genreParts.length > 1 ? genreParts[1] : genreParts[0];

  // Extraire l'année du titre si disponible
  let year = '';
  const yearMatch = movie.title.match(/\((\d{4})\)$/);
  if (yearMatch) {
    year = yearMatch[1];
  }

  const inMyList = myListMovies.some(item => item.url === movie.url);

  modalContent.innerHTML = `
    <div class="flex flex-col gap-6">
      <h1 class="text-4xl font-bold">${movie.title}</h1>
      <div class="flex items-center space-x-4 text-sm">
        ${year ? `<span>${year}</span>` : ''}
        <span class="px-2 py-1 bg-gray-800 rounded">${primaryGenre}</span>
        ${movie.isHD ? '<span class="px-2 py-1 bg-blue-800 rounded">HD</span>' : ''}
      </div>
      <p class="text-lg">${movie.synopsis}</p>
      <div class="flex space-x-4">
        <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" onclick="playMovie(findMovieByUrl('${movie.url}'))">
          <i class="fas fa-play mr-2"></i> Lecture
        </button>
        <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" onclick="toggleMyList(findMovieByUrl('${movie.url}'), true)">
          <i class="fas ${inMyList ? "fa-check" : "fa-plus"} mr-2" id="modalMyListIcon"></i> 
          <span id="modalMyListText">${inMyList ? "Retirer de Ma Liste" : "Ajouter à Ma Liste"}</span>
        </button>
      </div>
    </div>
  `;

  modalDetails.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p class="mb-2"><span class="text-gray-300">Genre:</span> ${movie.genre}</p>
        ${movie.isNEW ? '<p class="mb-2"><span class="text-gray-300">Statut:</span> <span class="text-green-500">Nouveau</span></p>' : ''}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

// Fonction pour mettre à jour le bouton "Ma Liste" dans le modal
function updateMyListButton(movie) {
  if (!movie) return;

  const inMyList = myListMovies.some(item => item.url === movie.url);
  const icon = document.getElementById("modalMyListIcon");
  const text = document.getElementById("modalMyListText");

  if (icon && text) {
    if (inMyList) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-check");
      text.textContent = "Retirer de Ma Liste";
    } else {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-plus");
      text.textContent = "Ajouter à Ma Liste";
    }
  }
}

// Fonction pour ajouter/retirer un film de "Ma Liste"
function toggleMyList(movie, updateModal = false) {
  if (!movie) return;

  const index = myListMovies.findIndex(m => m.url === movie.url);
  
  if (index === -1) {
    // Ajouter le film à Ma Liste s'il n'y est pas déjà
    myListMovies.push(movie);
  } else {
    // Retirer le film de Ma Liste s'il y est déjà
    myListMovies.splice(index, 1);
    
    // Si nous sommes sur la page "Ma Liste", supprimer la carte du film
    const myListContainer = document.getElementById("myListContainer");
    if (myListContainer) {
      const cardToRemove = document.querySelector(`[data-movie-id="${movie.url}"]`);
      if (cardToRemove) {
        cardToRemove.remove();
        
        // Vérifier si la liste est maintenant vide
        if (myListMovies.length === 0) {
          myListContainer.innerHTML =
            '<p class="text-center text-gray-500 my-12">Votre liste est vide. Ajoutez des films ou séries pour les retrouver ici.</p>';
        }
      }
    }
  }
  
  // Sauvegarder Ma Liste dans le stockage local
  saveMyList();
  
  // Mettre à jour le bouton dans le modal si demandé
  if (updateModal) {
    updateMyListButton(movie);
  }
}

// Fonction pour sauvegarder "Ma Liste" dans le stockage local
function saveMyList() {
  localStorage.setItem("myList", JSON.stringify(myListMovies));
}

// Fonction pour charger "Ma Liste" depuis le stockage local
function loadMyList() {
  const savedList = localStorage.getItem("myList");
  if (savedList) {
    try {
      myListMovies = JSON.parse(savedList);
    } catch (error) {
      console.error('Erreur lors du chargement de Ma Liste:', error);
      myListMovies = [];
    }
  }
}

// Fonction pour jouer un film (ouvrir un lecteur vidéo)
function playMovie(movie) {
  if (!movie || !movie.movie_iframe_src) return;

  // Créer le modal du lecteur vidéo s'il n'existe pas
  let videoPlayerModal = document.getElementById("videoPlayerModal");
  if (!videoPlayerModal) {
    videoPlayerModal = document.createElement("div");
    videoPlayerModal.id = "videoPlayerModal";
    videoPlayerModal.className = "hidden fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50";
    videoPlayerModal.innerHTML = `
      <div class="relative w-full max-w-5xl mx-4">
        <button onclick="closeVideoPlayer()" class="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 p-2 rounded-full z-10">
          <i class="fas fa-times"></i>
        </button>
        <div class="aspect-video w-full">
          <iframe id="videoIframe" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(videoPlayerModal);
  }

  // Fermer le modal de détails si ouvert
  const detailsModal = document.getElementById("movieModal");
  if (detailsModal) {
    detailsModal.classList.add("hidden");
  }

  // Configurer et afficher le lecteur vidéo
  const iframe = document.getElementById("videoIframe");
  if (iframe) {
    iframe.src = movie.movie_iframe_src;
  }

  videoPlayerModal.classList.remove("hidden");
}

// Fonction pour fermer le modal
function closeModal() {
  const modal = document.getElementById("movieModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

// Fonction pour fermer le lecteur vidéo
function closeVideoPlayer() {
  const videoPlayerModal = document.getElementById("videoPlayerModal");
  if (videoPlayerModal) {
    videoPlayerModal.classList.add("hidden");
    const iframe = videoPlayerModal.querySelector("iframe");
    if (iframe) {
      iframe.src = "";
    }
  }
}

// Fonction pour initialiser la page "Ma Liste"
function initMyListPage() {
  const myListContainer = document.getElementById("myListContainer");
  if (myListContainer) {
    if (myListMovies.length === 0) {
      myListContainer.innerHTML = '<p class="text-center text-gray-500 my-12">Votre liste est vide. Ajoutez des films ou séries pour les retrouver ici.</p>';
    } else {
      myListContainer.innerHTML = '';
      myListMovies.forEach(movie => {
        myListContainer.appendChild(createMovieCard(movie));
      });
    }
  }
}

// Gestion de la barre de recherche
function setupSearchBar() {
  const searchToggle = document.getElementById("searchToggle");
  if (searchToggle) {
    searchToggle.addEventListener("click", () => {
      const searchBar = document.getElementById("searchBar");
      if (searchBar) {
        searchBar.classList.toggle("hidden");
      }
    });
  }
}

// Gestion du scroll pour la navigation
function setupNavbarScroll() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.classList.remove("bg-black");
      nav.classList.add(
        "bg-gradient-to-b",
        "from-black",
        "via-black/90",
        "to-transparent"
      );
    } else {
      nav.classList.add("bg-black");
      nav.classList.remove(
        "bg-gradient-to-b",
        "from-black",
        "via-black/90",
        "to-transparent"
      );
    }
  });
}

// Initialisation de la page
document.addEventListener("DOMContentLoaded", () => {
  // Charger Ma Liste depuis le stockage local
  loadMyList();
  
  // Configurer la barre de recherche
  setupSearchBar();
  
  // Configurer le comportement de la navbar au scroll
  setupNavbarScroll();
  
  // Charger les films depuis l'API
  loadMoviesFromAPI();
  
  // Initialiser la page "Ma Liste" si nous sommes sur cette page
  if (window.location.pathname.includes('ma-liste')) {
    initMyListPage();
  }

  // Configurer le modal
  const movieModal = document.getElementById("movieModal");
  if (movieModal) {
    movieModal.addEventListener("click", (e) => {
      if (e.target === movieModal) {
        closeModal();
      }
    });
  }

  // Configurer les boutons de la bannière hero
  const playButton = document.getElementById("playButton");
  const infoButton = document.getElementById("infoButton");
  
  if (playButton && infoButton) {
    // Les fonctions seront configurées après le chargement des films
  }
});

// Exporter les fonctions pour les rendre accessibles globalement
window.showMovieDetails = showMovieDetails;
window.closeModal = closeModal;
window.playMovie = playMovie;
window.closeVideoPlayer = closeVideoPlayer;
window.toggleMyList = toggleMyList;
window.updateMyListButton = updateMyListButton;
window.findMovieByUrl = findMovieByUrl;