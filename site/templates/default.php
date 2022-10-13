<?php snippet('layout/html-open') ?>
  <?php snippet('layout/nav', ['showMenu' => true]) ?>
  <main>
    <?php snippet('sections/section-hero', ['size' => 'is-large']) ?>
    <?php snippet('layout/layout') ?>
  </main>
  <?php snippet('layout/footer') ?>
<?php snippet('layout/html-close') ?>
