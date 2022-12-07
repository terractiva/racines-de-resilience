  <?php $showCarbonBadge = $showCarbonBadge ?? true; ?>

  </body>

  <?= js('assets/js/templates/script.js') ?>
  <?= js('@auto') ?>
  <?php snippet('matomo'); ?>
  <?php if ($showCarbonBadge && option('environment') == 'prod'): ?>
  <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"></script>
  <?php endif ?>
</html>
