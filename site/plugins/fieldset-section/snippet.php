<section class="section<?= e($block->color()->isNotEmpty(), ' ' . $block->color()) ?>">
  <div class="container">
    <?php if ($block->heading()->isNotEmpty()): ?>
    <h2 class="title" id="<?= $block->heading()->toTitleId() ?>">
      <?= $block->heading() ?>
    </h2>
    <?php endif ?>

    <?php snippet('layout/layouts', ['layouts' => $block->layout()->toLayouts()]) ?>
  </div>
</section>
