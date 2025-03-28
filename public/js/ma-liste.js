// Gestion de la liste personnelle

// Charger la liste personnelle depuis le stockage local
function loadMyList() {
  const savedList = localStorage.getItem("myList");
  if (savedList) {
    return JSON.parse(savedList);
  }
  return [];
}

// Sauvegarder la liste personnelle dans le stockage local
function saveMyList(list) {
  localStorage.setItem("myList", JSON.stringify(list));
}

// Retirer un élément de la liste
function removeFromMyList(itemId) {
  const myList = loadMyList();
  const updatedList = myList.filter((item) => item.id !== itemId);
  saveMyList(updatedList);
  return updatedList;
}

// Fonction pour créer une carte pour un élément de Ma Liste
function createMyListCard(item) {
  const card = document.createElement("div");
  card.className =
    "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";
  card.setAttribute("data-item-id", item.id);

  // Déterminer le type d'élément (film ou série)
  let type = item.type || (item.id < 100 ? "film" : "serie");
  card.setAttribute("data-item-type", type);

  let badgeHtml = "";
  if (item.isNew) {
    badgeHtml = `<div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">NOUVEAU</div>`;
  }

  card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="w-full h-auto rounded-lg shadow-lg">
          ${badgeHtml}
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
              <div class="p-4 w-full">
                  <h3 class="text-lg font-bold mb-1">${item.title}</h3>
                  <div class="flex items-center justify-between">
                      <p class="text-sm text-gray-300">${item.genre}</p>
                      <div class="flex space-x-2">
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button" data-id="${item.id}">
                              <i class="fas fa-info-circle"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button" data-id="${item.id}">
                              <i class="fas fa-play"></i>
                          </button>
                          <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full remove-button active" data-id="${item.id}">
                              <i class="fas fa-check"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `;

  // Ajouter les écouteurs d'événements pour les boutons
  card.querySelector(".info-button").addEventListener("click", (e) => {
    e.stopPropagation();
    showItemDetails(item);
  });

  card.querySelector(".play-button").addEventListener("click", (e) => {
    e.stopPropagation();
    playItem(item);
  });

  card.querySelector(".remove-button").addEventListener("click", (e) => {
    e.stopPropagation();

    // Retirer de la liste et mettre à jour l'affichage
    const itemId = parseInt(e.currentTarget.getAttribute("data-id"));
    removeFromMyListAndUpdate(itemId);
  });

  return card;
}

// Fonction pour afficher les détails d'un élément
function showItemDetails(item) {
  if (!item) return;

  // Déterminer le type (film ou série)
  const type = item.type || (item.id < 100 ? "film" : "serie");

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  modalBackdrop.style.backgroundImage = `url('${item.backdrop}')`;

  modalContent.innerHTML = `
          <div class="flex flex-col gap-6">
              ${
                item.isNew
                  ? '<span class="inline-block bg-red-600 text-white px-2 py-1 text-xs rounded mb-2">NOUVEAU</span>'
                  : ""
              }
              <h1 class="text-4xl font-bold">${item.title}</h1>
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
                  <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" onclick="playItem(${JSON.stringify(
                    item
                  ).replace(/"/g, "&quot;")})">
                      <i class="fas fa-play mr-2"></i> Lecture
                  </button>
                  <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" onclick="removeFromMyListAndUpdate(${
                    item.id
                  })">
                      <i class="fas fa-times mr-2"></i> 
                      <span>Retirer de Ma Liste</span>
                  </button>
              </div>
          </div>
      `;

  modalDetails.innerHTML = `
          <div class="grid grid-cols-2 gap-8">
              <div>
                  ${
                    type === "serie"
                      ? `<p class="mb-2"><span class="text-gray-300">Créateur:</span> ${
                          item.creator || "Non disponible"
                        }</p>`
                      : `<p class="mb-2"><span class="text-gray-300">Réalisateur:</span> ${
                          item.director || "Non disponible"
                        }</p>`
                  }
                  <p><span class="text-gray-300">Distribution:</span> ${
                    item.cast || "Non disponible"
                  }</p>
              </div>
              <div>
                  ${
                    type === "serie"
                      ? `<p class="mb-2"><span class="text-gray-300">Saisons:</span> ${
                          item.seasons || "N/A"
                        }</p>`
                      : ""
                  }
                  <p class="mb-2"><span class="text-gray-300">Genre:</span> ${
                    item.genre
                  }</p>
                  <p><span class="text-gray-300">Note:</span> ${
                    item.rating
                  }/10</p>
              </div>
          </div>
      `;

  modal.classList.remove("hidden");
}

// Fonction pour retirer un élément de Ma Liste et mettre à jour l'affichage
function removeFromMyListAndUpdate(itemId) {
  const updatedList = removeFromMyList(itemId);

  // Supprimer la carte de l'élément dans l'interface
  const cardToRemove = document.querySelector(`[data-item-id="${itemId}"]`);
  if (cardToRemove) {
    cardToRemove.remove();
  }

  // Si la liste est vide, afficher un message
  const myListContainer = document.getElementById("myListContainer");
  const emptyListMessage = document.getElementById("emptyListMessage");

  if (myListContainer && emptyListMessage && updatedList.length === 0) {
    myListContainer.classList.add("hidden");
    emptyListMessage.classList.remove("hidden");
  }

  // Fermer le modal si ouvert
  const modal = document.getElementById("movieModal");
  if (modal && !modal.classList.contains("hidden")) {
    closeModal();
  }
}

// Fonction pour lire un élément (film ou série)
function playItem(item) {
  if (!item || !item.videoUrl) return;

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

// Fonction pour fermer le modal
function closeModal() {
  const modal = document.getElementById("movieModal");
  modal.classList.add("hidden");
}

// Gestion des filtres
function applyFilter(filterType) {
  const allCards = document.querySelectorAll("#myListContainer > div");
  const filterButtons = {
    all: document.getElementById("allFilter"),
    films: document.getElementById("filmsFilter"),
    series: document.getElementById("seriesFilter"),
  };

  // Mettre à jour l'apparence des boutons
  Object.values(filterButtons).forEach((button) => {
    if (button) {
      button.classList.remove("bg-white", "text-black");
      button.classList.add("bg-gray-800", "text-white", "hover:bg-gray-700");
    }
  });

  if (filterButtons[filterType]) {
    filterButtons[filterType].classList.remove(
      "bg-gray-800",
      "text-white",
      "hover:bg-gray-700"
    );
    filterButtons[filterType].classList.add("bg-white", "text-black");
  }

  // Appliquer le filtre
  if (filterType === "all") {
    allCards.forEach((card) => card.classList.remove("hidden"));
  } else if (filterType === "films") {
    allCards.forEach((card) => {
      const isFilm = card.getAttribute("data-item-type") === "film";
      card.classList.toggle("hidden", !isFilm);
    });
  } else if (filterType === "series") {
    allCards.forEach((card) => {
      const isSerie = card.getAttribute("data-item-type") === "serie";
      card.classList.toggle("hidden", !isSerie);
    });
  }
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
  const myList = loadMyList();
  const myListContainer = document.getElementById("myListContainer");
  const emptyListMessage = document.getElementById("emptyListMessage");

  // Vérifier si la liste est vide
  if (myList.length === 0) {
    if (myListContainer) myListContainer.classList.add("hidden");
    if (emptyListMessage) emptyListMessage.classList.remove("hidden");
  } else {
    // Remplir la liste avec les éléments
    if (myListContainer) {
      myList.forEach((item) => {
        myListContainer.appendChild(createMyListCard(item));
      });
    }
    if (emptyListMessage) emptyListMessage.classList.add("hidden");
  }

  // Configurer les écouteurs pour les filtres
  const allFilter = document.getElementById("allFilter");
  const filmsFilter = document.getElementById("filmsFilter");
  const seriesFilter = document.getElementById("seriesFilter");

  if (allFilter) {
    allFilter.addEventListener("click", () => applyFilter("all"));
  }

  if (filmsFilter) {
    filmsFilter.addEventListener("click", () => applyFilter("films"));
  }

  if (seriesFilter) {
    seriesFilter.addEventListener("click", () => applyFilter("series"));
  }

  // Fermer le modal en cliquant en dehors
  const modal = document.getElementById("movieModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Exporter les fonctions pour les rendre accessibles globalement
window.closeModal = closeModal;
window.closeVideoPlayer = closeVideoPlayer;
window.removeFromMyListAndUpdate = removeFromMyListAndUpdate;
window.playItem = playItem;
