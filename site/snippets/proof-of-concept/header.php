<?php snippet('header', ['example' => 'proof-of-concept']) ?>

<header class="header">
  <?php snippet('logo', ['section' => 'proof-of-concept']) ?>
  <?php snippet('menu', ['items'   => page('proof-of-concept')->children()->filterBy('showInMenu', true)->listed()]) ?>
</header>

<main class="main">
  <section>
    <h1 class="h1"><?= $page->title()->escape() ?></h1>
  </section>
