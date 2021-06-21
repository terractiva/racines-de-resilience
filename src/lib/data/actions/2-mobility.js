import Categories from '$lib/data/categories';
import Sources from '$lib/data/sources';
import Subcategories from '$lib/data/subcategories';

const mobilityActions = [
	{
		slug: 'remplacement-voiture',
		level: 3,
		categories: [Categories.Construct],
		subcategory: Subcategories.Mobility,
		position: [13.13, 20.15],
		radius: 2.2,
		sources: [Sources.PlanVelo, Sources.FUB, Sources.TransBus, Sources.KelBillet],
		text: `Je remplace la voiture : vélo, transports, co-voiturage`
	},
	{
		slug: 'entreprise-plan-mobilité',
		level: 2,
		categories: [Categories.Construct],
		subcategory: Subcategories.Mobility,
		position: [16.84, 22.75],
		radius: 1.79,
		sources: [Sources.ADEME],
		text: `Je pousse mon entreprise à adopter un plan de mobilité`
	},
	{
		slug: 'élu-politique-transport',
		level: 1,
		categories: [Categories.Construct],
		subcategory: Subcategories.Mobility,
		position: [19.4447, 25.4204],
		radius: 2.0214,
		sources: [Sources.FNAUT, Sources.CEREMA],
		text: `Élu·e, usagèr·e, je fais changer les politiques de transport`
	}
];

export default mobilityActions;
