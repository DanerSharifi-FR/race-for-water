<?php
@session_start();
require_once 'db/connect.inc.php';
// require_once 'includes/auth.php';

$username = $_COOKIE['username'] ?? '';
$password = $_COOKIE['password'] ?? '';

if (empty($username) || empty($password)) {
    header('Location: login.php?error=empty');
    exit;
}


// requireUserLoggedIn(false);
$metaTitle = 'Panel utilisateur';

ob_start();
?>
    <br><br>
    <br><br>
    <div class="container">
        <div class="alert alert-success h1 text-center">
            Vous avez réussi le captcha !
        </div>
    </div>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>