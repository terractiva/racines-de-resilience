import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const uncertaintyActions = [
	{
		slug: `pratique-medecines-alternatives`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.uncertainty,
		position: [59.3214, 82.831],
		radius: 2.3342,
		text: `J'écoute et prends soin de mon corps : médecines alternatives et pratiques corporelles`,
		sources: [
			{ name: `OMNES`, link: `https://www.omnes.fr/page/632267-praticiens-naturopathe-omnes` },
			{
				name: `Maisons sport-santé`,
				link: `https://www.sports.gouv.fr/pratiques-sportives/sport-sante-bien-etre/maisons-sport-sante/maisons-sport-sante-carte`
			}
		]
	},
	{
		slug: `animation-cercle-transition-interieure`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.uncertainty,
		position: [54.0178, 76.8987],
		radius: 2.0027,
		text: `J'anime un cercle de transition intérieure`,
		sources: [
			{ name: `Réseau transition belge`, link: `https://pratiquesti.reseautransition.be/?AccueilL` }
		]
	},
	{
		slug: `ralentissement-rythme`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.uncertainty,
		position: [57.6614, 78.9284],
		radius: 1.8794,
		text: `Je découvre des manières de ralentir mon rythme`,
		sources: [
			{ name: `La slow life`, link: `https://www.laslowlife.fr/le-mouvement-slow-un-art-de-vivre/` }
		]
	},
	{
		slug: `accueil-eco-anxiete`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.uncertainty,
		position: [54.7485, 81.7787],
		radius: 1.9554,
		text: `J'accueille mon éco-anxiété et j'en parle`,
		sources: [
			{ name: `Écopsychologie`, link: `https://www.ecopsychologiefrancophone.org/et-apres/` }
		]
	},
	{
		slug: `culture-plaisirs-simples`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.uncertainty,
		position: [55.4952, 86.752],
		radius: 2.035,
		text: `Je cultive des plaisirs simples et joyeux : balades, jeux, arts, festivités...`,
		sources: [
			{ name: `IGN`, link: `https://www.ign.fr/particuliers` },
			{ name: `ALF`, link: `http://www.kananas.com/associationdesludothequesfrancaises/carte/` }
		]
	},
	{
		slug: `pratique-art-essentiel`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.uncertainty,
		position: [56.1422, 72.6357],
		radius: 2.1256,
		text: `Je pratique l'art d'aller à l'essentiel`,
		sources: [
			{ name: `Simplicité volontaire`, link: `http://simplicitevolontaire.org/` },
			{ name: `Minimalisme`, link: `https://etre-minimaliste.com/blog/` }
		]
	}
];

export default uncertaintyActions;
