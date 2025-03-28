// Données des nouveautés
const nouveautes = {
  newThisWeek: [
    {
      id: 201,
      title: "The Batman",
      genre: "Action/Thriller",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
      description:
        "Dans sa deuxième année de lutte contre le crime, Batman enquête sur un tueur en série qui sévit à Gotham. Les indices mènent Bruce Wayne dans les bas-fonds où il rencontre Catwoman, le Pingouin, Carmine Falcone et l'Homme-Mystère.",
      year: "2022",
      duration: "2h 56min",
      rating: "7.8",
      director: "Matt Reeves",
      cast: "Robert Pattinson, Zoë Kravitz, Paul Dano",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
      isNew: true,
      type: "film",
    },
    {
      id: 202,
      title: "Dune",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
      description:
        "Paul Atreides, un jeune homme brillant au destin plus grand que lui-même, doit se rendre sur la planète la plus dangereuse de l'univers pour assurer l'avenir de sa famille et de son peuple.",
      year: "2021",
      duration: "2h 35min",
      rating: "8.0",
      director: "Denis Villeneuve",
      cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/n9xhJrPXop4",
      isNew: true,
      type: "film",
    },
    {
      id: 203,
      title: "Squid Game",
      genre: "Thriller/Drame",
      image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
      description:
        "Des centaines de joueurs fauchés acceptent de s'affronter lors de jeux d'enfants aux enjeux mortels, dans l'espoir de remporter gros.",
      year: "2021",
      duration: "60min/ep",
      rating: "8.7",
      creator: "Hwang Dong-hyuk",
      cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-joon",
      seasons: 1,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/oqxAJKy0ii4",
      isNew: true,
      type: "serie",
    },
  ],
  comingSoon: [
    {
      id: 301,
      title: "Stranger Things S5",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      description:
        "La bataille finale contre Vecna et le Monde à l'Envers commence. Les amis de Hawkins doivent unir leurs forces une dernière fois pour sauver leur ville et le monde entier.",
      year: "2025",
      duration: "50min/ep",
      rating: "-",
      creator: "The Duffer Brothers",
      cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
      seasons: 5,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
      releaseDate: "15 Mars 2025",
      type: "serie",
    },
    {
      id: 302,
      title: "Avatar 3",
      genre: "Science Fiction/Aventure",
      image: "https://image.tmdb.org/t/p/w500/uDsvma9dAwnB9qRUm0h8nmgFNaX.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      description:
        "Jake Sully et Neytiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d'explorer les différentes régions de Pandora. Lorsqu'une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.",
      year: "2024",
      duration: "3h+",
      rating: "-",
      director: "James Cameron",
      cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
      releaseDate: "19 Décembre 2024",
      type: "film",
    },
    {
      id: 303,
      title: "House of the Dragon S2",
      genre: "Fantasy/Drame",
      image: "https://image.tmdb.org/t/p/w500/k47JEUTQsSMN532HRg6RCzZKBdB.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
      description:
        "La guerre civile des Targaryen, connue sous le nom de « Danse des Dragons », se poursuit alors que les factions des Verts et des Noirs s'affrontent pour le Trône de Fer.",
      year: "2024",
      duration: "60min/ep",
      rating: "-",
      creator: "Ryan Condal, George R.R. Martin",
      cast: "Matt Smith, Emma D'Arcy, Olivia Cooke",
      seasons: 2,
      inMyList: false,
      videoUrl: "https://www.youtube.com/embed/KmWnXwlnzP0",
      releaseDate: "16 Juin 2024",
      type: "serie",
    },
  ],
};

// Sauvegarder la liste personnelle dans le stockage local
function saveMyList() {
  const myList = getAllNouveautesInMyList();
  const savedList = localStorage.getItem("myList")
    ? JSON.parse(localStorage.getItem("myList"))
    : [];

  // Fusionner avec les films et séries existants mais éviter les doublons
  const existingIds = savedList.map((item) => item.id);
  const newItems = myList.filter((item) => !existingIds.includes(item.id));

  const updatedList = [...savedList, ...newItems];
  localStorage.setItem("myList", JSON.stringify(updatedList));
}

