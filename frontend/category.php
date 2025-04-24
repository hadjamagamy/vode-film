<?php
// Récupérer l'URL de la catégorie depuis les paramètres GET
$categoryUrl = isset($_GET['category_url']) ? $_GET['category_url'] : '';
$categoryTitle = isset($_GET['title']) ? $_GET['title'] : 'Catégorie';

// Si l'URL n'est pas fournie, rediriger vers la page d'accueil
if (empty($categoryUrl)) {
    header('Location: /');
    exit;
}

$pageTitle = $categoryTitle;
$content = '
    <!-- En-tête de la catégorie -->
    <div class="pt-24 pb-6">
        <div class="container mx-auto px-4">
            <h1 class="text-3xl md:text-4xl font-bold mb-2">' . htmlspecialchars($categoryTitle) . '</h1>
            <p class="text-gray-400" id="category-count">Chargement des films...</p>
        </div>
    </div>
    
    <!-- Grille de films -->
    <section class="py-6">
        <div class="container mx-auto px-4">
            <div id="category-loading" class="text-center py-12">
                <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
                <p class="mt-4 text-gray-400">Chargement des films...</p>
            </div>
            
            <div id="category-error" class="hidden text-center py-12">
                <i class="fas fa-exclamation-circle text-red-500 text-4xl mb-4"></i>
                <p class="text-gray-400">Une erreur est survenue lors du chargement des films. <span id="error-details"></span></p>
                <p class="mt-2"><button id="retry-button" class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded">Réessayer</button></p>
            </div>
            
            <div id="category-films" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <!-- Les films seront ajoutés ici dynamiquement -->
            </div>
            
            <!-- Indicateur de chargement pour le défilement infini -->
            <div id="infinite-loader" class="hidden text-center py-8 mt-4">
                <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
                <p class="mt-2 text-gray-400">Chargement de plus de films...</p>
            </div>
            
            <!-- Message de fin de liste -->
            <div id="end-of-list" class="hidden text-center py-8">
                <p class="text-gray-400">Vous avez atteint la fin de la liste</p>
            </div>
        </div>
    </section>
    
    <!-- Modal pour les détails du film -->
    <div id="movieModal" class="hidden fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div class="bg-zinc-900 rounded-lg max-w-4xl w-full mx-4 overflow-hidden">
            <div class="relative">
                <div id="modalBackdrop" class="w-full h-96 bg-cover bg-center"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                <button onclick="closeModal()" class="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 p-2 rounded-full">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="p-8">
                <div id="modalContent"></div>
                <div class="mt-8">
                    <h4 class="text-xl font-bold mb-4">À propos de ce film</h4>
                    <div id="modalDetails" class="text-gray-400"></div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        /* Styles pour limiter à 2 lignes le titre des films */
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        /* Assurer une transition fluide sur l\'image */
        .group:hover img {
            transition-duration: 300ms;
        }
        
        /* Animation pour le défilement infini */
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
        // Variables pour gérer le défilement infini
        let categoryFilms = [];
        let currentPage = 1;
        let totalPages = 1;
        let isLoading = false;
        let hasReachedEnd = false;
        
        // URL de la catégorie
        const categoryUrl = "' . $categoryUrl . '";
        
        // Fonction pour charger les films d\'une catégorie
        async function loadCategoryFilms(page = 1, append = false) {
            if (isLoading) return;
            
            const filmsContainer = document.getElementById("category-films");
            const loadingElement = document.getElementById("category-loading");
            const errorElement = document.getElementById("category-error");
            const errorDetails = document.getElementById("error-details");
            const countElement = document.getElementById("category-count");
            const infiniteLoader = document.getElementById("infinite-loader");
            const endOfList = document.getElementById("end-of-list");
            
            // Marquer comme en cours de chargement
            isLoading = true;
            
            // Afficher l\'indicateur de chargement approprié
            if (append) {
                infiniteLoader.classList.remove("hidden");
            } else {
                loadingElement.classList.remove("hidden");
                filmsContainer.innerHTML = "";
                errorElement.classList.add("hidden");
                endOfList.classList.add("hidden");
            }
            
            try {
                // Extraire le numéro de la page de l\'URL de catégorie
                let pageUrl = categoryUrl;
                if (page > 1) {
                    // Vérifier si l\'URL se termine par un chiffre
                    if (/\/\d+$/.test(pageUrl)) {
                        // Remplacer le dernier chiffre par le numéro de page
                        pageUrl = pageUrl.replace(/\/\d+$/, `/${page - 1}`);
                    } else {
                        // Ajouter le numéro de page à la fin
                        pageUrl = `${pageUrl}/${page - 1}`;
                    }
                }
                
                const apiUrl = `/backend/api/api-proxy.php?category_url=${encodeURIComponent(pageUrl)}`;
                console.log(`Chargement de la page ${page}: ${apiUrl}`);
                
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                // Vérifier si la réponse contient une erreur
                if (data.error) {
                    console.error("Erreur API:", data);
                    throw new Error(data.error + (data.raw_response ? ": " + data.raw_response : ""));
                }
                
                const newFilms = data.items || [];
                totalPages = data.total_pages || 1;
                
                console.log(`Page ${page}/${totalPages} chargée avec ${newFilms.length} films`);
                
                if (!append) {
                    categoryFilms = newFilms;
                } else {
                    // Ajouter uniquement les nouveaux films qui ne sont pas déjà dans la liste
                    const existingUrls = new Set(categoryFilms.map(film => film.url));
                    const uniqueNewFilms = newFilms.filter(film => !existingUrls.has(film.url));
                    categoryFilms = [...categoryFilms, ...uniqueNewFilms];
                }
                
                currentPage = page;
                
                // Mettre à jour le compteur de films
                countElement.textContent = `${data.total || categoryFilms.length} films trouvés`;
                
                // Masquer les indicateurs de chargement
                loadingElement.classList.add("hidden");
                infiniteLoader.classList.add("hidden");
                
                // Afficher les films
                if (newFilms.length === 0 && !append) {
                    filmsContainer.innerHTML = "<p class=\'text-center col-span-full py-12 text-gray-400\'>Aucun film trouvé dans cette catégorie.</p>";
                } else if (append) {
                    // Ajouter les nouveaux films à la fin
                    newFilms.forEach(movie => {
                        // Vérifier si le film n\'est pas déjà affiché
                        if (!document.querySelector(`[data-movie-url="${movie.url}"]`)) {
                            filmsContainer.appendChild(createMovieCard(movie));
                        }
                    });
                } else {
                    // Remplacer tout le contenu
                    filmsContainer.innerHTML = "";
                    categoryFilms.forEach(movie => {
                        filmsContainer.appendChild(createMovieCard(movie));
                    });
                }
                
                // Vérifier si on a atteint la fin de la liste
                hasReachedEnd = currentPage >= totalPages || newFilms.length === 0;
                
                if (hasReachedEnd) {
                    endOfList.classList.remove("hidden");
                    // Détacher l\'observateur
                    if (window.infiniteScrollObserver) {
                        window.infiniteScrollObserver.disconnect();
                    }
                } else if (append) {
                    // Rendre visible l\'élément observé pour continuer le défilement
                    infiniteLoader.classList.remove("hidden");
                }
                
            } catch (error) {
                console.error("Erreur lors du chargement des films:", error);
                loadingElement.classList.add("hidden");
                infiniteLoader.classList.add("hidden");
                
                if (!append) {
                    errorElement.classList.remove("hidden");
                    if (errorDetails) errorDetails.textContent = error.message || "";
                }
            } finally {
                isLoading = false;
            }
        }
        
       // Fonction pour créer une carte de film avec ajustements pour les images de tailles différentes
