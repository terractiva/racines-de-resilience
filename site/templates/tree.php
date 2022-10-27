<?php snippet('layout/html-open') ?>
  <?php snippet('layout/nav', ['isTree' => true]) ?>
  <main>
    <div class="tree-container">
      <img
        alt="<?= $page->title()->escape('attr') ?>"
        class="tree-image"
        src="<?= $page->parent()->content($page->language())->treeImage()->toFile()->resize(6000)->url() ?>"
      />

      <ul class="tree-actions">
        <?php foreach ($page->actions() as $action): ?>
        <li
          class="tree-action<?= computeActionClasses($action) ?>"
          style="left: <?= $action['position'][0] ?>%; top: <?= $action['position'][1] ?>%; width: <?= 2 * $action['radius'] ?>%;"
        >
          <button type="button">
            <p class="tree-action-name">
              <?= esc($action['name']) ?>
            </p>
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
    </div>

    <div class="tree-buttons">
      <details class="dropdown is-active">
        <summary class="button is-dark is-outlined is-responsive">
          <?= $page->title()->escape() ?>
        </summary>

        <div class="dropdown-menu">
          <div class="dropdown-content">
            <?php foreach ($page->parent()->children()->listed() as $tree): ?>
            <a class="dropdown-item<?= e($tree->isOpen(), ' is-active') ?>" href="<?= $tree->url() ?>">
              <?= $tree->title()->escape() ?> - <?= $kirby->language($tree->language())->name() ?>
            </a>
            <?php endforeach ?>
          </div>
        </div>
      </details>
    </div>
  </main>
<?php snippet('layout/html-close') ?>
