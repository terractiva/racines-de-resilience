<?php snippet('layout/html-open') ?>
  <?php snippet('layout/nav', ['isTree' => true]) ?>
  <main>
    <img alt="<?= $page->title()->escape('attr') ?>" class="tree" src="<?= $page->treeImage()->toFile()->resize(6000)->url() ?>" />

    <ul class="tree-actions">
      <?php foreach ($page->actions() as $action): ?>
      <li
        class="tree-action<?= computeActionClasses($action) ?>"
        style="left: <?= $action['position'][0] ?>%; top: <?= $action['position'][1] ?>%; width: <?= 2 * $action['radius'] ?>%;"
      >
        <button type="button">
          <p class="tree-action-name"><?= esc($action['name']) ?></p>
          <div class="tree-action-separator"></div>
          <p class="tree-action-sources">
            <?php foreach ($sources = $action['sources'] as $source): ?>
            <?= esc($source['name']) ?><?php e($source !== end($sources), ','); ?>
            <?php endforeach ?>
          </p>
        </button>
      </li>
      <?php endforeach ?>
    </ul>
  </main>
<?php snippet('layout/html-close') ?>
