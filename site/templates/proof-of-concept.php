<?php snippet('proof-of-concept/header') ?>

<!-- TODO: cacher si pas d'actualités -->
<section>
  <h2 class="h2">Actualités</h2>

  <ul class="grid" style="--columns: 4">
    <?php foreach ($page->news()->toStructure() as $newsItem): ?>
    <li class="column">
      <h3 class="h3 text"><?= $newsItem->title()->text() ?></h3>
      <div class="text">
        <?= $newsItem->content()->get('content')->sanitize() ?>
      </div>
      <?php
        $buttonAttr = ['class' => 'button'];

        if ($newsItem->buttonType() == 'url'):
      ?>
      <a href="<?= $newsItem->buttonUrl() ?>">
        <?= $newsItem->buttonLabel()->text() ?>
      </a>
      <?php elseif ($newsItem->buttonType() == 'email'): ?>
      <a href="mailto:<?= Str::encode($newsItem->buttonEmail()) ?>">
        <?= $newsItem->buttonLabel()->text() ?>
      </a>
      <?php endif ?>
    </li>
    <?php endforeach ?>
  </ul>
</section>

<!-- TODO: cacher si pas de partenaires -->
<section>
  <h2 class="h2">Partenaires</h2>

  <ul class="grid" style="--columns: 2">
    <?php foreach (page('proof-of-concept/partenaires')->children()->listed() as $partner): ?>
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
</section>

<?php snippet('proof-of-concept/footer') ?>
