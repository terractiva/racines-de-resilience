import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const livingActions = [
	{
		slug: `connaissance-amour-nature`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [66.7679, 86.5665],
		radius: 2.2107,
		text: `J'apprends à connaître et aimer la nature : immersions, sorties naturalistes...`,
		sources: [{ name: `Mille Traces`, link: `http://www.mille-traces.org` }]
	},
	{
		slug: `cultivation-paix-avec-meditation`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [71.3384, 83.6604],
		radius: 2.032,
		text: `Je pratique la méditation ou la pleine conscience pour cultiver la paix`,
		sources: [
			{ name: `ADM`, link: `https://www.association-mindfulness.org/` },
			{ name: `AZI`, link: `https://www.zen-azi.org/fr/liste-lieux-meditation` }
		]
	},
	{
		slug: `celebration-cycles-naturels-etapes-vie`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [65.318, 75.3352],
		radius: 2.0546,
		text: `J'invente des rituels pour célébrer les cycles naturels et les étapes de la vie`,
		sources: [{ name: `Écospiritualité`, link: `https://praticienecorituels.com/` }]
	},
	{
		slug: `exploration-transition-interieure`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [68.0353, 79.1192],
		radius: 2.3687,
		text: `J'explore la transition intérieure à partir des grandes traditions spirituelles`,
		sources: [
			{ name: `Pain pour le prochain`, link: `https://voir-et-agir.ch/transitioninterieure/` },
			{ name: `Massorti France`, link: `https://www.massorti.com/` },
			{ name: `Maison Soufie`, link: `http://www.lamaisonsoufie.fr/` }
		]
	},
	{
		slug: `inspiration-traditions-peuples-racines`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [64.3018, 81.7482],
		radius: 2.1472,
		text: `Je m'inspire des traditions de sagesse des peuples racines`,
		sources: [{ name: `Survival International`, link: `https://www.survivalinternational.fr/` }]
	},
	{
		slug: `evolution-rapport-douleur`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [63.2735, 68.325],
		radius: 2.0332,
		text: `Je fais évoluer mon rapport à la douleur, à la peine et la mort`,
		sources: [
			{ name: `Café Deuil`, link: `https://www.cafedeuil.fr/` },
			{ name: `JALMALV`, link: `https://www.jalmalv-federation.fr/` }
		]
	},
	{
		slug: `transformation-prise-conscience-action`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.living,
		position: [60.9608, 73.0839],
		radius: 2.3993,
		text: `Je transforme ma prise de conscience écologique en élan d'action`,
		sources: [
			{
				name: `Ateliers de Travail Qui Relie`,
				link: `http://www.ateliersdetravailquirelie.sitew.fr/`
			},
			{ name: `Terr'Eveille`, link: `https://laur301.wixsite.com/terreveille/reseau-international` }
		]
	}
];

export default livingActions;
