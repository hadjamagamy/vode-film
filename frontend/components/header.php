<!-- Navigation -->
<nav class="fixed w-full bg-gradient-to-b from-black via-black/90 to-transparent z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-8">
            <div class="text-red-600 text-3xl font-bold">NETFLIXCLONE</div>
            <ul class="hidden md:flex space-x-6" id="navCategories">
                <!-- Les catégories seront chargées dynamiquement ici par le JavaScript -->
                <li class="skeleton-loader bg-gray-800 animate-pulse h-6 w-24 rounded"></li>
                <li class="skeleton-loader bg-gray-800 animate-pulse h-6 w-24 rounded"></li>
                <li class="skeleton-loader bg-gray-800 animate-pulse h-6 w-24 rounded"></li>
            </ul>
        </div>
        <div class="flex items-center space-x-4">
            <div class="relative">
                <button id="searchToggle" class="text-white hover:text-gray-300">
                    <i class="fas fa-search"></i>
                </button>
                <div id="searchBar" class="hidden absolute right-0 top-10 bg-black/90 p-2 rounded-lg w-64">
                    <input type="search" placeholder="Titres, personnes, genres"
                        class="w-full px-4 py-2 rounded bg-gray-800 text-white">
                </div>
            </div>
            <div class="relative group">
                <button class="flex items-center space-x-2 hover:text-gray-300">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Profile"
                        class="w-8 h-8 rounded-full">
                    <i class="fas fa-caret-down group-hover:rotate-180 transition-transform"></i>
                </button>
                <div class="hidden group-hover:block absolute right-0 top-full mt-2 bg-black/90 rounded-lg overflow-hidden">
                    <ul class="w-48">
                        <li><a href="#profile" class="block px-4 py-2 hover:bg-gray-800">Profil</a></li>
                        <li><a href="#account" class="block px-4 py-2 hover:bg-gray-800">Compte</a></li>
                        <li><a href="#help" class="block px-4 py-2 hover:bg-gray-800">Centre d'aide</a></li>
                        <li>
                            <hr class="border-gray-600 my-1">
                        </li>
                        <li><a href="#logout" class="block px-4 py-2 hover:bg-gray-800">Se déconnecter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>

<style>
    @keyframes pulse {
        0%, 100% {
            opacity: 0.7;
        }
        50% {
            opacity: 0.3;
        }
    }
    .animate-pulse {
        animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
</style>

<script>
// Fonction pour charger les catégories du menu
async function loadMenuCategories() {
  try {
    const response = await fetch('/backend/api/api-proxy.php?endpoint=categories');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des catégories');
    }
    
    const data = await response.json();
    displayMenuCategories(data.items);
  } catch (error) {
    console.error('Erreur:', error);
    // Afficher un menu de secours en cas d'erreur
    displayFallbackMenu();
  }
}

// Fonction pour afficher les catégories dans le menu
function displayMenuCategories(categories) {
  const menuContainer = document.getElementById('navCategories');
  if (!menuContainer) return;
  
  // Vider le contenu existant du menu
  menuContainer.innerHTML = '';
  
  // Ajouter l'accueil
  const homeItem = document.createElement('li');
  homeItem.innerHTML = '<a href="/frontend/index.php" class="hover:text-gray-300">Accueil</a>';
  menuContainer.appendChild(homeItem);
  
  // Ajouter chaque catégorie
  categories.forEach(category => {
    const menuItem = document.createElement('li');
    
    // Créer un menu déroulant pour la catégorie "Genres"
    if (category.title === "Genres" && category.sub_categories && category.sub_categories.length > 0) {
      menuItem.innerHTML = `
        <div class="relative group">
          <a href="#" class="hover:text-gray-300 flex items-center">
            ${category.title}
            <i class="fas fa-caret-down ml-1 group-hover:rotate-180 transition-transform"></i>
          </a>
          <div class="hidden group-hover:block absolute left-0 top-full mt-2 bg-black/90 rounded-lg overflow-hidden z-10">
            <ul class="w-48">
              ${category.sub_categories.map(subCat => 
                `<li><a href="/frontend/category.php?category_url=${encodeURIComponent(subCat.url)}&title=${encodeURIComponent(subCat.title)}" class="block px-4 py-2 hover:bg-gray-800">${subCat.title}</a></li>`
              ).join('')}
            </ul>
          </div>
        </div>
      `;
    } else if (category.has_movies || ["Documentaire", "Animation", "À l'affiche", "Spectacle"].includes(category.title)) {
      // Afficher un lien simple pour les autres catégories
      menuItem.innerHTML = `<a href="/frontend/category.php?category_url=${encodeURIComponent(category.url)}&title=${encodeURIComponent(category.title)}" class="hover:text-gray-300">${category.title}</a>`;
    }
    
    menuContainer.appendChild(menuItem);
  });
  
  // Ajouter "Ma Liste" à la fin
  const myListItem = document.createElement('li');
  myListItem.innerHTML = '<a href="/ma-liste" class="hover:text-gray-300">Ma Liste</a>';
  menuContainer.appendChild(myListItem);
}

// Fonction pour afficher un menu de secours en cas d'erreur
function displayFallbackMenu() {
  const menuContainer = document.getElementById('navCategories');
  if (!menuContainer) return;
  
  menuContainer.innerHTML = `
    <li><a href="/" class="hover:text-gray-300">Accueil</a></li>
    <li><a href="#" class="hover:text-gray-300">Films</a></li>
    <li><a href="#" class="hover:text-gray-300">Séries</a></li>
    <li><a href="/ma-liste" class="hover:text-gray-300">Ma Liste</a></li>
  `;
}

// Configurer le bouton de recherche
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

// Exécuter au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Charger les catégories
  loadMenuCategories();
  
  // Configurer la barre de recherche
  setupSearchBar();
});
</script>