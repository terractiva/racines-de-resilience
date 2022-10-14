panel.plugin('racines-de-resilience/fieldset-section', {
  blocks: {
    section: `
      <div class="plugin-fieldset-section">
        <div class="k-block-type-heading-input" data-level="h2">
          <k-writer
            placeholder="Titre..."
            ref="input"
            :inline="true"
            :value="content.heading"
            @input="update({ heading: $event })"
          />
        </div>
        <p><em>Ouvrez les paramètres pour sélectionner le contenu</em></p>
      </div>
    `
  }
});
