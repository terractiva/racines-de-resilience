<ul class="partners horizontal-slider is-automatic is-fullwidth">
  <?php foreach ($site->partners()->toStructure() as $partner) : ?>
    <li>
      <?php e($hasUrl = $partner->url()->isNotEmpty(), '<a href="' . $partner->url()->escape('attr') . '">') ?>
      <?php if ($partner->logo()->isNotEmpty()) : ?>
        <?php
          $resizedImage1x = $partner->logo()->toFile()->resize(120, 60);
          $resizedImage2x = $partner->logo()->toFile()->resize(240, 120);
        ?>
        <img
          alt="<?= $partner->name()->escape('attr') ?>"
          src="<?= $resizedImage1x->url() ?>"
          srcset="<?= $resizedImage2x->url() ?> 2x, <?= $resizedImage1x->url() ?> 1x"
          height="<?= $resizedImage1x->height() ?>"
          width="<?= $resizedImage1x->width() ?>"
        />
      <?php else : ?>
        <p><?= $partner->name()->escape() ?></p>
      <?php endif ?>
      <?php e($hasUrl, '</a>') ?>
    </li>
  <?php endforeach ?>
</ul>
