<ul class="partners">
  <?php foreach ($site->partners()->toStructure() as $partner): ?>
  <li class="">
    <?php e($hasUrl = $partner->url()->isNotEmpty(), '<a href="' . $partner->url()->escape('attr') . '">'); ?>
    <?php if ($partner->logo()->isNotEmpty()): ?>
    <img
      alt="<?= $partner->name()->escape('attr') ?>"
      src="<?= $partner->logo()->toFile()->resize(240, 120)->url() ?>"
    />
    <?php else: ?>
    <p><?= $partner->name()->escape() ?></p>
    <?php endif ?>
    <?php e($hasUrl, '</a>'); ?>
  </li>
  <?php endforeach ?>
</unlink>
