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
        <p class="title is-5"><strong><?= $site->footerSitemapHeading()->escape() ?></strong></p>
        <ul>
          <?php foreach ($site->children()->listed() as $footerPage): ?>
          <?php if ($footerPage->translation()->exists()): ?>
          <li>
            <a href="<?= $footerPage->url() ?>"><?= $footerPage->title()->escape() ?></a>
          </li>
          <?php endif ?>
          <?php endforeach ?>
        </ul>
      </div>

      <div class="column is-4 content">
        <?= $site->footerFreeText() ?>
      </div>
    </div>

    <div class="footer-copyright content">
      <?= $site->footerCopyright() ?>

      <?php if (option('environment') == 'prod'): ?>
      <div id="wcb" class="carbonbadge wcb-d"></div>
      <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
      <?php endif ?>
    </div>
  </div>
</footer>
