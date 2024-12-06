<?php
@session_start();
require_once 'db/connect.inc.php';

// requireUserLoggedIn(false);
$metaTitle = 'Panel utilisateur';

ob_start();
?>

    <!-- About Detl -->
    <div class="about-detl pt-100 pb-70">
        <div class="container">
            <div class="common-dtel-img">
                <img src="assets/img/about-detl.png" alt="About Images">
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="common-dtel-text">
                        <h2>C'est quoi <b>RACE FOR WATER ?</b></h2>
                        <p>
                            Crée en 2010 par Marco Simeoni, entrepreneur suissse passionné par la mer, la Fondation Race For Water est une organisation dédiée à la préservation des océans. Connue pour ses Odyssées mondiales à bord de navires révolutionnaires au service des océans, la Fondation étudie, depuis plus de 10 ans, l'impact de la polution plastique sur les écosystèmes et la santé humaine, tout en apportant aux commmunautés locales des solutions pertinents afin d'empêcher les déchets plastiques d'atteindre les cours d'eau.
                        </p>
                        <p>
                            Dès 2024, la fondation Race For Water reprendra ses opérations à bord d'un nouveau catamaran révolutionnaire "zéro émission de CO2", le MODX 70. Déployée sur de multiples missions, cette Odyssée engagera la Fondation sur une nouvelle thématique : les océans et le changement climatique. A travers son programme "Learn, Share, Act", elle démontrera l'importance de décarboner le monde maritime et de préserver un océan sain et vivant.
                        </p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="common-offer">
                        <div class="drive-img">
                            <br>
                        </div>
                        <div class="common-offer-text">
                            <h3>Vous souhaitez plus d'information ?</h3>
                            <a href="#" class="call-btn">Nous appelez</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>