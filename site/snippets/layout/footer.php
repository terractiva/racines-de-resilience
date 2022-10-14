<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <p class="title is-5">
          <strong><?= $site->footerSocialHeading()->escape() ?></strong>
        </p>
        <ul>
          <?php foreach ($site->footerSocialLinks()->toStructure() as $socialLink): ?>
          <li>
            <a href="<?= $socialLink->url()->escape('attr') ?>">
              <?= $socialLink->label()->escape() ?>
            </a>
          </li>
          <?php endforeach ?>
        </ul>
      </div>

      <div class="column is-4">
        <p class="title is-5"><strong>Plan du site</strong></p>
        <ul>
          <?php foreach ($site->children()->listed() as $listedPage): ?>
          <li>
            <a href="<?= $listedPage->url() ?>"><?= $listedPage->title()->escape() ?></a>
          </li>
          <?php endforeach ?>
        </ul>
      </div>

      <div class="column is-4 content">
        <?= $site->footerFreeText() ?>
      </div>
    </div>

    <div class="content">
      <?= $site->footerCopyright() ?>

      <?php if (option('environment') !== 'dev'): ?>
      <div id="wcb" class="carbonbadge wcb-d"></div>
      <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
      <?php endif ?>
    </div>
  </div>
</footer>
