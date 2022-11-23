<?php
  $isTree = isset($isTree) ? $isTree : false;
  $logo = $isTree ? $site->darkLogo() : $site->lightLogo();
?>

<nav class="navbar is-transparent <?= $isTree ? 'is-fixed-top' : 'is-dark is-spaced' ?>">
  <?= e(!$isTree, '<div class="container">') ?>
    <div class="navbar-brand">
      <a class="navbar-item" href="<?= $site->url() ?>">
        <img
          alt="<?= $site->title()->escape('attr') ?>"
          src="<?= $logo->toFile()->resize(null, 80)->url() ?>"
        >
      </a>

      <button class="navbar-burger" id="navbar-burger-button" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu" id="navbar-menu">
      <div class="navbar-start">
        <?php
          foreach ($site->navLinks()->toStructure() as $navLink) {
            $isOpen = $navLink->type() == 'page' && $navLink->page()->toPage()->isOpen();

            snippet('elements/link', [
              'class' => 'navbar-item' . ($isOpen ? ' is-active' : ''),
              'link' => $navLink
            ]);
          }
        ?>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <?php snippet('layout/nav-lang') ?>
        </div>

        <?php if ($site->navButtons()->isNotEmpty()): ?>
        <div class="navbar-item">
          <?php snippet('elements/buttons', ['buttons' => $site->navButtons()]) ?>
        </div>
        <?php endif ?>
      </div>
    </div>
  <?= e(!$isTree, '</div>') ?>
</nav>
