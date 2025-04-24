/**
 * menu.js - Gestion dynamique du menu de navigation
 * Ce script charge les catégories depuis l'API via un proxy pour éviter les erreurs CORS
 */

// Fonction pour charger les catégories depuis l'API
async function loadCategories() {
  try {
    const response = await fetch('/backend/api/api-proxy.php?endpoint=categories');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des catégories');
    }
    
    const data = await response.json();
    renderCategories(data.items);
  } catch (error) {
    console.error('Erreur lors du chargement des catégories:', error);
    renderFallbackMenu();
  }
}

// Fonction pour afficher les catégories dans le menu
function renderCategories(categories) {
  const menuContainer = document.querySelector('nav .flex.items-center.space-x-8 ul');
  if (!menuContainer) return;
  
  // Vider le menu actuel
  menuContainer.innerHTML = '';
  
  // Ajouter les catégories principales
  categories.forEach(category => {
    // Créer l'élément li pour chaque catégorie
    const listItem = document.createElement('li');
    
    if (category.title === "Genres" && category.sub_categories && category.sub_categories.length > 0) {
      // Créer un menu déroulant pour les genres
      listItem.innerHTML = `
        <div class="relative group">
          <a href="#" class="hover:text-gray-300">
            ${category.title}
            <i class="fas fa-caret-down ml-1 group-hover:rotate-180 transition-transform"></i>
          </a>
          <div class="hidden group-hover:block absolute left-0 top-full mt-2 bg-black/90 rounded-lg overflow-hidden z-50">
            <ul class="w-48">
              ${category.sub_categories.map(subCat => 
                `<li><a href="/frontend/category.php?category_url=${encodeURIComponent(subCat.url)}&title=${encodeURIComponent(subCat.title)}" class="block px-4 py-2 hover:bg-gray-800">${subCat.title}</a></li>`
              ).join('')}
            </ul>
          </div>
        </div>
      `;
    } else if (category.has_movies || ["Documentaire", "Animation", "À l'affiche", "Spectacle"].includes(category.title)) {
      // Lien simple pour les catégories sans sous-catégories
      listItem.innerHTML = `<a href="/frontend/category.php?category_url=${encodeURIComponent(category.url)}&title=${encodeURIComponent(category.title)}" class="hover:text-gray-300">${category.title}</a>`;
    }
    
    menuContainer.appendChild(listItem);
  });
  
  // Ajouter le lien "Ma Liste" à la fin
  const myListItem = document.createElement('li');
  myListItem.innerHTML = '<a href="/ma-liste" class="hover:text-gray-300">Ma Liste</a>';
  menuContainer.appendChild(myListItem);
}

// Fonction de secours pour afficher un menu de base si l'API échoue
function renderFallbackMenu() {
  const menuContainer = document.querySelector('nav .flex.items-center.space-x-8 ul');
  if (!menuContainer) return;
  
  menuContainer.innerHTML = `
    <li><a href="/" class="hover:text-gray-300">Accueil</a></li>
    <li><a href="#" class="hover:text-gray-300">Films</a></li>
    <li><a href="#" class="hover:text-gray-300">Séries</a></li>
    <li><a href="/ma-liste" class="hover:text-gray-300">Ma Liste</a></li>
  `;
}

// Fonction pour configurer le bouton de recherche
function setupSearchToggle() {
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

// Fonction pour gérer l'effet de changement du fond de la navbar au scroll
function setupNavbarScroll() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      // Au sommet de la page, utiliser un dégradé transparent
      nav.classList.remove("bg-black");
      nav.classList.add(
        "bg-gradient-to-b",
        "from-black",
        "via-black/90",
        "to-transparent"
      );
    } else {
      // Lorsqu'on scrolle, utiliser un fond noir solide
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

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Charger les catégories pour le menu
  loadCategories();
  
  // Configurer le bouton de recherche
  setupSearchToggle();
  
  // Configurer l'effet de scroll sur la navbar
  setupNavbarScroll();
});