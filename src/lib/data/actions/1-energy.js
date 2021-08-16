import Categories from '../categories.js';
import sources from '../sources.js';
import subcategories from '../subcategories.js';

const energyActions = [
	{
		slug: 'métiers-transition-énergétique',
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [21.925, 20.653],
		radius: 1.76,
		sources: [{ item: sources.CLER, link: 'TODO:' }],
		text: `Je me forme aux métiers de la transition énergétique`
	},
	{
		slug: 'démarche-sobriété-efficacité-renouvelable',
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [23.237, 15.389],
		radius: 2.092,
		sources: [{ item: sources.NegaWatt, link: 'TODO:' }],
		text: `Je découvre et diffuse la démarche «&nbsp;sobriété, efficacité, renouvelables&nbsp;»`
	},
	{
		slug: 'production-énergie-renouvelable',
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [18.879, 17.174],
		radius: 2.069,
		sources: [{ item: sources.EnergiePartagee, link: 'TODO:' }],
		text: `J'investis dans la production d'énergie renouvelable`
	},
	{
		slug: 'achat-énergie-renouvelable',
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [15.789, 14.293],
		radius: 2.092,
		sources: [
			{ item: sources.Enercoop, link: 'TODO:' },
			{ item: sources.Greenpeace, link: 'TODO:' }
		],
		text: `J'achète mon electricité aux producteurs d'énergie renouvelable`
	}
];

export default energyActions;
