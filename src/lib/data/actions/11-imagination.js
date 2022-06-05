import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const imaginationActions = [
	{
		slug: `organisation-labo-fiction`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.imagination,
		position: [50.3315, 80.7894],
		radius: 1.7874,
		text: `J'organise un labo-fiction`,
		sources: [
			{ countrySlug: 'FR', name: `Ateliers de l'Antemonde`, link: `https://antemonde.org/` }
		]
	},
	{
		slug: `participation-atelier-ecriture`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.imagination,
		position: [47.9667, 84.8266],
		radius: 2.1504,
		text: `Je participe à un atelier d'imagination et d'écriture collaborative`,
		sources: [{ countrySlug: 'FR', name: `Futurs proches`, link: `https://futursproches.com/` }]
	},
	{
		slug: `contribution-construction-reseau-tempetes`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.imagination,
		position: [49.3761, 73.7832],
		radius: 2.0705,
		text: `Je contribue à la construction d'un réseau des tempêtes`,
		sources: [
			{ countrySlug: 'FR', name: `Time to Breathe`, link: `https://www.timetobreathe.cc/` },
			{ countrySlug: 'FR', name: `Horizons`, link: `https://www.associationhorizons.com/` }
		]
	},
	{
		slug: `dessin-projet-societe-desirable`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.imagination,
		position: [46.5874, 77.8885],
		radius: 2.1983,
		text: `Je dessine un projet de société désirable sur mon territoire`,
		sources: [
			{
				countrySlug: 'FR',
				name: `CNNR`,
				link: `https://www.cnnr.fr/elaboration-du-programme-des-jours-heureux/`
			},
			{
				countrySlug: 'FR',
				name: `Mouvement de la Transition`,
				link: `https://www.entransition.fr/`
			}
		]
	}
];

export default imaginationActions;
