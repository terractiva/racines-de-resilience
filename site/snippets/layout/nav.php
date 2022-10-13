<nav class="navbar is-spaced is-purple">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="<?= $site->url() ?>">
        <img
          alt="<?= $site->title()->escape('attr') ?>"
          src="<?= asset('assets/img/logo.png')->resize(null, 60)->url() ?>"
        >
      </a>

      <button class="navbar-burger" id="navbar-burger-button" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <?php if ($showMenu): ?>
    <div class="navbar-menu" id="navbar-menu">
      <div class="navbar-start">
        <?php snippet('layout/nav-lang') ?>
      </div>

      <div class="navbar-end">
        <?php foreach ($site->children()->filterBy('showInMenu', true)->listed() as $navPage): ?>
        <a class="navbar-item<?php e($navPage->isOpen(), ' is-active') ?>" href="<?= $navPage->url() ?>">
          <?= $navPage->menuLabel()->or($navPage->title())->escape() ?>
        </a>
        <?php endforeach ?>

        <div class="navbar-item">
          <div class="buttons">
            <?php $supportPage = page('nous-soutenir'); ?>
            <a class="button is-blue" href="<?= $supportPage->url() ?>">
              <?= $supportPage->title()->escape() ?>
            </a>
            <a class="button is-red" href="https://airtable.com/shrlqNJvuiem0iFkA">
              Ajouter une action
            </a>
          </div>
        </div>
      </div>
    </div>
    <?php endif ?>
  </div>
</nav>

<script>
  const burgerButton = document.getElementById('navbar-burger-button');

  burgerButton.addEventListener('click', () => {
    document.getElementById('navbar-menu').classList.toggle('is-active');
    burgerButton.classList.toggle('is-active');
  });
</script>
