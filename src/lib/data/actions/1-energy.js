import Categories from '$lib/data/categories';
import Sources from '$lib/data/sources';
import Subcategories from '$lib/data/subcategories';

const energyActions = [
	{
		slug: 'métiers-transition-énergétique',
		level: 3,
		categories: [Categories.Construct],
		subcategory: Subcategories.Energy,
		position: [21.925, 20.653],
		radius: 1.76,
		sources: [Sources.CLER],
		text: `Je me forme aux métiers de la transition énergétique`
	},
	{
		slug: 'démarche-sobriété-efficacité-renouvelable',
		level: 1,
		categories: [Categories.Construct],
		subcategory: Subcategories.Energy,
		position: [23.237, 15.389],
		radius: 2.092,
		sources: [Sources.NegaWatt],
		text: `Je découvre et diffuse la démarche «&nbsp;sobriété, efficacité, renouvelables&nbsp;»`
	},
	{
		slug: 'production-énergie-renouvelable',
		level: 2,
		categories: [Categories.Construct],
		subcategory: Subcategories.Energy,
		position: [18.879, 17.174],
		radius: 2.069,
		sources: [Sources.EnergiePartagee],
		text: `J'investis dans la production d'énergie renouvelable`
	},
	{
		slug: 'achat-énergie-renouvelable',
		level: 1,
		categories: [Categories.Construct],
		subcategory: Subcategories.Energy,
		position: [15.789, 14.293],
		radius: 2.092,
		sources: [Sources.Enercoop, Sources.Greenpeace],
		text: `J'achète mon electricité aux producteurs d'énergie renouvelable`
	}
];

export default energyActions;
