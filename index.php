<?php
@session_start();
require_once 'db/connect.inc.php';

// requireUserLoggedIn(false);
$metaTitle = 'Panel utilisateur';

ob_start();
?>
    <br><br>
    <br><br>
    <h1>Votre code ici</h1>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>