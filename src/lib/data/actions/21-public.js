import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const publicActions = [
	{
		slug: `partage-messages-reseaux-sociaux`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.public,
		position: [89.4396, 16.9202],
		radius: 1.9094,
		text: `Je partage des messages à impact sur les réseaux sociaux`,
		sources: [
			{ name: `On est prêt`, link: `https://www.onestpret.com/a-propos/nos-partenaires-onestpret` }
		]
	},
	{
		slug: `soutiens-contre-industrie-fossile`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.public,
		position: [86.7476, 20.5895],
		radius: 2.1068,
		text: `Je soutiens un mouvement international contre l'industrie fossile`,
		sources: [
			{ name: `350.org`, link: `https://350.org/fr/simpliquer/` },
			{ name: `Avaaz`, link: `https://avaaz.org/page/fr/` }
		]
	},
	{
		slug: `marche-climat`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.public,
		position: [90.1818, 23.9242],
		radius: 1.687,
		text: `Je marche pour le climat`,
		sources: [{ name: `Réseau Action Climat`, link: `https://reseauactionclimat.org/` }]
	},
	{
		slug: `greve-faim`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.public,
		position: [76.8793, 24.3345],
		radius: 1.8753,
		text: `Je fais la grève de la faim pour un climat stable`,
		sources: [
			{
				name: `Les grévistes de la faim`,
				link: `https://grevistesclimat.wixsite.com/grevistesclimat`
			}
		]
	},
	{
		slug: `actions-revendication-neutralite-carbone`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.public,
		position: [80.3226, 24.5157],
		radius: 2.2328,
		text: `Je participe à des actions directes pour revendiquer la neutralité carbone`,
		sources: [{ name: `Extinction Rebellion`, link: `https://extinctionrebellion.fr/` }]
	},
	{
		slug: `greve-scolaire`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.public,
		position: [84.3738, 24.619],
		radius: 1.8452,
		text: `Je fais la grève scolaire pour le climat`,
		sources: [{ name: `Youth for Climate`, link: `https://youthforclimate.fr/` }]
	}
];

export default publicActions;
