import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const commonsActions = [
	{
		slug: `promotion-logiciels-libres`,
		level: 1,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.commons,
		position: [90.9924, 61.0211],
		radius: 1.9717,
		text: `Je fais la promotion des services en ligne et logiciels libres`,
		sources: [
			{ name: `CHATONS`, link: `https://chatons.org/` },
			{ name: `April`, link: `https://www.april.org/fr/association/` }
		]
	},
	{
		slug: `contribution-mouvements-des-communs`,
		level: 2,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.commons,
		position: [84.5498, 58.8901],
		radius: 1.9963,
		text: `Je contribue au mouvement des Communs`,
		sources: [
			{ name: `Les Communs`, link: `https://annuaire.lescommuns.org/category/evenements/` },
			{ name: `Mouvement Utopia`, link: `https://mouvementutopia.org/site/identite/` }
		]
	},
	{
		slug: `diffusion-concept-bioregions`,
		level: 1,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.commons,
		position: [88.1151, 57.4779],
		radius: 1.997,
		text: `Je diffuse le concept des biorégions`,
		sources: [{ name: `Réseau des Territorialistes`, link: `https://reseaudesterritorialistes.fr` }]
	},
	{
		slug: `vie-lieux-collectifs`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.commons,
		position: [76.8587, 54.1372],
		radius: 2.189,
		text: `Je vis dans des lieux collectifs qui privilégient l'usage à la propriété`,
		sources: [
			{ name: `Foncière Antidote`, link: `https://lespassageres.org/` },
			{
				name: `La terre en commun`,
				link: `https://encommun.eco/fonds-de-dotation/pourquoi-fonds-de-dotation`
			}
		]
	},
	{
		slug: `soutiens-patrimoine-commun`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.commons,
		position: [80.4237, 57.0626],
		radius: 2.2976,
		text: `J’œuvre pour que l'eau, la terre, les semences deviennent un patrimoine commun`,
		sources: [
			{ name: `Eau Bien Commun`, link: `https://coordination-eau.fr/` },
			{ name: `Kokopelli`, link: `https://kokopelli-semences.fr/fr/` }
		]
	},
	{
		slug: `soutiens-creation-securite-sociale-alimentation`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.commons,
		position: [75.5209, 49.5302],
		radius: 1.9464,
		text: `Je soutiens la création d'une Sécurité Sociale de l'Alimentation`,
		sources: [{ name: `Collectif SSA`, link: `https://securite-sociale-alimentation.org/` }]
	}
];

export default commonsActions;
