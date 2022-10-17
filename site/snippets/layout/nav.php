<nav class="navbar is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="<?= $site->url() ?>">
        <img
          alt="<?= $site->title()->escape('attr') ?>"
          src="<?= $site->logo()->toFile()->resize(null, 60)->url() ?>"
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
        <?php foreach ($site->navPages()->toPages() as $navPage): ?>
        <a class="navbar-item<?php e($navPage->isOpen(), ' is-active') ?>" href="<?= $navPage->url() ?>">
          <?= $navPage->navLabel()->or($navPage->title())->escape() ?>
        </a>
        <?php endforeach ?>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <?php snippet('layout/nav-lang') ?>
        </div>

        <div class="navbar-item">
          <div class="buttons">
            <?php if ($navButtonPage = $site->navButtonPage()->toPage()): ?>
            <a class="button is-blue is-light" href="<?= $navButtonPage->url() ?>">
              <?= $navButtonPage->navLabel()->or($navButtonPage->title())->escape() ?>
            </a>
            <?php endif ?>
            <a class="button is-green is-light" href="<?= $site->actionAddUrl()->escape('attr') ?>">
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
