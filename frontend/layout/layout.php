<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Bienvenue sur NETFLIXCLONE'; ?></title>



    <!-- Import de Tailwind CSS -->
    <script src="/public/css/css-externe/3.4.16"></script>
    <!-- Import de FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body class="bg-black text-white">

    <!-- Header (fixé en haut) -->
    <?php include "components/header.php"; ?>


    <!-- Contenu principal -->
    <div class="">
        <?php if (isset($content)) {
            echo $content;
        } ?>
    </div>

    <!-- Footer -->
    <?php include "components/footer.php"; ?>

    <!-- Script externe -->
    <script src="/public/js/js-interne/sweetalert2@11"></script>
    <!--End Script externe -->

    <!-- Script Interne -->
    <script src="/public/js/main.js"></script>
    <script src="/public/js/menu.js"></script>
    <!--End Script Interne -->






</body>

</html>