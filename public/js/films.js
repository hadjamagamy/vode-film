// Données des films avec de vraies images
const films = {
  action: [
    {
      id: 1,
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
      id: 2,
      title: "Mad Max: Fury Road",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
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
    {
      id: 7,
      title: "The Dark Knight",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Aq3E1.jpg",
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
  ],
  scifi: [
    {
      id: 3,
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
      id: 4,
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
  ],
  comedy: [
    {
      id: 13,
      title: "The Hangover",
      genre: "Comédie",
      image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/nARVc63oSKp6KLvvhYvLZxHpHta.jpg",
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
    {
      id: 15,
      title: "Deadpool",
      genre: "Comédie/Action",
      image:
        "https://www.themoviedb.org/t/p/w1280/z5VjcCEioj2c2dvxmoqBW0Rj8Xj.jpg",
      backdrop:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/en971MEXui9diirXlogOrPKmsEn.jpg",
      description:
        "Deadpool raconte l'histoire d'un ancien militaire devenu mercenaire. Après avoir subi une expérimentation hors norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, il va traquer l'homme qui a bien failli anéantir sa vie.",
      year: "2016",
      duration: "1h 48min",
      rating: "8.0",
      director: "Tim Miller",
      cast: "Ryan Reynolds, Morena Baccarin, Ed Skrein",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/Xithigfg7dA",
    },
  ],
};

// Sauvegarder la liste personnelle dans le stockage local
function saveMyList() {
  const myList = getAllFilmsInMyList();
  const savedList = localStorage.getItem("myList")
    ? JSON.parse(localStorage.getItem("myList"))
    : [];

  // Fusionner avec les séries existantes mais éviter les doublons
  const updatedList = [
    ...savedList.filter((item) => item.id >= 100), // Garder les séries (ID ≥ 100)
    ...myList,
  ];

  localStorage.setItem("myList", JSON.stringify(updatedList));
}

// Charger la liste personnelle depuis le stockage local
function loadMyList() {
  const savedList = localStorage.getItem("myList");
  if (savedList) {
    const myList = JSON.parse(savedList);

    // Mettre à jour l'état de inMyList pour tous les films
    Object.keys(films).forEach((category) => {
      films[category].forEach((film) => {
        film.inMyList = myList.some((item) => item.id === film.id);
      });
    });
  }
}

// Obtenir tous les films qui sont dans "Ma Liste"
function getAllFilmsInMyList() {
  const myList = [];

  Object.keys(films).forEach((category) => {
    films[category].forEach((film) => {
      if (film.inMyList) {
        myList.push(film);
      }
    });
  });

  return myList;
}

// Fonction pour créer une carte de film
function createFilmCard(film) {
  const card = document.createElement("div");
  card.className =
    "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";
  card.innerHTML = `
          <img src="${film.image}" alt="${
    film.title
  }" class="w-full h-auto rounded-lg shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
              <div class="p-4 w-full">
                  <h3 class="text-lg font-bold mb-1">${film.title}</h3>
                  <div class="flex items-center justify-between">
                      <p class="text-sm text-gray-300">${film.genre}</p>
                      <div class="flex space-x-2">
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button" data-id="${
                            film.id
                          }">
                              <i class="fas fa-info-circle"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button" data-id="${
                            film.id
                          }">
                              <i class="fas fa-play"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full add-to-list-button ${
                            film.inMyList ? "active" : ""
                          }" data-id="${film.id}">
                              <i class="fas ${
                                film.inMyList ? "fa-check" : "fa-plus"
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
    showFilmDetails(film.id);
  });

  card.querySelector(".play-button").addEventListener("click", (e) => {
    e.stopPropagation();
    playFilm(film.id);
  });

  card.querySelector(".add-to-list-button").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMyList(film.id);

    // Mettre à jour l'icône
    const button = e.currentTarget;
    const icon = button.querySelector("i");
    if (film.inMyList) {
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
function toggleMyList(filmId) {
  let foundFilm = null;

  // Chercher le film dans toutes les catégories
  Object.keys(films).forEach((category) => {
    const film = films[category].find((f) => f.id === filmId);
    if (film) {
      film.inMyList = !film.inMyList;
      foundFilm = film;
    }
  });

  // Sauvegarder la liste mise à jour
  saveMyList();

  // Si nous sommes sur la page "Ma Liste", mettre à jour l'affichage
  const myListContainer = document.getElementById("myListContainer");
  if (myListContainer && foundFilm && !foundFilm.inMyList) {
    // Si le film a été retiré de Ma Liste, le supprimer de l'affichage
    const cardToRemove = document.querySelector(`[data-film-id="${filmId}"]`);
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }
}

// Fonction pour afficher les détails du film
function showFilmDetails(filmId) {
  const film = findFilmById(filmId);
  if (!film) return;

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  modalBackdrop.style.backgroundImage = `url('${film.backdrop}')`;

  modalContent.innerHTML = `
          <div class="flex flex-col gap-6">
              <h1 class="text-4xl font-bold">${film.title}</h1>
              <div class="flex items-center space-x-4 text-sm">
                  <span class="text-green-500">${film.rating} Note</span>
                  <span>${film.year}</span>
                  <span>${film.duration}</span>
                  <span class="px-2 py-1 bg-gray-800 rounded">${
                    film.genre
                  }</span>
              </div>
              <p class="text-lg">${film.description}</p>
              <div class="flex space-x-4">
                  <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" onclick="playFilm(${
                    film.id
                  })">
                      <i class="fas fa-play mr-2"></i> Lecture
                  </button>
                  <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" onclick="toggleMyList(${
                    film.id
                  }); updateMyListButton(${film.id})">
                      <i class="fas ${
                        film.inMyList ? "fa-check" : "fa-plus"
                      } mr-2" id="modalMyListIcon"></i> 
                      <span id="modalMyListText">${
                        film.inMyList
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
                  <p class="mb-2"><span class="text-gray-300">Réalisateur:</span> ${film.director}</p>
                  <p><span class="text-gray-300">Distribution:</span> ${film.cast}</p>
              </div>
              <div>
                  <p class="mb-2"><span class="text-gray-300">Genre:</span> ${film.genre}</p>
                  <p><span class="text-gray-300">Note:</span> ${film.rating}/10</p>
              </div>
          </div>
      `;

  modal.classList.remove("hidden");
}

// Mettre à jour le bouton "Ma Liste" dans le modal
function updateMyListButton(filmId) {
  const film = findFilmById(filmId);
  if (!film) return;

  const icon = document.getElementById("modalMyListIcon");
  const text = document.getElementById("modalMyListText");

  if (icon && text) {
    if (film.inMyList) {
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
function playFilm(filmId) {
  const film = findFilmById(filmId);
  if (!film || !film.videoUrl) return;

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
    iframe.src = film.videoUrl + "?autoplay=1";
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
function findFilmById(filmId) {
  let foundFilm = null;

  Object.keys(films).forEach((category) => {
    const film = films[category].find((f) => f.id === filmId);
    if (film) {
      foundFilm = film;
    }
  });

  return foundFilm;
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
  Object.entries(films).forEach(([category, filmList]) => {
    const container = document.getElementById(category);
    if (container) {
      filmList.forEach((film) => {
        container.appendChild(createFilmCard(film));
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
  const heroPlayButton = document.getElementById("playButton");
  if (heroPlayButton) {
    heroPlayButton.addEventListener("click", () => {
      // Lire le film de la bannière (utilisons le premier film d'action)
      if (films.action.length > 0) {
        playFilm(films.action[0].id);
      }
    });
  }

  const heroInfoButton = document.getElementById("infoButton");
  if (heroInfoButton) {
    heroInfoButton.addEventListener("click", () => {
      // Afficher les détails du film de la bannière
      if (films.action.length > 0) {
        showFilmDetails(films.action[0].id);
      }
    });
  }
});

// Exporter les fonctions pour les rendre accessibles globalement
window.showFilmDetails = showFilmDetails;
window.closeModal = closeModal;
window.playFilm = playFilm;
window.closeVideoPlayer = closeVideoPlayer;
window.toggleMyList = toggleMyList;
window.updateMyListButton = updateMyListButton;
