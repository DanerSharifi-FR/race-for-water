<?php
require_once 'db/connect.inc.php';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$remember = $_POST['remember'] ?? '';

if (empty($username) || empty($password)) {
    header('Location: login.php?error=empty');
    exit;
}

$query = $pdo->prepare('SELECT * FROM users WHERE username = :username');
$query->execute(['username' => $username]);

$user = $query->fetch();

if (!$user) {
    header('Location: login.php?error=invalid_username');
    exit;
}


if (!password_verify($password, $user['password'])) {
    header('Location: login.php?error=invalid_password');
    exit;
}

$cookie_time = time() + 60 * 60 * 24;

if ($remember) {
    $cookie_time = time() + 60 * 60 * 24 * 30;
}

setcookie('username', $username, $cookie_time);
setcookie('password', $password, $cookie_time);

session_start();

$_SESSION['name'] = $user['name'];

header('Location: user_panel.php');