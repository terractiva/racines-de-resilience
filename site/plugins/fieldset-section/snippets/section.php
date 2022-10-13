<section class="section is-medium<?= $block->style()->isNotEmpty() ? ' ' . $block->style() : '' ?>">
  <div class="container">
    <?php if ($block->heading()->isNotEmpty()): ?>
    <h2 class="title"><?= $block->heading() ?></h2>
    <?php endif ?>
  </div>
</section>
