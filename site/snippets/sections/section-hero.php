<section class="hero is-medium">
  <div class="hero-body">
    <h1 class="title">
      <?= e($page->emoji()->isNotEmpty(), $page->emoji()->escape() . ' ') ?><?= $page->heroHeading()->isEmpty() ? $page->title()->escape() : $page->heroHeading() ?>
    </h1>

    <?php snippet('elements/buttons', ['buttons' => $page->heroButtons()]) ?>
  </div>
</section>
