// Données pour les séries
const series = {
  trending: [
    {
      id: 101,
      title: "Stranger Things",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      description:
        "Dans une petite ville où tout le monde se connaît, la disparition d'un jeune garçon va provoquer l'affolement de sa famille, de ses amis et de toute la communauté.",
      year: "2016",
      duration: "4 Saisons",
      rating: "8.7",
      creator: "Les Frères Duffer",
      cast: "Millie Bobby Brown, Finn Wolfhard, Noah Schnapp",
    },
    {
      id: 102,
      title: "Breaking Bad",
      genre: "Drame",
      image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
      description:
        "Un professeur de chimie atteint d'un cancer s'associe à un ancien élève pour fabriquer et vendre de la méthamphétamine afin d'assurer l'avenir financier de sa famille.",
      year: "2008",
      duration: "5 Saisons",
      rating: "9.5",
      creator: "Vince Gilligan",
      cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
    },
  ],
  drama: [
    {
      id: 103,
      title: "The Crown",
      genre: "Drame historique",
      image: "https://image.tmdb.org/t/p/w500/7IbMXKkwKpp0wZH3pKxKhXzZm9n.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/uJ1yS7R9BzOSJGF0JZowlNtyVyI.jpg",
      description:
        "L'histoire de la famille royale britannique et des événements qui ont contribué à façonner le 20e siècle.",
      year: "2016",
      duration: "6 Saisons",
      rating: "8.7",
      creator: "Peter Morgan",
      cast: "Claire Foy, Olivia Colman, Imelda Staunton",
    },
  ],
};

// Données pour les nouveautés
const nouveautes = {
  films: [
    {
      id: 201,
      title: "Dune",
      genre: "Science Fiction",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/aknvFyJUQQoZFtmFnYzKi4vGv4J.jpg",
      description:
        "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement.",
      year: "2021",
      duration: "2h 35min",
      rating: "8.0",
      director: "Denis Villeneuve",
      cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
    },
  ],
  series: [
    {
      id: 202,
      title: "House of the Dragon",
      genre: "Fantasy",
      image: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
      description:
        "L'histoire de la famille Targaryen, 200 ans avant les événements de Game of Thrones.",
      year: "2022",
      duration: "1 Saison",
      rating: "8.5",
      creator: "Ryan Condal, George R. R. Martin",
      cast: "Matt Smith, Emma D'Arcy, Paddy Considine",
    },
  ],
};

// Liste personnelle de l'utilisateur
const maListe = {
  content: [
    {
      id: 301,
      title: "The Witcher",
      genre: "Fantasy",
      image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B6J.jpg",
      description:
        "Un chasseur de monstres solitaire lutte pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.",
      year: "2019",
      duration: "3 Saisons",
      rating: "8.2",
      creator: "Lauren Schmidt Hissrich",
      cast: "Henry Cavill, Freya Allan, Anya Chalotra",
    },
    {
      id: 302,
      title: "Peaky Blinders",
      genre: "Drame criminel",
      image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
      description:
        "En 1919, à Birmingham, la famille Shelby, aussi connue sous le nom des Peaky Blinders, fait régner sa loi dans les rues de la ville.",
      year: "2013",
      duration: "6 Saisons",
      rating: "8.8",
      creator: "Steven Knight",
      cast: "Cillian Murphy, Paul Anderson, Helen McCrory",
    },
  ],
};

// Fonction pour créer une carte de contenu (série ou film)
function createContentCard(content, type = "movie") {
  const card = document.createElement("div");
  card.className =
    "relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10";
  card.innerHTML = `
        <img src="${content.image}" alt="${content.title}" class="w-full h-auto rounded-lg shadow-lg">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
            <div class="p-4 w-full">
                <h3 class="text-lg font-bold mb-1">${content.title}</h3>
                <div class="flex items-center justify-between">
                    <p class="text-sm text-gray-300">${content.genre}</p>
                    <div class="flex space-x-2">
                        <button onclick="showContentDetails(${content.id}, '${type}')" class="bg-white/20 hover:bg-white/30 p-2 rounded-full">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="bg-white/20 hover:bg-white/30 p-2 rounded-full">
                            <i class="fas fa-play"></i>
                        </button>
                        <button onclick="toggleMyList(${content.id}, '${type}')" class="bg-white/20 hover:bg-white/30 p-2 rounded-full">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
  return card;
}

// Fonction pour afficher les détails du contenu
function showContentDetails(contentId, type) {
  let content;
  if (type === "series") {
    content = [...series.trending, ...series.drama].find(
      (s) => s.id === contentId
    );
  } else if (type === "nouveautes") {
    content = [...nouveautes.films, ...nouveautes.series].find(
      (n) => n.id === contentId
    );
  } else if (type === "maListe") {
    content = maListe.content.find((item) => item.id === contentId);
  }

  if (!content) return;

  const modal = document.getElementById("movieModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalDetails = document.getElementById("modalDetails");

  modalBackdrop.style.backgroundImage = `url('${content.backdrop}')`;

  modalContent.innerHTML = `
        <div class="flex flex-col gap-6">
            <h1 class="text-4xl font-bold">${content.title}</h1>
            <div class="flex items-center space-x-4 text-sm">
                <span class="text-green-500">${content.rating} Note</span>
                <span>${content.year}</span>
                <span>${content.duration}</span>
                <span class="px-2 py-1 bg-gray-800 rounded">${content.genre}</span>
            </div>
            <p class="text-lg">${content.description}</p>
            <div class="flex space-x-4">
                <button class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 flex items-center">
                    <i class="fas fa-play mr-2"></i> Lecture
                </button>
                <button onclick="toggleMyList(${content.id}, '${type}')" class="bg-gray-500/50 px-8 py-3 rounded-lg hover:bg-gray-500/70 flex items-center">
                    <i class="fas fa-plus mr-2"></i> Ma Liste
                </button>
            </div>
        </div>
    `;

  modalDetails.innerHTML = `
        <div class="grid grid-cols-2 gap-8">
            <div>
                <p class="mb-2"><span class="text-gray-300">${
                  type === "series" ? "Créateur" : "Réalisateur"
                }:</span> ${content.creator || content.director}</p>
                <p><span class="text-gray-300">Distribution:</span> ${
                  content.cast
                }</p>
            </div>
            <div>
                <p class="mb-2"><span class="text-gray-300">Genre:</span> ${
                  content.genre
                }</p>
                <p><span class="text-gray-300">Note:</span> ${
                  content.rating
                }/10</p>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
}

// Fonction pour ajouter/retirer de Ma Liste
function toggleMyList(contentId, type) {
  // Cette fonction pourrait être implémentée pour gérer l'ajout/retrait de contenu de la liste personnelle
  console.log(`Toggle content ${contentId} of type ${type} in My List`);
}

// Fonction pour charger le contenu d'une catégorie
function loadCategoryContent(categoryId, type) {
  const container = document.getElementById(categoryId);
  if (!container) return;

  container.innerHTML = ""; // Nettoyer le conteneur

  let contentToLoad;
  switch (type) {
    case "series":
      contentToLoad = series[categoryId] || [];
      break;
    case "nouveautes":
      contentToLoad = nouveautes[categoryId] || [];
      break;
    case "maListe":
      contentToLoad = maListe.content || [];
      break;
    default:
      contentToLoad = [];
  }

  contentToLoad.forEach((item) => {
    container.appendChild(createContentCard(item, type));
  });
}

export {
  series,
  nouveautes,
  maListe,
  loadCategoryContent,
  showContentDetails,
  toggleMyList,
};
