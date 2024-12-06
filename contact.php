<?php
@session_start();
require_once 'db/connect.inc.php';

// requireUserLoggedIn(false);
$metaTitle = 'Nous contacter';

ob_start();
?>
    <br><br>
    <br><br>
    <!-- Inner Banner -->
    <div class="inner-banner bg-shape2 bg-color2">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="conatiner">
                    <div class="inner-title text-center">
                        <h3>L'ergonomie : simplifier pour mieux vivre.</h3>
                        <ul>
                            <li>
                                <a href="index.php">Accueil</a>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                            </li>
                            <li>
                                Nous Contacter
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Inner Banner End -->

    <!-- Contact Area -->
    <div class="contact-area pt-100 pb-70">
        <div class="container">
            <div class="contact-title text-center mb-50">
                <h2>
                    Donald Norman, figure éminente dans les domaines du design, de l'ergonomie et de l'expérience utilisateur, auteur de The Design of Everyday Things a dit un jour:

                    "Si une machine doit être notre servante, elle doit être conçue pour être facile à utiliser."

                </h2>
            </div>
        </div>
    </div>
    <!-- Contact Area End -->

    <!-- Contact Form -->
    <div class="contact-form pb-70">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 p-0">
                    <div class="contact-img">
                        <img src="conseiller-img.png" alt="Contact Images" style="width: 439px">
                    </div>
                </div>
                <div class="col-lg-6" >
                    <div class="form-area">
                        <div class="form-section">
                            <h2>Contactez Nous</h2>
                            <form id="contactForm">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="prenom">Prenom</label>
                                            <input type="text" name="name" id="prenom" class="form-control" required data-error="Please enter your name" placeholder="Votre Prénom" readonly>
                                            <div id="letters-container"> </div>
                                            <button id="clearPrenom">Effacer Prénom</button>

                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="nom">Nom:</label>
                                            <input type="text" class="form-control" id="nom" placeholder="Votre Nom" readonly>
                                            <select id="alphabet" ></select>
                                            <button id="addLetter">Ajouter Lettre</button>
                                            <button id="clearNom">Effacer Nom</button>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="email"> Email : </label>
                                            <input type="text" id="email" class="form-control" placeholder="Ex: exemple@domaine.com">
                                            <span id="emailError" class="error" style="color: red"></span>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="field-container">
                                            <label for="phoneNumber">Numéro de téléphone :</label>
                                            <input type="text" id="phoneNumber" readonly>
                                            <button id="decrement">-</button>
                                            <input type="number" id="numberInput" value="0" min="0" max="9" readonly>
                                            <button id="increment">+</button>
                                        </div>

                                        <div>
                                            <button id="startGame">Ajouter un Chiffre avec Chifoumi</button>
                                        </div>

                                        <div id="countdown" style="display: none;">3</div>
                                        <video id="video" width="320" height="240" autoplay style="display:none;"></video>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea id="message" class="form-message textarea-hight" placeholder="Écrivez votre message ici..."></textarea>
                                        </div>
                                    </div>

                                    <style>
                                        #envoyer {
                                            position: absolute;
                                            width: 150px;
                                            padding: 10px 20px;
                                            background-color: #4CAF50;
                                            color: white;
                                            border: none;
                                            font-size: 16px;
                                            cursor: pointer;
                                            transition: transform 0.2s ease;
                                        }

                                    </style>

                                    <label for="cocherTousLesChamps" style="font-size: 14px; opacity: 0.05;">
                                        <input type="checkbox" id="cocherTousLesChamps" />
                                        Cocher tous les champs
                                    </label>

                                    <button id="envoyer" type="button">Envoyer</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact Form End -->

    <script src="https://cdn.jsdelivr.net/npm/handtrackjs@latest/dist/handtrack.min.js"></script>
    <script src="contact.js"></script>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>