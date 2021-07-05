import Categories from '../categories.js';
import sources from '../sources.js';
import subcategories from '../subcategories.js';

const joyActions = [
	{
		slug: 'art-aller-essentiel',
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.Joy,
		position: [56.1567, 72.633],
		radius: 2.0881,
		sources: [
			{ item: sources.SimpliciteVolontaire, link: 'TODO:' },
			{ item: sources.Minimalisme, link: 'TODO:' }
		],
		text: `Je pratique l'art d'aller à l'essentiel`
	},
	{
		slug: 'transition-intérieure',
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.Joy,
		position: [54.0212, 76.9036],
		radius: 1.9785,
		sources: [{ item: sources.RéseauTransitionBelge, link: 'TODO:' }],
		text: `J'anime un cercle de transition intérieure`
	}
];

export default joyActions;
