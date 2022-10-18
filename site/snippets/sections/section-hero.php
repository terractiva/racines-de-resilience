<section class="hero is-dark is-medium">
  <div class="hero-body">
    <h1 class="title">
      <?= $page->heroHeading() ?>
    </h1>

    <?php if ($page->heroPage()->isNotEmpty() && $page->heroPageLabel()->isNotEmpty()): ?>
    <a class="button is-white" href="<?= $page->heroPage()->toPage()->url() ?>">
      <?= $page->heroPageLabel() ?>
    </a>
    <?php endif ?>
  </div>
</section>
