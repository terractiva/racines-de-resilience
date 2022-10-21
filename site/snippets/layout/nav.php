<nav class="navbar is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="<?= $site->url() ?>">
        <img
          alt="<?= $site->title()->escape('attr') ?>"
          src="<?= $site->logo()->toFile()->resize(null, 80)->url() ?>"
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
