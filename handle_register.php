<?php

require_once 'db/connect.inc.php';

$name = $_POST['name'] ?? '';
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($name) || empty($username) || empty($password)) {
    header('Location: register.php?error=empty');
    exit;
}


$query = $pdo->prepare('SELECT * FROM users WHERE username = :username');
$query->execute(['username' => $username]);

$user = $query->fetch();

if ($user) {
    header('Location: register.php?error=username_exists');
    exit;
}

$query = $pdo->prepare('INSERT INTO users (name, username, password) VALUES (:name, :username, :password)');
$query->execute([
    'name' => $name,
    'username' => $username,
    'password' => password_hash($password, PASSWORD_DEFAULT)
]);

header('Location: login.php?success=register');
exit;