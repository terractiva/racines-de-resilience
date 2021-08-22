import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const mobilityActions = [
	{
		slug: `alternatives-voiture`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.mobility,
		position: [13.163, 20.185],
		radius: 2.2,
		text: `Je remplace la voiture : vélo, transports, co-voiturage`,
		sources: [
			{ name: `Plan Vélo`, link: `https://www.ecologie.gouv.fr/velo-et-marche` },
			{ name: `FUB`, link: `https://www.fub.fr/` },
			{ name: `TRANS'BUS`, link: `https://www.transbus.org/index.html` },
			{ name: `KelBillet`, link: `https://www.kelbillet.com/covoiturage/` }
		]
	},
	{
		slug: `entreprise-plan-mobilite`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.mobility,
		position: [16.84, 22.75],
		radius: 1.813,
		text: `Je pousse mon entreprise à adopter un plan de mobilité`,
		sources: [
			{
				name: `ADEME`,
				link: `https://www.ademe.fr/entreprises-monde-agricole/reduire-impacts/optimiser-mobilite-salaries/dossier/plan-mobilite/plan-mobilite-quest-cest`
			}
		]
	},
	{
		slug: `changement-politiques-transport`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.mobility,
		position: [19.4447, 25.4204],
		radius: 2.0514,
		text: `Élu·e, usagèr·e, je fais changer les politiques de transport`,
		sources: [
			{ name: `FNAUT`, link: `https://www.fnaut.fr/` },
			{ name: `CEREMA`, link: `https://www.cerema.fr/fr/cerema` }
		]
	}
];

export default mobilityActions;
