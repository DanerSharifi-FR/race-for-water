<?php
@session_start();
// require_once 'includes/auth.php';

// requireUserLoggedIn(false);
$metaTitle = 'Connectez vous';

ob_start();
?>
    <br><br>
    <div class="login-area ptb-100">
        <div class="container">
            <div class="login-form">
                <div class="login-title">
                    <i class="far fa-user text-center"></i>
                    <h3>Connectez vous</h3>
                </div>
                <div class="form-sing">
                    <form method="post" action="handle_login.php">
                        <div class="row justify-content-center">
                            <?php if (isset($_GET['error'])): ?>
                                <div class="col-12">
                                    <div class="alert alert-danger" role="alert">
                                        <?php if ($_GET['error'] === 'empty'): ?>
                                            Veuillez remplir tous les champs.
                                        <?php elseif ($_GET['error'] === 'invalid_username'): ?>
                                            Nom d'utilisateur incorrect.
                                        <?php elseif ($_GET['error'] === 'invalid_password'): ?>
                                            Mot de passe incorrect.
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <?php if (isset($_GET['success'])): ?>
                                <div class="col-12">
                                    <div class="alert alert-success" role="alert">
                                        Inscription réussie. Connectez-vous.
                                    </div>
                                </div>
                            <?php endif; ?>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="username">Nom d'utilisateur</label>
                                    <input id="username" name="username" type="text" class="form-control" placeholder="Username">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="password">Mot de passe</label>
                                    <input id="password" name="password" type="password" class="form-control" placeholder="Password">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="form-check form-group">
                                    <input type="checkbox" class="form-check-input" id="remember">
                                    <label class="form-check-label" for="remember">Se souvenir de moi</label>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 text-center">
                                <button type="submit" class="login-btn btn-two">
                                    Connexion
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p>Vous n'avez pas un compte ? <a href="register.php">inscrivez-vous</a>.</p>
            </div>
        </div>
    </div>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>