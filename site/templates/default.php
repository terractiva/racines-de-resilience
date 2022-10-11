<header>
  <nav>
    <ul>
      <?php foreach ($site->children()->filterBy('showInMenu', true)->listed() as $navPage): ?>
      <li>
        <a href="<?= $navPage->url() ?>"><?= $navPage->menuLabel()->or($navPage->title())->escape() ?></a>
      </li>
      <?php endforeach ?>
    </ul>
  </nav>
</header>

<h1><?= $page->title()->escape() ?></h1>

<?php if ($page->heading()->isNotEmpty()): ?>
<h2><?= $page->heading()->escape() ?></h2>
<?php endif ?>

<footer>
  <nav>
    <ul>
      <?php foreach ($site->children()->listed() as $navPage): ?>
      <li>
        <a href="<?= $navPage->url() ?>"><?= $navPage->title()->escape() ?></a>
      </li>
      <?php endforeach ?>
    </ul>
  </nav>
</footer>
