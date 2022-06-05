import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const complexityActions = [
	{
		slug: `organisation-debat-projection`,
		level: 2,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.complexity,
		position: [26.1458, 75.5613],
		radius: 1.8576,
		text: `J'organise une rencontre-débat-projection thématique`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Colibris`,
				link: `https://www.colibris-lemouvement.org/passer-a-laction/organiser-un-evenement/organiser-un-debat`
			}
		]
	},
	{
		slug: `diffusion-scenarios-decarbonation`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.complexity,
		position: [23.1159, 79.032],
		radius: 2.269,
		text: `Je diffuse des scénarios crédibles de décarbonation de la société`,
		sources: [
			{ countrySlug: 'FR', name: `NégaWatt`, link: `https://negawatt.org/` },
			{ countrySlug: 'FR', name: `The Shift Project` }
		]
	},
	{
		slug: `relais-informations-fiables`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.complexity,
		position: [22.7497, 84.9397],
		radius: 2.084,
		text: `Je relaie des informations fiables sur les réseaux`,
		sources: [
			{ countrySlug: 'FR', name: `GIEC` },
			{ countrySlug: 'FR', name: `IPBES` },
			{ countrySlug: 'FR', name: `IPSL-CNRS` }
		]
	},
	{
		slug: `animation-ateliers-enjeux-climatiques`,
		level: 3,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.complexity,
		position: [28.5769, 66.4145],
		radius: 1.9721,
		text: `J'anime des ateliers interactifs sur les enjeux climatiques`,
		sources: [
			{ countrySlug: 'FR', name: `La Fresque du Climat`, link: `https://fresqueduclimat.org/` }
		]
	},
	{
		slug: `adhesion-groupe-sensibilisation-risques-effondrements`,
		level: 2,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.complexity,
		position: [24.9422, 68.2197],
		radius: 2.0247,
		text: `Je rejoins un groupe local pour sensibiliser aux risques d'effondrements`,
		sources: [{ countrySlug: 'FR', name: `Adrastia`, link: `https://adrastia.org/` }]
	},
	{
		slug: `formation-communication-enjeux-energie-climat`,
		level: 3,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.complexity,
		position: [28.7341, 71.6959],
		radius: 2.1927,
		text: `Je me forme pour communiquer sur les enjeux énergie-climat`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Les Shifters`,
				link: `https://docs.google.com/forms/d/12ahUuedzFEtx9XQWXGYd0cWssxYa0QEk2OLrFiKRWIg/viewform?edit_requested=true`
			},
			{
				countrySlug: 'FR',
				name: `Avenir Climatique`,
				link: `https://avenirclimatique.org/lacademy/`
			}
		]
	}
];

export default complexityActions;
