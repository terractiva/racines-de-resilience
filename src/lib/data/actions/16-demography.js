import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const demographyActions = [
	{
		slug: `placement-autolimitation-natalite-questions-ecologiques`,
		level: 1,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.demography,
		position: [82.9104, 64.861],
		radius: 2.284,
		text: `Je place l'autolimitation de la natalité au cœur des questions écologiques`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Démographie Responsable`,
				link: `https://www.demographie-responsable.org/`
			}
		]
	},
	{
		slug: `formation-sexualite-contraception`,
		level: 2,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.demography,
		position: [79.0582, 64.1977],
		radius: 2.2132,
		text: `Je deviens incollable sur la sexualité, la contraception et l'avortement`,
		sources: [
			{ countrySlug: 'FR', name: `Planning Familial`, link: `https://www.planning-familial.org/fr` }
		]
	},
	{
		slug: `lancement-debat-national-politique-population-soutenable`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.demography,
		position: [72.3132, 56.8603],
		radius: 2.25,
		text: `Je lance un débat national pour une politique de population soutenable`,
		sources: [
			{ countrySlug: 'FR', name: `Population Matters`, link: `https://populationmatters.org/` },
			{ countrySlug: 'FR', name: `ICP`, link: `https://populationinstitutecanada.ca/fr/` }
		]
	},
	{
		slug: `choix-enfants-impacts`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.demography,
		position: [74.9776, 61.5071],
		radius: 2.3834,
		text: `Je choisis d'avoir des enfants aussi en fonction des impacts sur le climat, les ressources et la pollution`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Overpopulation Project`,
				link: `https://overpopulation-project.com/`
			}
		]
	}
];

export default demographyActions;
