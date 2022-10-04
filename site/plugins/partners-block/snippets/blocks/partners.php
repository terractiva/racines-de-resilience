<h2 class="h2">
  <?= page('proof-of-concept/partners')->title()->escape() ?>
</h2>

<!-- TODO: placeholder si pas de partenaires -->
<ul class="grid" style="--columns: 2">
  <?php foreach (page('proof-of-concept/partners')->children()->listed() as $partner): ?>
  <li class="column">
    <?php if ($url = $partner->content()->get('url')->value()) echo "<a href=" . $url . ">"; ?>
    <?php if($logo = $partner->image()): ?>
    <img src="<?= $logo->url() ?>" alt="<?= $partner->title()->escape('alt') ?>">
    <?php else: ?>
    <?= $partner->title()->escape('html') ?>
    <?php endif ?>
    <?php if ($url) echo "</a>"; ?>
  </li>
  <?php endforeach ?>
</ul>
