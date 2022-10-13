<section class="section is-medium<?= $block->style()->isNotEmpty() ? ' ' . $block->style() : '' ?>">
  <div class="container content">
    <?php if ($block->heading()->isNotEmpty()): ?>
    <h2 class="has-text-centered"><?= $block->heading() ?></h2>
    <?php endif ?>
  </div>
</section>
