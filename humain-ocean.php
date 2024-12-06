<?php
@session_start();
require_once 'db/connect.inc.php';
// require_once 'includes/auth.php';

// requireUserLoggedIn(false);
$metaTitle = '??? titre ???';

ob_start();
?>
    <!-- Inner Banner -->
    <div class="inner-banner bg-shape3 bg-color4">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="conatiner">
                    <div class="inner-title text-center">
                        <h3>FAQ</h3>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                            </li>
                            <li>
                                FAQ
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
                <span>FAQ</span>
                <h2>Ask Question</h2>
            </div>
            <div class="faq-area">
                <ul class="accordion">
                    <li class="accordion-item">
                        <a class="accordion-title active" href="javascript:void(0)">
                            <i class="fas fa-chevron-circle-right"></i>
                            How Can a Beginner Start Swimming?
                        </a>
                        <p class="accordion-content show">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                    <li class="accordion-item">
                        <a class="accordion-title" href="javascript:void(0)">
                            <i class="fas fa-chevron-circle-right"></i>
                            What Are the Steps to Start Swimming?
                        </a>
                        <p class="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                    <li class="accordion-item">
                        <a class="accordion-title" href="javascript:void(0)">
                            <i class="fas fa-chevron-circle-right"></i>
                            What Are the Steps to Learn Child Swimming?
                        </a>
                        <p class="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                    <li class="accordion-item">
                        <a class="accordion-title" href="javascript:void(0)">
                            <i class="fas fa-chevron-circle-right"></i>
                            What Are the Best Practices for Swimming?
                        </a>
                        <p class="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                    <li class="accordion-item">
                        <a class="accordion-title" href="javascript:void(0)">
                            <i class="fas fa-chevron-circle-right"></i>
                            What Kind of Equipment is Needed for Swimming?
                        </a>
                        <p class="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
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
                            <h2>Drop Your Question</h2>
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