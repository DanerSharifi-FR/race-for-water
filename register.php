<?php
@session_start();
// require_once 'includes/auth.php';

// requireUserLoggedIn(false);
$metaTitle = 'Inscrivez vous';

ob_start();
?>
    <br><br><br>
    <div class="login-area ptb-100">
        <div class="container">
            <div class="login-form">
                <div class="login-title">
                    <i class="far fa-user text-center"></i>
                    <h3>Inscrivez vous</h3>
                </div>
                <div class="form-sing">
                    <form method="post" action="handle_register.php">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="name">Nom complet</label>
                                    <input id="name" name="name" type="text" class="form-control" placeholder="Nom Complet">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="username">Nom d'Utilisateur</label>
                                    <input id="username" name="username" type="text" class="form-control" placeholder="Nom d'Utilisateur">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="password">Mot de passe</label>
                                    <input id="password" name="password" type="password" class="form-control" placeholder="Mot de Passe">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 text-center">
                                <button type="submit" class="login-btn btn-two">
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>