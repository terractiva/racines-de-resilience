panel.plugin('racines-de-resilience/fieldset-section', {
  blocks: {
    section: {
      data() {
        return {
          model: {
            heading: this.content.heading,
            subheading: this.content.subheading,
            layout: this.content.layout
          }
        };
      },
      computed: {
        fields() {
          return {
            heading: this.field('heading'),
            subheading: this.field('subheading'),
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
              subheading: $event.subheading,
              layout: $event.layout
            })"
          />
        </div>
      `
    }
  }
});
