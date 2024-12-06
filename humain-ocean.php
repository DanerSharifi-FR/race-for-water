<?php
@session_start();
require_once 'db/connect.inc.php';
// require_once 'includes/auth.php';

// requireUserLoggedIn(false);
$metaTitle = 'Parallèle Océan Corps Humain';

ob_start();
?>
    <!-- Inner Banner -->
    <div class="inner-banner bg-shape3 bg-color4">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="conatiner">
                    <div class="inner-title text-center">
                        <h3>Parallèle Océan Corps Humain</h3>
                        <ul>
                            <li>
                                <a href="index.php">Accueil</a>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                            </li>
                            <li>
                                Corps Humain & Ocean

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Inner Banner End -->

<!-- Faq Section -->
<section class="faq-section pt-100 pb-70">
    <div class="container">
        <div class="section-title text-center mb-50">
            <span>Corps Humain & Ocean</span>
            <h2>Parallèle entre le corps humain et l'océan</h2>
        </div>
        <div class="faq-area">
            <ul class="accordion">
                <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        Comment les courants marins sont-ils comparables au système circulatoire humain ?
                    </a>
                    <p class="accordion-content show">
                        Les courants marins et la pompe thermohaline fonctionnent de manière similaire au système circulatoire humain. Ils distribuent la chaleur et les nutriments à travers les océans, régulant ainsi le climat global. De même, le système circulatoire humain distribue l'oxygène et les nutriments dans tout le corps pour maintenir son bon fonctionnement.
                    </p>
                </li>
                <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        En quoi la photosynthèse et la dissolution du CO2 dans l'océan sont-elles similaires à la fonction des poumons humains ?
                    </a>
                    <p class="accordion-content">
                        La photosynthèse par le plancton et la dissolution du CO2 dans l'océan jouent un rôle crucial dans les échanges gazeux, similaire à la fonction des poumons humains. Les poumons échangent l'oxygène et le dioxyde de carbone, essentiels pour la respiration, tandis que l'océan absorbe et libère du CO2, régulant ainsi les niveaux de gaz dans l'atmosphère.
                    </p>
                </li>
                <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        Quel est le rôle du plancton dans l'océan et son équivalent dans le corps humain ?
                    </a>
                    <p class="accordion-content">
                        Le plancton dans l'océan produit une grande partie de l'oxygène de la planète par la photosynthèse, ce qui est essentiel pour la vie marine. Cela peut être comparé aux globules rouges dans le corps humain, qui transportent l'oxygène vers les différentes parties du corps.
                    </p>
                </li>
                <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        Comment les récifs coralliens sont-ils comparables à certains organes humains ?
                    </a>
                    <p class="accordion-content">
                        Les récifs coralliens abritent une biodiversité exceptionnelle et jouent un rôle crucial dans la protection des côtes contre l'érosion. Ils peuvent être comparés à des organes comme la peau, qui protège le corps humain contre les infections et les dommages externes.
                    </p>
                </li>
                <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        En quoi la salinité et la température de l'eau sont-elles importantes pour l'océan, et quels sont leurs équivalents dans le corps humain ?
                    </a>
                    <p class="accordion-content">
                        La salinité et la température de l'eau sont essentielles pour la survie des écosystèmes marins. Dans le corps humain, l'équilibre des électrolytes et la régulation de la température corporelle sont tout aussi cruciaux pour le bon fonctionnement des organes et des systèmes.
                    </p>
                </li>
                <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        Comment l'acidification des océans affecte-t-elle la vie marine ?
                    </a>
                    <p class="accordion-content">
                        L'acidification des océans, causée par l'augmentation des niveaux de CO2, rend plus difficile pour les organismes marins de construire et de maintenir leurs coquilles et squelettes. Cela peut avoir des effets néfastes sur la biodiversité marine, similaire à la manière dont l'acidité dans le corps humain peut causer des problèmes de santé.
                    </p>
                </li>
                <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                        <i class="fas fa-chevron-circle-right"></i>
                        Quelles sont les actions concrètes pour protéger les océans ?
                    </a>
                    <p class="accordion-content">
                        Protéger les océans implique de réduire la pollution plastique, de limiter les émissions de carbone et de promouvoir des pratiques de pêche durables. Ces actions sont essentielles pour maintenir la santé des océans, qui est vitale pour la planète et toutes les formes de vie qui en dépendent.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- Faq Section End -->


    <!-- Faq Contact -->
    <div class="faq-contact pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="faq-form">
                        <div class="form-section">
                            <h2>Une Question ?</h2>
                            <a href="contact.php" class="default-btn1 btn-two">
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Faq Contact End -->
<?php
$pContent = ob_get_clean();

require_once "layout.php";
?>