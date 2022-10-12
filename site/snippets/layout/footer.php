<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <p class="title is-5"><strong>Nous suivre</strong></p>
        <ul>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Twitter</a>
          </li>
          <li>
            <a>S'abonner</a>
          </li>
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
        <p>Les textes et labels de ce site placés sous licence CC0 et sont libres de diffusion, à condition de citer ©RacinesDeResilience et de nous le faire savoir.</p>
        <p>Les images sont la propriété de Théotime Noël et l'Arbre aux actions de l'association Terractiva.</p>
        <p>Les contenus de toutes les actions référencées appartiennent à leurs structures respectives.</p>
      </div>
    </div>

    <div class="content has-text-centered">
      <p>
        Site par <a href="https://tseignette.github.io/">Thomas Seignette</a> • Hébergé gracieusement par <a href="https://www.infomaniak.com/fr">Infomaniak</a>
      </p>
      <p>Terractiva © 2022</p>
      <div id="wcb" class="carbonbadge wcb-d"></div>
    </div>
  </div>
</footer>

<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
