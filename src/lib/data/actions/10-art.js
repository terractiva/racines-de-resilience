import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const artActions = [
	{
		slug: `apprentissage-rire-sentiment-culpabilite`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.art,
		position: [40.3997, 87.5684],
		radius: 1.9575,
		text: `J'apprends à rire en photo de mon sentiment de culpabilité`,
		sources: [{ countrySlug: 'FR', name: `Sorry Children`, link: `https://sorrychildren.com/fr/` }]
	},
	{
		slug: `musique-mise-en-service-vivant-climat`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.art,
		position: [38.6306, 81.612],
		radius: 2.0719,
		text: `Je mets ma musique au service du Vivant et du climat`,
		sources: [
			{ countrySlug: 'FR', name: `La Fanfare Climatique`, link: `https://fanfare-climatique.fr/` }
		]
	},
	{
		slug: `travail-artistes-urbanistes-transition-energetique`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.art,
		position: [39.8056, 74.7297],
		radius: 1.8411,
		text: `Artiste, je travaille à la transition énergétique avec des urbanistes`,
		sources: [{ countrySlug: 'FR', name: `POLAU`, link: `http://polau.org/` }]
	},
	{
		slug: `transformation-rue-messages`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.art,
		position: [41.7091, 78.6984],
		radius: 1.9391,
		text: `Je transforme les rues en messages d'action`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Street Art Rebellion`,
				link: `https://extinctionrebellion.fr/blog/2021/01/14/street-art-rebellion.html`
			}
		]
	},
	{
		slug: `artiste-mobilisation-public`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.art,
		position: [42.9717, 83.5874],
		radius: 2.0663,
		text: `Artiste, je mobilise autrement mon public`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Art of Change 21`,
				link: `https://artofchange21.com/fr/accueil/`
			},
			{ countrySlug: 'FR', name: `La fabrique des récits`, link: `https://fabriquedesrecits.com/` }
		]
	},
	{
		slug: `clown-serieux`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.art,
		position: [43.1305, 72.9953],
		radius: 1.9475,
		text: `Je fais sérieusement le clown`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Brigade Activiste des Clowns`,
				link: `https://brigadeclowns.wordpress.com`
			}
		]
	}
];

export default artActions;
