<?php
// backend/api/api-proxy.php
// Un proxy simple pour contourner les problèmes CORS

// Autoriser l'accès depuis n'importe quelle origine
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Si la méthode est OPTIONS, terminer la requête ici (pour les requêtes preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Récupérer les paramètres de la requête
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';
$categoryUrl = isset($_GET['category_url']) ? $_GET['category_url'] : '';
$movieUrl = isset($_GET['movie_url']) ? $_GET['movie_url'] : '';

// Construire l'URL API en fonction des paramètres
if (!empty($endpoint) && in_array($endpoint, ['top', 'categories'])) {
    // Cas 1: Endpoint simple (top ou categories)
    $apiUrl = "https://madroymirror.dhsarl.com/{$endpoint}";
} elseif (!empty($categoryUrl)) {
    // Cas 2: Films d'une catégorie spécifique - CORRIGÉ!
    $apiUrl = "https://madroymirror.dhsarl.com/movies?category_url={$categoryUrl}";
} elseif (!empty($movieUrl)) {
    // Cas 3: Détails d'un film spécifique
    $apiUrl = "https://madroymirror.dhsarl.com/movie?url={$movieUrl}";
} else {
    // Cas d'erreur: paramètres invalides
    http_response_code(400);
    echo json_encode(['error' => 'Paramètres invalides. Utilisez "endpoint", "category_url" ou "movie_url"']);
    exit;
}

// Décommenter cette ligne pour déboguer l'URL
// echo json_encode(['debug_url' => $apiUrl]); exit;

// Initialiser cURL
$ch = curl_init();

// Configurer les options cURL
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

// Définir un User-Agent pour éviter d'éventuelles restrictions
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');

// Exécuter la requête
$response = curl_exec($ch);

// Vérifier les erreurs
if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Erreur cURL: ' . curl_error($ch),
        'code' => curl_errno($ch)
    ]);
    exit;
}

// Récupérer le code de statut HTTP
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Fermer la session cURL
curl_close($ch);

// Définir le même code de statut HTTP que la réponse de l'API
http_response_code($httpCode);

// Si erreur HTTP, ajouter un message explicatif
if ($httpCode >= 400) {
    echo json_encode([
        'error' => 'Erreur API: Code HTTP ' . $httpCode,
        'raw_response' => $response
    ]);
    exit;
}

// Renvoyer la réponse de l'API
echo $response;