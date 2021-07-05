import Categories from '../categories.js';
import sources from '../sources.js';
import subcategories from '../subcategories.js';

const resilienceActions = [
	{
		slug: 'élu-plan-communal-sécurité-civil',
		level: 3,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.Resilience,
		position: [24.784, 62.0209],
		radius: 1.8534,
		sources: [
			{ item: sources.Resiliere, link: 'TODO:' },
			{ item: sources.SOSMaires, link: 'TODO:' }
		],
		text: `Élu·e, j'élabore un Plan Communal de Sécurité Civile`
	},
	{
		slug: 'commune-régie-agricole',
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.Resilience,
		position: [22.0267, 58.3584],
		radius: 1.9496,
		sources: [{ item: sources.OPTIGEDE, link: 'TODO:' }],
		text: `Je participe à la création d'une régie agricole dans ma commune`
	},
	{
		slug: 'réseaux-entraide-rural-urbain',
		level: 3,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.Resilience,
		position: [21.1529, 63.5489],
		radius: 2.0149,
		sources: [{ item: sources.Humanum, link: 'TODO:' }],
		text: `Je tisse des réseaux d'entraide entre ruraux·ales et urbain·e·s`
	}
];

export default resilienceActions;
