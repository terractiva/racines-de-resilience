  </body>

  <?= js('assets/js/templates/script.js') ?>
  <?= js('@auto') ?>
  <?php if (option('environment') == 'prod'): ?>
  <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"></script>
  <?php endif ?>
</html>
