import Categories from '../categories';
import Sources from '../sources';
import Subcategories from '../subcategories';

const inequalityActions = [
	{
		slug: 'revenu-universel-base',
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: Subcategories.Inequality,
		position: [75.7141, 43.9795],
		radius: 1.7439,
		sources: [Sources.UBI],
		text: `Je défends la création d'un revenu universel de base`
	},
	{
		slug: 'élu-citoyenneté-universelle',
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: Subcategories.Inequality,
		position: [78.811, 44.7716],
		radius: 2.047,
		sources: [Sources.CCFDTerreSolidaire, Sources.OCU],
		text: `J'interpelle mes élu·e·s pour une citoyenneté universelle`
	}
];

export default inequalityActions;
