// Initialisation de la page avec le nouveau système de catégories
document.addEventListener('DOMContentLoaded', () => {
    // Charger les films existants
    Object.entries(movies).forEach(([category, movieList]) => {
        const container = document.getElementById(category);
        if (container) {
            movieList.forEach(movie => {
                container.appendChild(createMovieCard(movie));
            });
        }
    });

    // Charger les nouvelles catégories
    document.querySelectorAll('[data-category]').forEach(element => {
        const category = element.dataset.category;
        const type = element.dataset.type;
        loadCategoryContent(category, type);
    });

    // Gérer la navigation entre les catégories
    const categoryLinks = document.querySelectorAll('[data-category-link]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.categoryLink;
            const type = link.dataset.type;
            
            // Cacher toutes les sections
            document.querySelectorAll('section[data-category]').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Afficher la section sélectionnée
            const targetSection = document.querySelector(`section[data-category="${category}"]`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                loadCategoryContent(category, type);
            }
        });
    });

    // Fermer le modal en cliquant en dehors
    document.getElementById('movieModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('movieModal')) {
            closeModal();
        }
    });
});