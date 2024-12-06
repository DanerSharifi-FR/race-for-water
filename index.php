<?php
@session_start();
require_once 'db/connect.inc.php';

// requireUserLoggedIn(false);
$metaTitle = 'Panel utilisateur';

ob_start();
?>

    <!-- Start Sidebar Modal -->
    <div class="sidebar-modal">
        <div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">
									<i class="fas fa-times"></i>
								</span>
                        </button>
                        <h2 class="modal-title" id="myModalLabel2">
                            <a href="index.html">
                                <img src="assets/img/logo-water-for-race.png" alt="Logo">
                            </a>
                        </h2>
                    </div>

                    <div class="modal-body">
                        <div class="sidebar-modal-widget">
                            <h3 class="title">A Propos de Nous</h3>
                            <p>Crée en 2010 par Marco Simeoni, entrepreneur suissse passionné par la mer, la Fondation Race For
                                Water est une organisation dédiée à la préservation des océans. Connue pour ses Odyssées
                                mondiales à bord de navires révolutionnaires au service des océans, la Fondation étudie, depuis
                                plus de 10 ans, l'impact de la polution plastique sur les écosystèmes et la santé humaine,
                                tout en apportant aux commmunautés locales des solutions pertinents afin d'empêcher les déchets
                                plastiques d'atteindre les cours d'eau.</p>
                        </div>

                        <div class="sidebar-modal-widget">
                            <h3 class="title">Contact</h3>
                            <ul class="contact-info">
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    Addresse
                                    <span>53 Rue Jules Clarétie, FRA</span>
                                </li>
                                <li>
                                    <i class="far fa-envelope"></i>
                                    Email
                                    <span><a href="contact@raceforwater.com">contact@raceforwater.com</a>  </span>                          </li>
                                <li>
                                    <i class="fas fa-mobile-alt"></i>
                                    Téléphone
                                    <span>07 54 21 67 09</span>
                                </li>
                            </ul>
                        </div>

                        <div class="sidebar-modal-widget">
                            <h3 class="title">Se connecter avec</h3>
                            <ul class="social-list">
                                <li>
                                    <a href="https://www.facebook.com/login/" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/i/flow/login" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/" target="_blank">
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Sidebar Modal -->

    <!-- Banner Area -->
    <div class="banner-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container-fluid m-0 p-0">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6">
                            <div class="banner-content">
                                <h1><b>RACE FOR WATER</b></h1>
                                <p>
                                    Et si l'Ocean était un <b>corps humain</b> ?
                                </p>
                                <div class="banner-btn">
                                    <a href="login.php" class="banner-btn1 border-radius">En Savoir Plus</a>
                                    <a href="contact.php" class="banner-btn2 border-radius ml-20">Nous Contacter</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="banner-img">
                                <img src="assets/img/banner-img.png" alt="Banner Images">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Area End -->

    <!-- About Another -->
    <div class="about-another pt-100 pb-70">
        <div class="container-fluid m-0 p-0">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-5">
                    <div class="about-img2">
                        <img src="assets/img/about/2.png" alt="About Images">
                        <div class="icon-shape-5">
                            <i class="flaticon-waves"></i>
                        </div>
                        <div class="icon-shape-6" id="apropos">
                            <i class="flaticon-waves"></i>
                        </div>
                    </div>
                </div>



                <div class="col-lg-7" >
                    <div class="about-content" >
                        <span>Qui sommes nous ?</span>
                        <h2>Race For Water</h2>
                        <p>
                            Crée en 2010 par Marco Simeoni, entrepreneur suissse passionné par la mer, la Fondation Race For
                            Water est une organisation dédiée à la préservation des océans. Connue pour ses Odyssées
                            mondiales à bord de navires révolutionnaires au service des océans, la Fondation étudie, depuis
                            plus de 10 ans, l'impact de la polution plastique sur les écosystèmes et la santé humaine,
                            tout en apportant aux commmunautés locales des solutions pertinents afin d'empêcher les déchets
                            plastiques d'atteindre les cours d'eau.
                        </p>
                        <p>
                            Dès 2024, la fondation Race For Water reprendra ses opérations à bord d'un nouveau catamaran
                            révolutionnaire "zéro émission de CO2", le MODX 70. Déployée sur de multiples missions, cette
                            Odyssée engagera la Fondation sur une nouvelle thématique : les océans et le changement
                            climatique. A travers son programme "Learn, Share, Act", elle démontrera l'importance
                            de décarboner le monde maritime et de préserver un océan sain et vivant.

                        </p>
                        <div class="about-more-btn">
                            <a href="about.php" class="default-btn4">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About Another End -->

    <!-- Service Area Two -->
    <section class="service-area-two ptb-100">
        <div class="container">
            <div class="section-title text-center mb-50" id="organe">
                <span>Nos organes & ceux de l'océan</span>
                <h2>Quand le corps humain rencontre l’océan</h2>
                <p>
                    <em>Une plongée dans les ressemblances entre nos organes et les trésors marins.</em>
                </p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="service-item box-shadow">
                        <a href="#" class="service-item-icon">
                            <img src="assets/img/coeur.png" alt="Service Icon" width="80" height="80">
                        </a>
                        <a href="#" class="service-head">
                            <h3>Le Coeur</h3>
                        </a>
                        <p>
                            Tout comme le cœur pompe le sang pour alimenter le corps, les courants marins déplacent l’eau pour maintenir la vie dans l’océan.
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service-item box-shadow">
                        <a href="#" class="service-item-icon">
                            <img src="assets/img/poumon.png" alt="Service Icon" width="80" height="80">
                        </a>
                        <a href="#" class="service-head">
                            <h3>Les Poumons</h3>
                        </a>
                        <p>
                            Les poumons apportent l’oxygène au corps, comme les algues et le phytoplancton produisent l’oxygène dans la mer, soutenant toute forme de vie.
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service-item box-shadow">
                        <a href="#" class="service-item-icon">
                            <img src="assets/img/os.png" alt="Service Icon" width="80" height="80">
                        </a>
                        <a href="#" class="service-head">
                            <h3>Le Squelette</h3>
                        </a>
                        <p>
                            Le squelette soutient le corps humain, tout comme les récifs coralliens forment la structure de l’écosystème marin, offrant refuge et protection.
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service-item box-shadow">
                        <a href="#" class="service-item-icon">
                            <img src="assets/img/peau.png" alt="Service Icon" width="80" height="80">
                        </a>
                        <a href="#" class="service-head">
                            <h3>La Peau</h3>
                        </a>
                        <p>
                            La peau protège le corps humain, tout comme la surface de l’océan agit comme une barrière vitale, régulant les températures et protégeant la vie marine.
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service-item box-shadow">
                        <a href="#" class="service-item-icon">
                            <img src="assets/img/digestion.png" alt="Service Icon" width="80" height="80">
                        </a>
                        <a href="#" class="service-head">
                            <h3>Le Système digestif </h3>
                        </a>
                        <p>
                            Le système digestif transforme les nutriments pour nourrir le corps, tout comme l’océan absorbe et redistribue les nutriments pour nourrir son écosystème.
                        </p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service-item box-shadow">
                        <a href="#" class="service-item-icon">
                            <img src="assets/img/nerf.png" alt="Service Icon" width="80" height="80">
                        </a>
                        <a href="#" class="service-head">
                            <h3>Le Système nerveux</h3>
                        </a>
                        <p>
                            Le système nerveux transmet des signaux pour coordonner le corps, tout comme les réseaux de migration des poissons et des courants marins relient différentes parties de l’océan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>