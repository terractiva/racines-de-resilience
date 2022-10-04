<?php snippet('proof-of-concept/header') ?>

<?php foreach ($page->content()->get('content')->toLayouts() as $layout): ?>
<section class="section grid" style="--gutter: 1.5rem" id="<?= esc($layout->id(), 'attr') ?>">
  <?php foreach ($layout->columns() as $column): ?>
  <div class="column" style="--columns: <?= esc($column->span(), 'css') ?>">
    <?= $column->blocks() ?>
  </div>
  <?php endforeach ?>
</section>
<?php endforeach ?>

<?php snippet('proof-of-concept/footer') ?>
