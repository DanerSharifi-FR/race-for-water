<?php
@session_start();
// require_once 'includes/auth.php';

// requireUserLoggedIn(false);
$metaTitle = 'TP5 Dev. Web by Daner SHARIFI';

ob_start();
?>
    <h2 class="text-center my-5">Bienvenue dans l'espace sécurisé du site !</h2>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>