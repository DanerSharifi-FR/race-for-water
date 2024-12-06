<?php
@session_start();
//require_once 'includes/auth.php';
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $metaTitle ?? 'Race for Water' ?></title>
    <?php require_once "components/styles.php"; ?>
</head>
<body>
<!-- Start Preloader -->
<div class="preloader">
    <div class="preloader-wave"></div>
</div>
<!-- End Preloader -->
<?php require_once "components/header.php"; ?>

<!-- Conteneur principal -->
<?= $pContent ?? '' ?>
<!-- Conteneur principal -->

<?php require_once "components/footer.php"; ?>
<?php require_once "components/scripts.php"; ?>
</body>
</html>