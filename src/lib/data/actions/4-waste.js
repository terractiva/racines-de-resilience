import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const wasteActions = [
	{
		slug: `formation-composte`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.waste,
		position: [7.0013, 34.7656],
		radius: 1.8586,
		text: `Je me forme pour devenir maitre·sse composteur·se`,
		sources: [
			{
				countrySlug: 'FR',
				name: `ADEME`,
				link: `https://formations.ademe.fr/formations_economie-circulaire_devenir-maitre-composteur-:-prevention-et-gestion-de-proximite-des-biodechets_s4719.html`
			}
		]
	},
	{
		slug: `low-tech-minimiser-polluants`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.waste,
		position: [13.4213, 37.3296],
		radius: 2.3151,
		text: `Ingénieur·e, je me forme au low-tech pour minimiser polluants et déchets`,
		sources: [
			{ countrySlug: 'FR', name: `La Low Tech Skol`, link: `https://lowtechskol.org/` },
			{ countrySlug: 'FR', name: `L'Atelier Paysan`, link: `https://latelierpaysan.org/` }
		]
	},
	{
		slug: `zero-dechet`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.waste,
		position: [3.9241, 35.7164],
		radius: 1.7434,
		text: `J'adopte les gestes zéro déchet`,
		sources: [
			{ countrySlug: 'FR', name: `Citeo`, link: `https://www.consignesdetri.fr/` },
			{ countrySlug: 'FR', name: `Zéro Waste`, link: `https://www.zerowastefrance.org/` }
		]
	},
	{
		slug: `recupere-repare-recyle`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.waste,
		position: [10.0681, 37.0678],
		radius: 1.8811,
		text: `Je récupère, répare, recycle`,
		sources: [
			{ countrySlug: 'FR', name: `Ressourceries`, link: `https://ressourceries.info/` },
			{ countrySlug: 'FR', name: `Fab Lab`, link: `http://www.fablab.fr` },
			{ countrySlug: 'FR', name: `Repair café`, link: `https://www.repaircafe.org/fr/` }
		]
	},
	{
		slug: `industriel-economie-circulaire`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.waste,
		position: [17.5856, 39.11],
		radius: 2.0007,
		text: `Industriel·le, je m'inscris dans une économie circulaire`,
		sources: [{ countrySlug: 'FR', name: `OPTIGEDE`, link: `https://www.optigede.ademe.fr/` }]
	}
];

export default wasteActions;
