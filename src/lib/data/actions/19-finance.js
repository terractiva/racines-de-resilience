import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const financeActions = [
	{
		slug: `lutte-paradis-fiscaux`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.finance,
		position: [83.5217, 38.1736],
		radius: 1.7881,
		text: `Je lutte contre les paradis fiscaux`,
		sources: [
			{
				name: `Oxfam`,
				link: `https://www.oxfamfrance.org/inegalites-et-justice-fiscale/paradis-fiscal-quelle-definition-et-quels-pays/`
			},
			{ name: `Attac`, link: `https://france.attac.org/` }
		]
	},
	{
		slug: `sortie-banques-climaticides`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.finance,
		position: [86.1258, 40.2059],
		radius: 2.0573,
		text: `Je sors mon épargne des banques climaticides`,
		sources: [
			{
				name: `Guide des Amis de la Terre`,
				link: `https://www.amisdelaterre.org/choisis-ta-banque-le-guide-eco-citoyen-des-amis-de-la-terre/`
			}
		]
	},
	{
		slug: `renseignement-fiscalites-climatiques`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.finance,
		position: [89.9903, 39.6945],
		radius: 2.2699,
		text: `Je me renseigne sur la taxe carbone et autres fiscalités climatiques`,
		sources: [
			{
				name: `Ministère de la Transition Écologique`,
				link: `https://www.ecologie.gouv.fr/fiscalite-des-energies`
			}
		]
	},
	{
		slug: `arret-subventions-energies-fossiles`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.finance,
		position: [80.2755, 38.9843],
		radius: 1.8343,
		text: `J'exige l'arrêt des subventions aux énergies fossiles`,
		sources: [
			{
				name: `Les Amis de la Terre`,
				link: `https://www.amisdelaterre.org/campagne/pas-un-euro-dargent-public-pour-les-energies-fossiles/`
			}
		]
	},
	{
		slug: `defense-reglementation-finance`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.finance,
		position: [76.3085, 37.5543],
		radius: 2.1299,
		text: `Je défends une réglementation de la finance au service du climat`,
		sources: [
			{ name: `Pacte Finance-Climat`, link: `https://www.pacte-climat.eu/fr/` },
			{ name: `I4CE`, link: `https://www.i4ce.org/` }
		]
	}
];

export default financeActions;
