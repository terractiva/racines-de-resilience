import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const experimentationActions = [
	{
		slug: `formation-desobeissance-civile-camp-climat`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.experimentation,
		position: [80.4274, 9.6204],
		radius: 2.2517,
		text: `Je participe à un camp climat pour me former à la désobéissance civile`,
		sources: [
			{ name: `Alternatiba`, link: `https://campclimat.eu/` },
			{ name: `ANV-COP21`, link: `https://campclimat.eu/` },
			{ name: `Les Amis de la Terre`, link: `https://campclimat.eu/` }
		]
	},
	{
		slug: `adhesion-squats-autogeres`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.experimentation,
		position: [72.8748, 12.9006],
		radius: 2.2663,
		text: `Je rejoins des squats autogérés : Maisons du Peuple/Maisons de l’Écologie et des Résistances`,
		sources: [
			{ name: `Archipel du Vivant`, link: `archipelduvivant.org/ressources/annuaires/zad-mdp-mer/` }
		]
	},
	{
		slug: `adhesion-zad`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.experimentation,
		position: [76.957, 11.6131],
		radius: 2.011,
		text: `Je rejoins une Zone À Défendre (ZAD)`,
		sources: [
			{ name: `Carte des luttes par Reporterre`, link: `https://lutteslocales.gogocarto.fr/` }
		]
	}
];

export default experimentationActions;