// Charger la liste personnelle depuis le stockage local
function loadMyList() {
  const savedList = localStorage.getItem("myList");
  if (savedList) {
    const myList = JSON.parse(savedList);

    // Mettre à jour l'état de inMyList pour toutes les nouveautés
    Object.keys(nouveautes).forEach((category) => {
      nouveautes[category].forEach((item) => {
        item.inMyList = myList.some((savedItem) => savedItem.id === item.id);
      });
    });
  }
}

// Obtenir tous les éléments de nouveautés qui sont dans "Ma Liste"
function getAllNouveautesInMyList() {
  const myList = [];

  Object.keys(nouveautes).forEach((category) => {
    nouveautes[category].forEach((item) => {
      if (item.inMyList) {
        myList.push(item);
      }
    });
  });

  return myList;
}

// Fonction pour créer une carte de nouveauté
function createNouveauteCard(item) {
  const card = document.createElement("div");
  card.className =
    "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";

  let badgeHtml = "";
  if (item.isNew) {
    badgeHtml = `<div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">NOUVEAU</div>`;
  } else if (item.releaseDate) {
    badgeHtml = `<div class="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs rounded">Bientôt</div>`;
  }

  card.innerHTML = `
          <img src="${item.image}" alt="${
    item.title
  }" class="w-full h-auto rounded-lg shadow-lg">
          ${badgeHtml}
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
              <div class="p-4 w-full">
                  <h3 class="text-lg font-bold mb-1">${item.title}</h3>
                  <div class="flex items-center justify-between">
                      <p class="text-sm text-gray-300">${item.genre}${
    item.releaseDate ? ` • ${item.releaseDate}` : ""
  }</p>
                      <div class="flex space-x-2">
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button" data-id="${
                            item.id
                          }">
                              <i class="fas fa-info-circle"></i>
                          </button>
                          ${
                            !item.releaseDate
                              ? `
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button" data-id="${item.id}">
                              <i class="fas fa-play"></i>
                          </button>
                          `
                              : ""
                          }
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full add-to-list-button ${
                            item.inMyList ? "active" : ""
                          }" data-id="${item.id}">
                              <i class="fas ${
                                item.inMyList ? "fa-check" : "fa-plus"
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
    showNouveauteDetails(item.id);
  });

  const playButton = card.querySelector(".play-button");
  if (playButton) {
    playButton.addEventListener("click", (e) => {
      e.stopPropagation();
      playNouveaute(item.id);
    });
  }

  card.querySelector(".add-to-list-button").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMyList(item.id);

    // Mettre à jour l'icône
    const button = e.currentTarget;
    const icon = button.querySelector("i");
    if (item.inMyList) {
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

// Fonction pour ajouter/retirer une nouveauté de "Ma Liste"
function toggleMyList(itemId) {
  let foundItem = null;

  // Chercher l'élément dans toutes les catégories
  Object.keys(nouveautes).forEach((category) => {
    const item = nouveautes[category].find((i) => i.id === itemId);
    if (item) {
      item.inMyList = !item.inMyList;
      foundItem = item;
    }
  });

  // Sauvegarder la liste mise à jour
  saveMyList();

  // Si nous sommes sur la page "Ma Liste", mettre à jour l'affichage
  const myListContainer = document.getElementById("myListContainer");
  if (myListContainer && foundItem && !foundItem.inMyList) {
    // Si l'élément a été retiré de Ma Liste, le supprimer de l'affichage
    const cardToRemove = document.querySelector(`[data-item-id="${itemId}"]`);
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }
}

// Fonction pour afficher les détails d'une nouveauté
function showNouveauteDetails(itemId) {
  const item = findNouveauteById(itemId);
  if (!item) return;

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  modalBackdrop.style.backgroundImage = `url('${item.backdrop}')`;

  let statusBadge = "";
  if (item.isNew) {
    statusBadge =
      '<span class="bg-red-600 text-white px-2 py-1 text-xs rounded mr-2">NOUVEAU</span>';
  } else if (item.releaseDate) {
    statusBadge = `<span class="bg-blue-600 text-white px-2 py-1 text-xs rounded mr-2">À venir: ${item.releaseDate}</span>`;
  }

  modalContent.innerHTML = `
          <div class="flex flex-col gap-6">
              <div>
                  ${statusBadge}
                  <h1 class="text-4xl font-bold mt-2">${item.title}</h1>
              </div>
              <div class="flex items-center space-x-4 text-sm">
                  <span class="text-green-500">${item.rating} Note</span>
                  <span>${item.year}</span>
                  <span>${item.duration}</span>
                  <span class="px-2 py-1 bg-gray-800 rounded">${
                    item.genre
                  }</span>
              </div>
              <p class="text-lg">${item.description}</p>
              <div class="flex space-x-4">
                  ${
                    !item.releaseDate
                      ? `
                  <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" onclick="playNouveaute(${item.id})">
                      <i class="fas fa-play mr-2"></i> Lecture
                  </button>
                  `
                      : `
                  <button class="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 flex items-center">
                      <i class="fas fa-bell mr-2"></i> Me rappeler
                  </button>
                  `
                  }
                  <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" onclick="toggleMyList(${
                    item.id
                  }); updateMyListButton(${item.id})">
                      <i class="fas ${
                        item.inMyList ? "fa-check" : "fa-plus"
                      } mr-2" id="modalMyListIcon"></i> 
                      <span id="modalMyListText">${
                        item.inMyList
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
                  ${
                    item.type === "serie"
                      ? `<p class="mb-2"><span class="text-gray-300">Créateur:</span> ${item.creator}</p>`
                      : `<p class="mb-2"><span class="text-gray-300">Réalisateur:</span> ${item.director}</p>`
                  }
                  <p><span class="text-gray-300">Distribution:</span> ${
                    item.cast
                  }</p>
              </div>
              <div>
                  ${
                    item.type === "serie"
                      ? `<p class="mb-2"><span class="text-gray-300">Saisons:</span> ${item.seasons}</p>`
                      : ""
                  }
                  <p class="mb-2"><span class="text-gray-300">Genre:</span> ${
                    item.genre
                  }</p>
                  <p><span class="text-gray-300">Note:</span> ${
                    item.rating !== "-" ? `${item.rating}/10` : "À venir"
                  }</p>
              </div>
          </div>
      `;

  modal.classList.remove("hidden");
}

// Mettre à jour le bouton "Ma Liste" dans le modal
function updateMyListButton(itemId) {
  const item = findNouveauteById(itemId);
  if (!item) return;

  const icon = document.getElementById("modalMyListIcon");
  const text = document.getElementById("modalMyListText");

  if (icon && text) {
    if (item.inMyList) {
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

// Fonction pour jouer une nouveauté (ouvrir un lecteur vidéo)
function playNouveaute(itemId) {
  const item = findNouveauteById(itemId);
  if (!item || !item.videoUrl || item.releaseDate) return;

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
    iframe.src = item.videoUrl + "?autoplay=1";
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

// Fonction pour trouver une nouveauté par ID
function findNouveauteById(itemId) {
  let foundItem = null;

  Object.keys(nouveautes).forEach((category) => {
    const item = nouveautes[category].find((i) => i.id === itemId);
    if (item) {
      foundItem = item;
    }
  });

  return foundItem;
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

  // Remplir les sections avec les nouveautés
  Object.entries(nouveautes).forEach(([category, itemList]) => {
    const container = document.getElementById(category);
    if (container) {
      itemList.forEach((item) => {
        container.appendChild(createNouveauteCard(item));
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
      // Jouer la première nouveauté (pour notre bannière, Le Parrain)
      if (nouveautes.newThisWeek.length > 0) {
        playNouveaute(nouveautes.newThisWeek[0].id);
      }
    });
  }

  const heroInfoButton = document.getElementById("infoButton");
  if (heroInfoButton) {
    heroInfoButton.addEventListener("click", () => {
      // Afficher les détails du film de la bannière
      if (nouveautes.newThisWeek.length > 0) {
        showNouveauteDetails(nouveautes.newThisWeek[0].id);
      }
    });
  }
});

// Exporter les fonctions pour les rendre accessibles globalement
window.showNouveauteDetails = showNouveauteDetails;
window.closeModal = closeModal;
window.playNouveaute = playNouveaute;
window.closeVideoPlayer = closeVideoPlayer;
window.toggleMyList = toggleMyList;
window.updateMyListButton = updateMyListButton;
