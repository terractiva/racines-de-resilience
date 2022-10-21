panel.plugin('racines-de-resilience/fieldset-section', {
  blocks: {
    section: {
      data() {
        return {
          model: {
            heading: this.content.heading,
            layout: this.content.layout
          }
        };
      },
      computed: {
        fields() {
          return {
            heading: this.field('heading'),
            layout: this.field('layout')
          };
        }
      },
      template: `
        <div class="plugin-fieldset-section">
          <h1 class="plugin-fieldset-section-title">Section</h1>
          <p class="plugin-fieldset-section-helper">
            <i>Plus d'options dans les paramètres</i>
          </p>
          <k-fieldset
            v-model="model"
            :fields="fields"
            @input="update({
              heading: $event.heading,
              layout: $event.layout
            })"
          />
        </div>
      `
    }
  }
});
