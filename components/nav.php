<?php
require_once "includes/navItems.php";
?>
<!-- Menu vertical sur la gauche -->
<nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
    <div class="position-sticky">
        <ul class="nav nav-pills flex-column py-3">
            <?php if (isset($navItems)): ?>
                <?php foreach ($navItems as $navItem): ?>
                    <?php if ($navItem['loginRequired'] && !isUserLoggedIn()) continue; ?>
                    <?php if ($navItem['hideWhenLoggedIn'] && isUserLoggedIn()) continue; ?>
                    <li class="nav-item">
                        <?= isset($navItem['divider']) && $navItem['divider'] ? '<hr>' : '' ?>
                        <a class="<?= $navItem['classes'] ?? ('nav-link' . ($navItem['active'] ? ' active' : '')) ?>"
                           href="<?= $navItem['href'] ?>">
                            <?= $navItem['label'] ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            <?php else: ?>
                <li class="nav-item">
                    <div class="alert alert-danger">
                        Aucun élément de menu à afficher
                    </div>
                </li>
            <?php endif; ?>
        </ul>
    </div>
</nav>