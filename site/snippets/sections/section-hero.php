<section class="hero is-dark is-medium">
  <div class="hero-body">
    <h1 class="title">
      <?= $page->heroHeading() ?>
    </h1>

    <?php snippet('elements/buttons', ['buttons' => $page->heroButtons()]) ?>
  </div>
</section>
