<?php snippet('proof-of-concept/header') ?>

<section>
  <?php foreach ($page->content()->get('content')->toLayouts() as $layout): ?>
  <div class="grid" style="--gutter: 1.5rem" id="<?= esc($layout->id(), 'attr') ?>">
    <?php foreach ($layout->columns() as $column): ?>
    <div class="column" style="--columns: <?= esc($column->span(), 'css') ?>">
      <?php foreach ($column->blocks() as $block): ?>
      <?php if ($block->type() === 'partners'): ?>
      <?= $block ?>
      <?php else: ?>
        <div class="text">
          <?= $block ?>
        </div>
      <?php endif ?>
      <?php endforeach ?>
    </div>
    <?php endforeach ?>
  </div>
  <?php endforeach ?>
</section>

<?php snippet('proof-of-concept/footer') ?>
