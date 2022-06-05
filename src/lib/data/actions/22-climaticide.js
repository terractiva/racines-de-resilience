import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const climaticideActions = [
	{
		slug: `renseignement-achat-boycott`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.climaticide,
		position: [83.6837, 15.1651],
		radius: 2.1665,
		text: `Je me renseigne sur un produit avant de l'acheter ou de le boycotter`,
		sources: [
			{ countrySlug: 'FR', name: `BuyOrNot`, link: `https://buyornot.org/` },
			{ countrySlug: 'FR', name: `I-boycott`, link: `https://www.i-boycott.org` }
		]
	},
	{
		slug: `formation-desobeissance-civile-journee`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.climaticide,
		position: [80.3946, 17.9381],
		radius: 2.0554,
		text: `Je fais une journée de formation à la désobéissance civile`,
		sources: [{ countrySlug: 'FR', name: `ANV-COP21`, link: `https://anv-cop21.org/` }]
	},
	{
		slug: `demantelement-infrastructures-fossiles`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.climaticide,
		position: [73.1609, 20.081],
		radius: 2.0454,
		text: `Je démantèle les infrastructures fossiles`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Deep Green Resistance`,
				link: `https://www.deepgreenresistance.fr/la-guerre-ecologique-decisive/`
			}
		]
	},
	{
		slug: `resistance-projets-inutiles`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.climaticide,
		position: [76.7106, 17.9398],
		radius: 1.9939,
		text: `Je rejoins la résistance aux grands projets inutiles imposés`,
		sources: [
			{ countrySlug: 'FR', name: `Il est encore temps`, link: `https://ilestencoretemps.fr/` }
		]
	}
];

export default climaticideActions;
