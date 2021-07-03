import Categories from '../categories.js';
import Sources from '../sources.js';
import Subcategories from '../subcategories.js';

const joyActions = [
	{
		slug: 'art-aller-essentiel',
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: Subcategories.Joy,
		position: [56.1567, 72.633],
		radius: 2.0881,
		sources: [Sources.SimpliciteVolontaire, Sources.Minimalisme],
		text: `Je pratique l'art d'aller à l'essentiel`
	},
	{
		slug: 'transition-intérieure',
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: Subcategories.Joy,
		position: [54.0212, 76.9036],
		radius: 1.9785,
		sources: [Sources.RéseauTransitionBelge],
		text: `J'anime un cercle de transition intérieure`
	}
];

export default joyActions;