function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "relative aspect-[2/3] group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 rounded-lg shadow-lg overflow-hidden";
      card.setAttribute(\'data-movie-url\', movie.url);
    
    // Extraire le genre principal (après le point)
         const genreParts = movie.genre.split(\' . \');
    const primaryGenre = genreParts.length > 1 ? genreParts[1] : genreParts[0];
    
    // Vérifier si le film est dans "Ma Liste"
    let myList = JSON.parse(localStorage.getItem("myList") || "[]");
    const inMyList = myList.some(item => item.url === movie.url);
    
    // Structure importante : l\'image et le gradient sont au même niveau hiérarchique
    // pour que le gradient couvre parfaitement l\'image
    card.innerHTML = `
        <!-- Container d\'image en pleine taille -->
        <img src="${movie.cover}" alt="${movie.title}" class="absolute inset-0 w-full h-full object-cover">
        
        <!-- Badge HD en position absolue par-dessus l\'image -->
         ${movie.isHD ? \'<span class="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full z-10">HD</span>\' : \'\'}

        
        <!-- Overlay avec dégradé qui couvre toute l\'image -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div class="p-4 w-full">
                <h3 class="text-lg font-bold mb-1 line-clamp-2">${movie.title}</h3>
                <div class="flex items-center justify-between">
                    <p class="text-sm text-gray-300">${primaryGenre}</p>
                    <div class="flex space-x-2">
                        <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full info-button">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full play-button">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full add-to-list-button ${inMyList ? "active" : ""}">
                            <i class="fas ${inMyList ? "fa-check" : "fa-plus"}"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // On stocke l\'objet movie directement sur l\'élément card pour le retrouver facilement
    card._movieData = movie;
    
    // Ajouter les écouteurs d\'événements
    card.querySelector(".info-button").addEventListener("click", (e) => {
        e.stopPropagation();
        showMovieDetails(movie);
    });
    
    card.querySelector(".play-button").addEventListener("click", (e) => {
        e.stopPropagation();
        playMovie(movie);
    });
    
    card.querySelector(".add-to-list-button").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMyList(movie, e.currentTarget);
    });
    
    // Ajouter un clic sur toute la carte pour afficher les détails
    card.addEventListener("click", () => {
        showMovieDetails(movie);
    });
    
    return card;
}
        
        // Configurer l\'observateur d\'intersection pour le défilement infini
        function setupInfiniteScroll() {
            const options = {
                root: null, // Utiliser la fenêtre d\'affichage comme conteneur
                rootMargin: "0px 0px 300px 0px", // Déclencher 300px avant d\'atteindre le bas
                threshold: 0.1 // Déclencher lorsque 10% de l\'élément est visible
            };
            
            const infiniteLoader = document.getElementById("infinite-loader");
            if (!infiniteLoader) return;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !isLoading && !hasReachedEnd) {
                        // Charger la page suivante
                        loadCategoryFilms(currentPage + 1, true);
                    }
                });
            }, options);
            
            // Observer l\'indicateur de chargement
            observer.observe(infiniteLoader);
            
            // Sauvegarder l\'observateur pour pouvoir le détacher plus tard
            window.infiniteScrollObserver = observer;
        }
        
        // Fonction pour afficher les détails d\'un film
        function showMovieDetails(movie) {
            console.log("Affichage des détails du film:", movie);
            if (!movie) {
                console.error("Données du film manquantes");
                return;
            }
            
            const modal = document.getElementById("movieModal");
            const modalBackdrop = document.getElementById("modalBackdrop");
            const modalContent = document.getElementById("modalContent");
            const modalDetails = document.getElementById("modalDetails");
            
            if (!modal || !modalBackdrop || !modalContent || !modalDetails) {
                console.error("Éléments du modal manquants");
                return;
            }
            
            // Configurer l\'arrière-plan
            modalBackdrop.style.backgroundImage = `url(\'${movie.cover}\')`;
            modalBackdrop.style.backgroundSize = "cover";
            modalBackdrop.style.backgroundPosition = "center";
            
            // Extraire l\'année du titre si disponible
            let year = "";
            const yearMatch = movie.title.match(/\((\d{4})\)$/);
            if (yearMatch) {
                year = yearMatch[1];
            }
            
            // Vérifier si le film est dans "Ma Liste"
            let myList = JSON.parse(localStorage.getItem("myList") || "[]");
            const inMyList = myList.some(item => item.url === movie.url);
            
            // Contenu principal avec JSON stringifié sécurisé
            const movieJson = JSON.stringify(movie)
                .replace(/"/g, \'&quot;\')
                .replace(/\'/g, \'&#39;\');
            
            modalContent.innerHTML = `
                <div class="flex flex-col gap-6">
                    <h1 class="text-4xl font-bold">${movie.title}</h1>
                    <div class="flex items-center flex-wrap gap-2">
                        ${year ? `<span class="text-gray-300">${year}</span>` : ""}
                        <span class="px-2 py-1 bg-gray-800 rounded">${movie.genre}</span>
                        ${movie.isHD ? \'<span class="px-2 py-1 bg-blue-800 rounded">HD</span>\' : \'\'}
                    </div>
                    <p class="text-lg">${movie.synopsis || "Pas de synopsis disponible"}</p>
                    <div class="flex space-x-4">
                        <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center" id="modal-play-button">
                            <i class="fas fa-play mr-2"></i> Lecture
                        </button>
                        <button class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center" id="modal-list-button">
                            <i class="fas ${inMyList ? "fa-check" : "fa-plus"} mr-2" id="modalMyListIcon"></i> 
                            <span id="modalMyListText">${inMyList ? "Retirer de Ma Liste" : "Ajouter à Ma Liste"}</span>
                        </button>
                    </div>
                </div>
            `;
            
            // Détails supplémentaires
            modalDetails.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p class="mb-2"><span class="text-gray-300">Genre:</span> ${movie.genre}</p>
                    </div>
                    <div>
                        <p class="mb-2"><span class="text-gray-300">Qualité:</span> ${movie.isHD ? "HD" : "Standard"}</p>
                    </div>
                </div>
            `;
            
            // Ajouter les écouteurs d\'événements après avoir créé les boutons
            document.getElementById("modal-play-button").addEventListener("click", () => playMovie(movie));
            document.getElementById("modal-list-button").addEventListener("click", (e) => toggleMyList(movie, e.currentTarget));
            
            // Afficher le modal
            modal.classList.remove("hidden");
        }
        
        // Fonction pour jouer un film
        function playMovie(movie) {
            console.log("Lecture du film:", movie);
            if (!movie || !movie.movie_iframe_src) {
                console.error("URL de lecture manquante");
                return;
            }
            
            // Fermer le modal de détails si ouvert
            closeModal();
            
            // Créer le modal du lecteur vidéo s\'il n\'existe pas
            let videoPlayerModal = document.getElementById("videoPlayerModal");
            if (!videoPlayerModal) {
                videoPlayerModal = document.createElement("div");
                videoPlayerModal.id = "videoPlayerModal";
                videoPlayerModal.className = "fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50";
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
            
            // Configurer et afficher le lecteur vidéo
            const iframe = document.getElementById("videoIframe");
            if (iframe) {
                iframe.src = movie.movie_iframe_src;
                console.log("URL iframe définie:", movie.movie_iframe_src);
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
            if (modal) {
                modal.classList.add("hidden");
            }
        }
        
        // Fonction pour ajouter/retirer un film de "Ma Liste"
        function toggleMyList(movie, button) {
            console.log("Toggle Ma Liste pour:", movie);
            if (!movie) {
                console.error("Données du film manquantes");
                return;
            }
            
            // Récupérer Ma Liste depuis le stockage local
            let myList = JSON.parse(localStorage.getItem("myList") || "[]");
            const index = myList.findIndex(item => item.url === movie.url);
            
            // Mettre à jour Ma Liste
            if (index === -1) {
                // Ajouter le film
                myList.push(movie);
                
                // Mettre à jour le bouton
                if (button) {
                    const icon = button.querySelector("i");
                    const text = button.querySelector("span");
                    
                    if (icon) {
                        icon.classList.remove("fa-plus");
                        icon.classList.add("fa-check");
                    }
                    
                    if (text) {
                        text.textContent = "Retirer de Ma Liste";
                    }
                }
            } else {
                // Retirer le film
                myList.splice(index, 1);
                
                // Mettre à jour le bouton
                if (button) {
                    const icon = button.querySelector("i");
                    const text = button.querySelector("span");
                    
                    if (icon) {
                        icon.classList.remove("fa-check");
                        icon.classList.add("fa-plus");
                    }
                    
                    if (text) {
                        text.textContent = "Ajouter à Ma Liste";
                    }
                }
            }
            
            // Sauvegarder Ma Liste mise à jour
            localStorage.setItem("myList", JSON.stringify(myList));
            
            // Mettre à jour les icônes dans la liste de films
            updateMovieCardIcons(movie.url, index === -1);
            
            // Mise à jour de l\'icône dans le modal si présent
            const modalIcon = document.getElementById("modalMyListIcon");
            const modalText = document.getElementById("modalMyListText");
            
            if (modalIcon && modalText) {
                if (index === -1) { // Film ajouté
                    modalIcon.classList.remove("fa-plus");
                    modalIcon.classList.add("fa-check");
                    modalText.textContent = "Retirer de Ma Liste";
                } else { // Film retiré
                    modalIcon.classList.remove("fa-check");
                    modalIcon.classList.add("fa-plus");
                    modalText.textContent = "Ajouter à Ma Liste";
                }
            }
        }
        
        // Fonction pour mettre à jour les icônes des cartes de films
        function updateMovieCardIcons(movieUrl, isInList) {
            const cards = document.querySelectorAll(`[data-movie-url="${movieUrl}"]`);
            cards.forEach(card => {
                const button = card.querySelector(".add-to-list-button");
                if (button) {
                    const icon = button.querySelector("i");
                    if (icon) {
                        if (isInList) {
                            icon.classList.remove("fa-plus");
                            icon.classList.add("fa-check");
                            button.classList.add("active");
                        } else {
                            icon.classList.remove("fa-check");
                            icon.classList.add("fa-plus");
                            button.classList.remove("active");
                        }
                    }
                }
            });
        }
        
        // Fonction de débogage
        function debugCardButtons() {
            console.log("Vérification des boutons de carte...");
            const cards = document.querySelectorAll(\'[data-movie-url]\');
            console.log(`Nombre de cartes trouvées: ${cards.length}`);
            
            cards.forEach((card, index) => {
                const infoBtn = card.querySelector(\'.info-button\');
                const playBtn = card.querySelector(\'.play-button\');
                const listBtn = card.querySelector(\'.add-to-list-button\');
                
                console.log(`Carte #${index+1}: ${card.querySelector(\'h3\').textContent}`);
                console.log(`- Bouton info: ${infoBtn ? \'Trouvé\' : \'MANQUANT\'}`);
                console.log(`- Bouton lecture: ${playBtn ? \'Trouvé\' : \'MANQUANT\'}`);
                console.log(`- Bouton liste: ${listBtn ? \'Trouvé\' : \'MANQUANT\'}`);
                
                console.log(`- Données du film: ${card._movieData ? \'Présentes\' : \'MANQUANTES\'}`);
            });
        }
        
        // Détecter la fin du défilement pour charger plus de films
        window.addEventListener("scroll", function() {
            if (isLoading || hasReachedEnd) return;
            
            // Calculer la position de défilement
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            
            // Si l\'utilisateur a défilé jusqu\'à 300px de la fin, charger plus de films
            if (scrollTop + clientHeight >= scrollHeight - 300) {
                console.log("Fin de page atteinte, chargement de plus de films...");
                loadCategoryFilms(currentPage + 1, true);
            }
        });
        
        // Initialiser la page
        document.addEventListener("DOMContentLoaded", () => {
            // Charger les films de la catégorie
            loadCategoryFilms();
            
            // Configurer le défilement infini
            setupInfiniteScroll();
            
            // Configurer le modal
            const movieModal = document.getElementById("movieModal");
            if (movieModal) {
                movieModal.addEventListener("click", (e) => {
                    if (e.target === movieModal) {
                        closeModal();
                    }
                });
            }
            
            // Configurer la touche Echap pour fermer les modals
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    closeModal();
                    closeVideoPlayer();
                }
            });
            
            // Configurer le bouton "Réessayer"
            const retryButton = document.getElementById("retry-button");
            if (retryButton) {
                retryButton.addEventListener("click", () => {
                    loadCategoryFilms();
                });
            }
            
            // Vérifier les boutons après 3 secondes
            setTimeout(debugCardButtons, 3000);
        });
    </script>
';

include 'layout/layout.php';
?>