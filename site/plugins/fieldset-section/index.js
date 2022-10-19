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
          <k-fieldset
            v-model="model"
            :fields="fields"
            @input="update({
              heading: $event.heading,
              layout: $event.layout
            })"
          />
          <p><i>Plus d'options dans les paramètres</i></p>
        </div>
      `
    }
  }
});
