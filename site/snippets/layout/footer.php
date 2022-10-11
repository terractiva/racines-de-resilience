<footer>
  <ul>
    <?php foreach ($site->children()->listed() as $listedPage): ?>
    <li>
      <a href="<?= $listedPage->url() ?>"><?= $listedPage->title()->escape() ?></a>
    </li>
    <?php endforeach ?>
  </ul>
</footer>
