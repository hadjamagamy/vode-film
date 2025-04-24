<?php
$pageTitle = 'Accueil';
$content = '
    <!-- Hero Section -->
    <div class="relative h-screen" id="heroSection">
        <div class="hero-skeleton w-full h-full bg-gray-900"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-4 md:p-20">
            <div class="hero-title-placeholder h-16 w-64 md:w-96 bg-gray-800 animate-pulse rounded mb-6"></div>
            <div class="hero-desc-placeholder h-24 w-full max-w-2xl bg-gray-800 animate-pulse rounded mb-6"></div>
            <div class="flex space-x-4">
                <button class="bg-white text-black px-8 py-3 rounded-lg text-xl hover:bg-gray-200 flex items-center" id="playButton">
                    <i class="fas fa-play mr-2"></i> Lecture
                </button>
                <button class="bg-gray-500/50 text-white px-8 py-3 rounded-lg text-xl hover:bg-gray-500/70 flex items-center" id="infoButton">
                    <i class="fas fa-info-circle mr-2"></i> Plus d\'infos
                </button>
            </div>
        </div>
    </div>

    <!-- Catégories -->
    <section class="py-10">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Tendances actuelles</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="trending">
                <!-- Skeleton loaders pour les films -->
                <?php for ($i = 0; $i < 6; $i++): ?>
                <div class="rounded-lg bg-gray-800 animate-pulse h-64"></div>
                <?php endfor; ?>
            </div>
        </div>
    </section>

    <section class="py-10">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Action</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="action">
                <!-- Skeleton loaders pour les films -->
                <?php for ($i = 0; $i < 6; $i++): ?>
                <div class="rounded-lg bg-gray-800 animate-pulse h-64"></div>
                <?php endfor; ?>
            </div>
        </div>
    </section>

    <section class="py-10">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Comédie</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="comedy">
                <!-- Skeleton loaders pour les films -->
                <?php for ($i = 0; $i < 6; $i++): ?>
                <div class="rounded-lg bg-gray-800 animate-pulse h-64"></div>
                <?php endfor; ?>
            </div>
        </div>
    </section>
    
    <!-- Section qui sera remplie dynamiquement pour les nouveautés -->
    <section class="py-10" id="newReleaseSection" style="display: none;">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Nouveautés</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="newReleases">
                <!-- Films seront ajoutés ici dynamiquement -->
            </div>
        </div>
    </section>
    
    <!-- Section qui sera remplie dynamiquement pour les films d\'horreur -->
    <section class="py-10" id="horrorSection" style="display: none;">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Horreur</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="horror">
                <!-- Films seront ajoutés ici dynamiquement -->
            </div>
        </div>
    </section>
    
    <!-- Section qui sera remplie dynamiquement pour les drames -->
    <section class="py-10" id="dramaSection" style="display: none;">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Drame</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="drama">
                <!-- Films seront ajoutés ici dynamiquement -->
            </div>
        </div>
    </section>
    
    <!-- Section qui sera remplie dynamiquement pour les documentaires -->
    <section class="py-10" id="documentarySection" style="display: none;">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Documentaire</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="documentary">
                <!-- Films seront ajoutés ici dynamiquement -->
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
    
    <!-- Style pour les skeleton loaders et animations -->
    <style>
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
        .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    </style>

    <!-- Script pour afficher/masquer les sections selon le contenu -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Fonction pour afficher une section si elle contient des films
            function showSectionIfHasContent(sectionId, containerId) {
                setTimeout(() => {
                    const container = document.getElementById(containerId);
                    const section = document.getElementById(sectionId);
                    
                    if (container && section && container.children.length > 0) {
                        section.style.display = "block";
                    }
                }, 1000); // Délai pour laisser le temps au JS de charger les films
            }
            
            // Vérifier les sections après le chargement des films
            showSectionIfHasContent("newReleaseSection", "newReleases");
            showSectionIfHasContent("horrorSection", "horror");
            showSectionIfHasContent("dramaSection", "drama");
            showSectionIfHasContent("documentarySection", "documentary");
        });
    </script>
';
include 'layout/layout.php';