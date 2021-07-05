import Categories from '../categories.js';
import sources from '../sources.js';
import subcategories from '../subcategories.js';

const inequalityActions = [
	{
		slug: 'revenu-universel-base',
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.Inequality,
		position: [75.7141, 43.9795],
		radius: 1.7439,
		sources: [{ item: sources.UBI, link: 'TODO:' }],
		text: `Je défends la création d'un revenu universel de base`
	},
	{
		slug: 'élu-citoyenneté-universelle',
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.Inequality,
		position: [78.811, 44.7716],
		radius: 2.047,
		sources: [
			{ item: sources.CCFDTerreSolidaire, link: 'TODO:' },
			{ item: sources.OCU, link: 'TODO:' }
		],
		text: `J'interpelle mes élu·e·s pour une citoyenneté universelle`
	}
];

export default inequalityActions;
