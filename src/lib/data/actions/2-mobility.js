import Categories from '../categories.js';
import sources from '../sources.js';
import subcategories from '../subcategories.js';

const mobilityActions = [
	{
		slug: 'remplacement-voiture',
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.Mobility,
		position: [13.13, 20.15],
		radius: 2.2,
		sources: [
			{ item: sources.PlanVelo, link: 'TODO:' },
			{ item: sources.FUB, link: 'TODO:' },
			{ item: sources.TransBus, link: 'TODO:' },
			{ item: sources.KelBillet, link: 'TODO:' }
		],
		text: `Je remplace la voiture : vélo, transports, co-voiturage`
	},
	{
		slug: 'entreprise-plan-mobilité',
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.Mobility,
		position: [16.84, 22.75],
		radius: 1.79,
		sources: [{ item: sources.ADEME, link: 'TODO:' }],
		text: `Je pousse mon entreprise à adopter un plan de mobilité`
	},
	{
		slug: 'élu-politique-transport',
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.Mobility,
		position: [19.4447, 25.4204],
		radius: 2.0214,
		sources: [
			{ item: sources.FNAUT, link: 'TODO:' },
			{ item: sources.CEREMA, link: 'TODO:' }
		],
		text: `Élu·e, usagèr·e, je fais changer les politiques de transport`
	}
];

export default mobilityActions;
