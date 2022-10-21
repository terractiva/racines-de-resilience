panel.plugin('racines-de-resilience/fieldset-box', {
  blocks: {
    box: {
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
        <div class="plugin-fieldset-box">
          <h3 class="plugin-fieldset-box-title">Boîte</h3>
          <p class="plugin-fieldset-box-helper">
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
