<header>
  <a href="<?= $site->url() ?>"><?= $site->title()->escape() ?></a>

  <?php if ($showNav): ?>
  <nav>
    <ul>
      <?php foreach ($site->children()->filterBy('showInMenu', true)->listed() as $navPage): ?>
      <li>
        <a href="<?= $navPage->url() ?>"><?= $navPage->menuLabel()->or($navPage->title())->escape() ?></a>
      </li>
      <?php endforeach ?>
    </ul>
  </nav>
  <?php endif ?>
</header>
