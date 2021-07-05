import Categories from '../categories.js';
import sources from '../sources.js';
import subcategories from '../subcategories.js';

const climaticideActions = [
	{
		slug: 'démantèlement-fossile',
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.Climaticide,
		position: [73.1589, 20.0428],
		radius: 2.047,
		sources: [{ item: sources.DeepGreenResistance, link: 'TODO:' }],
		text: `Je démantèle les infrastructures fossiles`
	},
	{
		slug: 'résistante-projets-inutiles',
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.Climaticide,
		position: [76.7067, 17.8581],
		radius: 1.9942,
		sources: [{ item: sources.IlEstEncoreTemps, link: 'TODO:' }],
		text: `Je rejoins la résistance aux grands projets inutiles imposés`
	}
];

export default climaticideActions;
