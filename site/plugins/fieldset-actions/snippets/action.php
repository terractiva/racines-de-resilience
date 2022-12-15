<?php $doOpenInNewTab = $doOpenInNewTab ?? false; ?>

<div class="action<?= $action->classes() ?>">
  <div class="action-name title is-6">
    <?php if ($action->level()->isNotEmpty() && $action->level()->toInt() > 0) : ?>
      <p class="action-level">
        <?= str_repeat('∎', $action->level()->toInt()) ?>
      </p>
    <?php endif ?>
    <p>
      <?= $action->title()->escape() ?>
    </p>
  </div>

  <?php $sources = $action->sources()->toStructure(); ?>
  <?php if ($sources->isNotEmpty()) : ?>
    <p class="action-sources">
      <?php foreach ($sources as $source) : ?>
        <?php e($hasLink = $source->link()->isNotEmpty(), '<a class="' . $action->classes() . '" href="' . $source->link()->escape('attr') . '"' . ($doOpenInNewTab ? ' target="_blank"' : '') . '>') ?>
          <?= computeSourceName($source) ?><?php e($hasLink, '</a>') . e(!$source->isLast(), ',') ?>
      <?php endforeach ?>
    </p>
  <?php endif ?>

  <?php if ($action->subcategory()->isNotEmpty()) : ?>
    <?php $subcategory = $action->subcategory()->toPage(); ?>
    <a class="action-subcategory" href="<?= $subcategory->url() ?>" <?php e($doOpenInNewTab, ' target="_blank"') ?>>
      <?= $subcategory->title()->escape() ?>
    </a>
  <?php endif ?>
</div>
