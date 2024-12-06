<?php
@session_start();
// require_once 'includes/auth.php';

// requireUserLoggedIn(false);
$metaTitle = 'TP5 Dev. Web by Daner SHARIFI';

ob_start();
?>
    <br><br><br>
    <div class="login-area ptb-100">
        <div class="container">
            <div class="login-form">
                <div class="login-title">
                    <i class="far fa-user text-center"></i>
                    <h3>Connectez vous</h3>
                </div>
                <div class="form-sing">
                    <form>
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input id="username" type="text" class="form-control" placeholder="Username">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="password">Mot de passe</label>
                                    <input id="password" type="password" class="form-control" placeholder="Password">
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
                                    Log In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p>Don't have an account? <a href="register.html">Resigter Now</a></p>
            </div>
        </div>
    </div>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>