<section class="section <?= $block->style()->isNotEmpty() ? ' ' . $block->style() : '' ?>">
  <div class="container">
    <?php if ($block->heading()->isNotEmpty()): ?>
    <h2 class="title"><?= $block->heading() ?></h2>
    <?php endif ?>

    <?php foreach ($block->layout()->toLayouts() as $layout): ?>
      <div class="columns">
      <?php foreach ($layout->columns() as $column): ?>
      <div class="column is-<?= $column->span() ?>">
        <?php foreach ($column->blocks() as $columnBlock): ?>
        <?= $columnBlock ?>
        <?php endforeach ?>
      </div>
      <?php endforeach ?>
    </div>
    <?php endforeach ?>
  </div>
</section>
