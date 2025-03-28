// Données des séries
const series = {
  popular: [
    {
      id: 101,
      title: "Stranger Things",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      description:
        "Dans la ville fictive de Hawkins, un groupe d'amis se retrouve confronté à des forces surnaturelles lorsqu'un jeune garçon disparaît mystérieusement.",
      year: "2016-présent",
      duration: "50min/ep",
      rating: "8.7",
      creator: "The Duffer Brothers",
      cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
      seasons: 4,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
    },
    {
      id: 102,
      title: "Breaking Bad",
      genre: "Drame",
      image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
      description:
        "Un professeur de chimie atteint d'un cancer du poumon inopérable se lance dans la fabrication et la vente de méthamphétamine pour assurer l'avenir financier de sa famille.",
      year: "2008-2013",
      duration: "45min/ep",
      rating: "9.5",
      creator: "Vince Gilligan",
      cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
      seasons: 5,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
    {
      id: 103,
      title: "Game of Thrones",
      genre: "Fantasy",
      image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
      description:
        "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
      year: "2011-2019",
      duration: "60min/ep",
      rating: "9.3",
      creator: "David Benioff, D.B. Weiss",
      cast: "Emilia Clarke, Kit Harington, Peter Dinklage",
      seasons: 8,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/KPLWWIOCOOQ",
    },
  ],
  drama: [
    {
      id: 104,
      title: "The Crown",
      genre: "Drame historique",
      image:
        "https://www.themoviedb.org/t/p/w1280/snrhOM9JOY3i7UGNDZBfBakiq4n.jpg",
      backdrop:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/8VXhcrl5z2I1zEU9X3pkkNrZlD.jpg",
      description:
        "Cette série dramatique suit la vie de la reine Elizabeth II, de son mariage en 1947 jusqu'à nos jours, en passant par les événements politiques et historiques qui ont marqué son règne.",
      year: "2016-présent",
      duration: "58min/ep",
      rating: "8.7",
      creator: "Peter Morgan",
      cast: "Olivia Colman, Claire Foy, Imelda Staunton",
      seasons: 6,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/JWtnJjn6ng0",
    },
    {
      id: 105,
      title: "Succession",
      genre: "Drame",
      image:
        "https://www.themoviedb.org/t/p/w1280/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
      backdrop:
        "https://www.themoviedb.org/t/p/w1280/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
      description:
        "La famille Roy, propriétaire d'un conglomérat international de médias, lutte pour le contrôle de l'entreprise alors que leur patriarche vieillissant commence à se retirer de l'entreprise.",
      year: "2018-2023",
      duration: "60min/ep",
      rating: "8.8",
      creator: "Jesse Armstrong",
      cast: "Brian Cox, Jeremy Strong, Sarah Snook",
      seasons: 4,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/OzYxJV_rmE8",
    },
  ],
  scifi: [
    {
      id: 106,
      title: "Westworld",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/yGNnjoIGOdQy3douq60tULY8teK.jpg",
      description:
        "Dans un parc d'attractions futuriste, des androïdes réalistes sont programmés pour satisfaire les désirs les plus sombres des visiteurs. Mais que se passe-t-il lorsque les robots commencent à développer une conscience?",
      year: "2016-2022",
      duration: "60min/ep",
      rating: "8.5",
      creator: "Jonathan Nolan, Lisa Joy",
      cast: "Evan Rachel Wood, Thandiwe Newton, Jeffrey Wright",
      seasons: 4,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/9BqKiZhEFFw",
    },
    {
      id: 107,
      title: "The Expanse",
      genre: "Science Fiction",
      image:
        "https://www.themoviedb.org/t/p/w1280/lLidDKUYF5pcmH7zaM6J6nyRQGG.jpg",
      backdrop:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/7yKtaRij2giAj0s09F6gmB8XIje.jpg",
      description:
        "Au 23ème siècle, l'humanité a colonisé le système solaire. Un détective et le capitaine d'un vaisseau s'associent pour enquêter sur la disparition d'une jeune femme, ce qui les amène à découvrir une vaste conspiration.",
      year: "2015-2022",
      duration: "60min/ep",
      rating: "8.5",
      creator: "Mark Fergus, Hawk Ostby",
      cast: "Steven Strait, Dominique Tipper, Wes Chatham",
      seasons: 6,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/caLji74IIp4",
    },
  ],
};

// Sauvegarder la liste personnelle dans le stockage local
function saveMyList() {
  const myList = getAllSeriesInMyList();
  const savedList = localStorage.getItem("myList")
    ? JSON.parse(localStorage.getItem("myList"))
    : [];

  // Fusionner avec les films existants
  const updatedList = [...savedList.filter((item) => item.id < 100), ...myList];
  localStorage.setItem("myList", JSON.stringify(updatedList));
}

// Charger la liste personnelle depuis le stockage local
function loadMyList() {
  const savedList = localStorage.getItem("myList");
  if (savedList) {
    const myList = JSON.parse(savedList);

    // Mettre à jour l'état de inMyList pour toutes les séries
    Object.keys(series).forEach((category) => {
      series[category].forEach((serie) => {
        serie.inMyList = myList.some((item) => item.id === serie.id);
      });
    });
  }
}

// Obtenir toutes les séries qui sont dans "Ma Liste"
function getAllSeriesInMyList() {
  const myList = [];

  Object.keys(series).forEach((category) => {
    series[category].forEach((serie) => {
      if (serie.inMyList) {
        myList.push(serie);
      }
    });
  });

  return myList;
}

// Fonction pour créer une carte de série
function createSerieCard(serie) {
  const card = document.createElement("div");
  card.className =
    "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";
  card.innerHTML = `
          <img src="${serie.image}" alt="${
    serie.title
  }" class="w-full h-auto rounded-lg shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
              <div class="p-4 w-full">
                  <h3 class="text-lg font-bold mb-1">${serie.title}</h3>
                  <div class="flex items-center justify-between">
                      <p class="text-sm text-gray-300">${serie.genre}</p>
                      <div class="flex space-x-2">
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button" data-id="${
                            serie.id
                          }">
                              <i class="fas fa-info-circle"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button" data-id="${
                            serie.id
                          }">
                              <i class="fas fa-play"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full add-to-list-button ${
                            serie.inMyList ? "active" : ""
                          }" data-id="${serie.id}">
                              <i class="fas ${
                                serie.inMyList ? "fa-check" : "fa-plus"
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
    showSerieDetails(serie.id);
  });

  card.querySelector(".play-button").addEventListener("click", (e) => {
    e.stopPropagation();
    playSerie(serie.id);
  });

  card.querySelector(".add-to-list-button").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMyList(serie.id);

    // Mettre à jour l'icône
    const button = e.currentTarget;
    const icon = button.querySelector("i");
    if (serie.inMyList) {
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

// Fonction pour ajouter/retirer une série de "Ma Liste"
function toggleMyList(serieId) {
  let foundSerie = null;

  // Chercher la série dans toutes les catégories
  Object.keys(series).forEach((category) => {
    const serie = series[category].find((s) => s.id === serieId);
    if (serie) {
      serie.inMyList = !serie.inMyList;
      foundSerie = serie;
    }
  });

  // Sauvegarder la liste mise à jour
  saveMyList();

  // Si nous sommes sur la page "Ma Liste", mettre à jour l'affichage
  const myListContainer = document.getElementById("myListContainer");
  if (myListContainer && foundSerie && !foundSerie.inMyList) {
    // Si la série a été retirée de Ma Liste, la supprimer de l'affichage
    const cardToRemove = document.querySelector(`[data-serie-id="${serieId}"]`);
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }
}

// Fonction pour afficher les détails de la série
function showSerieDetails(serieId) {
  const serie = findSerieById(serieId);
  if (!serie) return;

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  modalBackdrop.style.backgroundImage = `url('${serie.backdrop}')`;

  modalContent.innerHTML = `
          <div class="flex flex-col gap-6 overflow-auto">
              <h1 class="text-4xl font-bold">${serie.title}</h1>
              <div class="flex items-center space-x-4 text-sm">
                  <span class="text-green-500">${serie.rating} Note</span>
                  <span>${serie.year}</span>
                  <span>${serie.duration}</span>
                  <span class="px-2 py-1 bg-gray-800 rounded">${
                    serie.genre
                  }</span>
              </div>
              <p class="text-lg">${serie.description}</p>
              <div class="flex space-x-4">
                  <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" onclick="playSerie(${
                    serie.id
                  })">
                      <i class="fas fa-play mr-2"></i> Lecture
                  </button>
                  <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" onclick="toggleMyList(${
                    serie.id
                  }); updateMyListButton(${serie.id})">
                      <i class="fas ${
                        serie.inMyList ? "fa-check" : "fa-plus"
                      } mr-2" id="modalMyListIcon"></i> 
                      <span id="modalMyListText">${
                        serie.inMyList
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
                  <p class="mb-2"><span class="text-gray-300">Créateur:</span> ${serie.creator}</p>
                  <p><span class="text-gray-300">Distribution:</span> ${serie.cast}</p>
              </div>
              <div>
                  <p class="mb-2"><span class="text-gray-300">Saisons:</span> ${serie.seasons}</p>
                  <p><span class="text-gray-300">Note:</span> ${serie.rating}/10</p>
              </div>
          </div>
      `;

  modal.classList.remove("hidden");
}

// Mettre à jour le bouton "Ma Liste" dans le modal
function updateMyListButton(serieId) {
  const serie = findSerieById(serieId);
  if (!serie) return;

  const icon = document.getElementById("modalMyListIcon");
  const text = document.getElementById("modalMyListText");

  if (icon && text) {
    if (serie.inMyList) {
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

// Fonction pour jouer une série (ouvrir un lecteur vidéo)
function playSerie(serieId) {
  const serie = findSerieById(serieId);
  if (!serie || !serie.videoUrl) return;

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
    iframe.src = serie.videoUrl + "?autoplay=1";
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

// Fonction pour trouver une série par ID
function findSerieById(serieId) {
  let foundSerie = null;

  Object.keys(series).forEach((category) => {
    const serie = series[category].find((s) => s.id === serieId);
    if (serie) {
      foundSerie = serie;
    }
  });

  return foundSerie;
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

  // Remplir les sections avec les séries
  Object.entries(series).forEach(([category, serieList]) => {
    const container = document.getElementById(category);
    if (container) {
      serieList.forEach((serie) => {
        container.appendChild(createSerieCard(serie));
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
  const heroPlayButton = document.querySelector(
    ".relative.h-screen .bg-white.text-black"
  );
  if (heroPlayButton) {
    heroPlayButton.addEventListener("click", () => {
      // Jouer la première série de la liste popular
      if (series.popular.length > 0) {
        playSerie(series.popular[0].id);
      }
    });
  }

  const heroInfoButton = document.querySelector(
    ".relative.h-screen .bg-gray-500\\/50"
  );
  if (heroInfoButton) {
    heroInfoButton.addEventListener("click", () => {
      // Afficher les détails de la première série de la liste popular
      if (series.popular.length > 0) {
        showSerieDetails(series.popular[0].id);
      }
    });
  }
});

// Exporter les fonctions pour les rendre accessibles globalement
window.showSerieDetails = showSerieDetails;
window.closeModal = closeModal;
window.playSerie = playSerie;
window.closeVideoPlayer = closeVideoPlayer;
window.toggleMyList = toggleMyList;
window.updateMyListButton = updateMyListButton;
