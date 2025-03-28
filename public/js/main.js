// Données des films avec de vraies images
const movies = {
  trending: [
    {
      id: 1,
      title: "Inception",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      description:
        "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable.",
      year: "2010",
      duration: "2h 28min",
      rating: "8.8",
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
      description:
        "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur Harvey Dent, il réussit à démanteler plusieurs réseaux mafieux. Mais un nouveau criminel particulièrement redoutable fait son apparition : le Joker.",
      year: "2008",
      duration: "2h 32min",
      rating: "9.0",
      director: "Christopher Nolan",
      cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
      description:
        "Dans un futur proche, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé. Cooper, un ancien pilote de la NASA, est devenu agriculteur. Il vit avec son fils et sa fille dans la ferme familiale.",
      year: "2014",
      duration: "2h 49min",
      rating: "8.6",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: "Crime",
      image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      description:
        "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent.",
      year: "1994",
      duration: "2h 34min",
      rating: "8.9",
      director: "Quentin Tarantino",
      cast: "John Travolta, Samuel L. Jackson, Uma Thurman",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    },
    {
      id: 5,
      title: "Matrix",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/ncEsesgOJDNrTUED89hYbA117wo.jpg",
      description:
        "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace.",
      year: "1999",
      duration: "2h 16min",
      rating: "8.7",
      director: "Lana et Lilly Wachowski",
      cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    {
      id: 6,
      title: "Fight Club",
      genre: "Drame",
      image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
      description:
        "Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d'autres personnes seules qui connaissent la misère humaine, morale et sexuelle.",
      year: "1999",
      duration: "2h 19min",
      rating: "8.8",
      director: "David Fincher",
      cast: "Brad Pitt, Edward Norton, Helena Bonham Carter",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/SUXWAEX2jlg",
    },
  ],
  action: [
    {
      id: 7,
      title: "John Wick",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/7dzngS8pLkGJpyeskCFcjPO9qLF.jpg",
      description:
        "Ce qui aurait pu être le banal vol d'une voiture de collection se transforme en une chasse à l'homme sans merci entre un légendaire ex-tueur à gages et le fils d'un des plus puissants parrains de la mafia.",
      year: "2014",
      duration: "1h 41min",
      rating: "7.4",
      director: "Chad Stahelski",
      cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
    },
    {
      id: 8,
      title: "Mad Max: Fury Road",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      backdrop:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
      description:
        "Hanté par un lourd passé, Mad Max estime que le meilleur moyen de survivre est de rester seul. Cependant, il se retrouve embarqué par une bande qui parcourt la Désolation à bord d'un véhicule militaire piloté par l'Imperator Furiosa.",
      year: "2015",
      duration: "2h",
      rating: "8.1",
      director: "George Miller",
      cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/hEJnMQG9ev8",
    },
  ],
  comedy: [
    {
      id: 13,
      title: "The Hangover",
      genre: "Comédie",
      image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      description:
        "Au réveil d'un enterrement de vie de garçon bien arrosé, les trois amis du futur marié se rendent compte qu'il a disparu et ne gardent aucun souvenir de leur soirée.",
      year: "2009",
      duration: "1h 40min",
      rating: "7.7",
      director: "Todd Phillips",
      cast: "Bradley Cooper, Ed Helms, Zach Galifianakis",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/tcdUhdOlz9M",
    },
    {
      id: 14,
      title: "Superbad",
      genre: "Comédie",
      image:
        "https://www.themoviedb.org/t/p/w1280/g5WotpNk2YAbCSsQcd6jQDRaX7f.jpg",
      backdrop:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/mFt3dvxKugYPgUQgV16M6K2nEtc.jpg",
      description:
        "Seth et Evan, deux lycéens, cherchent à organiser une fête et à perdre leur virginité avant l'entrée à la fac. Mais leur mission se complique lorsque leur ami Fogle tente d'acheter de l'alcool avec une fausse carte d'identité.",
      year: "2007",
      duration: "1h 53min",
      rating: "7.6",
      director: "Greg Mottola",
      cast: "Michael Cera, Jonah Hill, Christopher Mintz-Plasse",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/4eaZ_48ZYog",
    },
  ],
};

// Sauvegarder la liste personnelle dans le stockage local
function saveMyList() {
  const myList = getAllMoviesInMyList();
  localStorage.setItem("myList", JSON.stringify(myList));
}

// Charger la liste personnelle depuis le stockage local
function loadMyList() {
  const savedList = localStorage.getItem("myList");
  if (savedList) {
    const myList = JSON.parse(savedList);

    // Mettre à jour l'état de myList pour tous les films
    Object.keys(movies).forEach((category) => {
      movies[category].forEach((movie) => {
        movie.inMyList = myList.some((item) => item.id === movie.id);
      });
    });
  }
}

// Obtenir tous les films qui sont dans "Ma Liste"
function getAllMoviesInMyList() {
  const myList = [];

  Object.keys(movies).forEach((category) => {
    movies[category].forEach((movie) => {
      if (movie.inMyList) {
        myList.push(movie);
      }
    });
  });

  return myList;
}

// Fonction pour créer une carte de film
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className =
    "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";
  card.innerHTML = `
          <img src="${movie.image}" alt="${
    movie.title
  }" class="w-full h-auto rounded-lg shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
              <div class="p-4 w-full">
                  <h3 class="text-lg font-bold mb-1">${movie.title}</h3>
                  <div class="flex items-center justify-between">
                      <p class="text-sm text-gray-300">${movie.genre}</p>
                      <div class="flex space-x-2">
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button" data-id="${
                            movie.id
                          }">
                              <i class="fas fa-info-circle"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button" data-id="${
                            movie.id
                          }">
                              <i class="fas fa-play"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full add-to-list-button ${
                            movie.inMyList ? "active" : ""
                          }" data-id="${movie.id}">
                              <i class="fas ${
                                movie.inMyList ? "fa-check" : "fa-plus"
                              }"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `;

  // Ajouter les écouteurs d'événements pour les boutons
  card.querySelector(".info-button").addEventListener("click", (e) => {
    e.stopPropagation();
    showMovieDetails(movie.id);
  });

  card.querySelector(".play-button").addEventListener("click", (e) => {
    e.stopPropagation();
    playMovie(movie.id);
  });

  card.querySelector(".add-to-list-button").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMyList(movie.id);

    // Mettre à jour l'icône
    const button = e.currentTarget;
    const icon = button.querySelector("i");
    if (movie.inMyList) {
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

// Fonction pour ajouter/retirer un film de "Ma Liste"
function toggleMyList(movieId) {
  let foundMovie = null;

  // Chercher le film dans toutes les catégories
  Object.keys(movies).forEach((category) => {
    const movie = movies[category].find((m) => m.id === movieId);
    if (movie) {
      movie.inMyList = !movie.inMyList;
      foundMovie = movie;
    }
  });

  // Sauvegarder la liste mise à jour
  saveMyList();

  // Si nous sommes sur la page "Ma Liste", mettre à jour l'affichage
  const myListContainer = document.getElementById("myListContainer");
  if (myListContainer && foundMovie && !foundMovie.inMyList) {
    // Si le film a été retiré de Ma Liste, le supprimer de l'affichage
    const cardToRemove = document.querySelector(`[data-movie-id="${movieId}"]`);
    if (cardToRemove) {
      cardToRemove.remove();

      // Vérifier si la liste est maintenant vide
      if (getAllMoviesInMyList().length === 0) {
        myListContainer.innerHTML =
          '<p class="text-center text-gray-500 my-12">Votre liste est vide. Ajoutez des films ou séries pour les retrouver ici.</p>';
      }
    }
  }
}

// Fonction pour afficher les détails du film
function showMovieDetails(movieId) {
  const movie = findMovieById(movieId);
  if (!movie) return;

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  modalBackdrop.style.backgroundImage = `url('${movie.backdrop}')`;

  modalContent.innerHTML = `
          <div class="flex flex-col gap-6">
              <h1 class="text-4xl font-bold">${movie.title}</h1>
              <div class="flex items-center space-x-4 text-sm">
                  <span class="text-green-500">${movie.rating} Note</span>
                  <span>${movie.year}</span>
                  <span>${movie.duration}</span>
                  <span class="px-2 py-1 bg-gray-800 rounded">${
                    movie.genre
                  }</span>
              </div>
              <p class="text-lg">${movie.description}</p>
              <div class="flex space-x-4">
                  <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" onclick="playMovie(${
                    movie.id
                  })">
                      <i class="fas fa-play mr-2"></i> Lecture
                  </button>
                  <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" onclick="toggleMyList(${
                    movie.id
                  }); updateMyListButton(${movie.id})">
                      <i class="fas ${
                        movie.inMyList ? "fa-check" : "fa-plus"
                      } mr-2" id="modalMyListIcon"></i> 
                      <span id="modalMyListText">${
                        movie.inMyList
                          ? "Retirer de Ma Liste"
                          : "Ajouter à Ma Liste"
                      }</span>
                  </button>
              </div>
          </div>
      `;

  modalDetails.innerHTML = `
          <div class="grid grid-cols-2 gap-8">
              <div>
                  <p class="mb-2"><span class="text-gray-300">Réalisateur:</span> ${movie.director}</p>
                  <p><span class="text-gray-300">Distribution:</span> ${movie.cast}</p>
              </div>
              <div>
                  <p class="mb-2"><span class="text-gray-300">Genre:</span> ${movie.genre}</p>
                  <p><span class="text-gray-300">Note:</span> ${movie.rating}/10</p>
              </div>
          </div>
      `;

  modal.classList.remove("hidden");
}

// Mettre à jour le bouton "Ma Liste" dans le modal
function updateMyListButton(movieId) {
  const movie = findMovieById(movieId);
  if (!movie) return;

  const icon = document.getElementById("modalMyListIcon");
  const text = document.getElementById("modalMyListText");

  if (icon && text) {
    if (movie.inMyList) {
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

// Fonction pour fermer le modal
function closeModal() {
  const modal = document.getElementById("movieModal");
  modal.classList.add("hidden");

  // Si un lecteur vidéo est ouvert, le fermer
  const videoPlayerModal = document.getElementById("videoPlayerModal");
  if (videoPlayerModal) {
    videoPlayerModal.classList.add("hidden");
    const iframe = videoPlayerModal.querySelector("iframe");
    if (iframe) {
      iframe.src = "";
    }
  }
}

// Fonction pour jouer un film (ouvrir un lecteur vidéo)
function playMovie(movieId) {
  const movie = findMovieById(movieId);
  if (!movie || !movie.videoUrl) return;

  // Créer le modal du lecteur vidéo s'il n'existe pas
  let videoPlayerModal = document.getElementById("videoPlayerModal");
  if (!videoPlayerModal) {
    videoPlayerModal = document.createElement("div");
    videoPlayerModal.id = "videoPlayerModal";
    videoPlayerModal.className =
      "hidden fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50";
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
    iframe.src = movie.videoUrl + "?autoplay=1";
  }

  videoPlayerModal.classList.remove("hidden");
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

// Fonction pour trouver un film par ID
function findMovieById(movieId) {
  let foundMovie = null;

  Object.keys(movies).forEach((category) => {
    const movie = movies[category].find((m) => m.id === movieId);
    if (movie) {
      foundMovie = movie;
    }
  });

  return foundMovie;
}

// Gestion de la barre de recherche
document.getElementById("searchToggle").addEventListener("click", () => {
  const searchBar = document.getElementById("searchBar");
  searchBar.classList.toggle("hidden");
});

// Gestion du scroll pour la navigation
let lastScroll = 0;
const nav = document.querySelector("nav");

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

  lastScroll = currentScroll;
});

// Initialisation de la page
document.addEventListener("DOMContentLoaded", () => {
  // Charger Ma Liste depuis le stockage local
  loadMyList();

  // Remplir les sections avec les films
  Object.entries(movies).forEach(([category, movieList]) => {
    const container = document.getElementById(category);
    if (container) {
      movieList.forEach((movie) => {
        container.appendChild(createMovieCard(movie));
      });
    }
  });

  // Fermer le modal en cliquant en dehors
  document.getElementById("movieModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("movieModal")) {
      closeModal();
    }
  });

  // Ajouter des écouteurs pour les boutons de la bannière hero
  const heroPlayButton = document.querySelector(".hero-section .play-button");
  if (heroPlayButton) {
    heroPlayButton.addEventListener("click", () => {
      // Supposons que nous voulons jouer le premier film de la liste trending
      if (movies.trending.length > 0) {
        playMovie(movies.trending[0].id);
      }
    });
  }

  const heroInfoButton = document.querySelector(".hero-section .info-button");
  if (heroInfoButton) {
    heroInfoButton.addEventListener("click", () => {
      // Supposons que nous voulons afficher les détails du premier film de la liste trending
      if (movies.trending.length > 0) {
        showMovieDetails(movies.trending[0].id);
      }
    });
  }
});

// Exporter les fonctions pour les rendre accessibles globalement
window.showMovieDetails = showMovieDetails;
window.closeModal = closeModal;
window.playMovie = playMovie;
window.closeVideoPlayer = closeVideoPlayer;
window.toggleMyList = toggleMyList;
window.updateMyListButton = updateMyListButton;
