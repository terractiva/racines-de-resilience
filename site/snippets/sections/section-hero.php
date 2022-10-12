<section class="hero is-purple <?= $size ?>">
  <div class="hero-body">
    <h1 class="title has-text-centered">
      <?= $page->heading1()->escape() ?>
      <?php if ($page->heading2()->isNotEmpty()): ?>
      <br /><?= $page->heading2()->escape() ?>
      <?php endif ?>
    </h1>
  </div>
</section>
