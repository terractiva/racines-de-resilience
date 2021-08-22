import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const energyActions = [
	{
		slug: `formation-metiers-transition-energetique`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [21.925, 20.653],
		radius: 1.76,
		text: `Je me forme aux métiers de la transition énergétique`,
		sources: [{ name: `CLER`, link: `https://cler.org/outils/formation/` }]
	},
	{
		slug: `achat-electricite-energie-renouvelable`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [15.789, 14.293],
		radius: 2.092,
		text: `J'achète mon electricité aux producteurs d'énergie renouvelable`,
		sources: [
			{ name: `Enercoop`, link: `https://www.enercoop.fr/` },
			{ name: `Greenpeace`, link: `https://www.guide-electricite-verte.fr/` }
		]
	},
	{
		slug: `demarche-sobriete-efficacite-renouvelable`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [23.2342, 15.3941],
		radius: 2.0944,
		text: `Je découvre et diffuse la démarche «&nbsp;sobriété, efficacité, renouvelables&nbsp;»`,
		sources: [{ name: `NégaWatt`, link: `https://negawatt.org/` }]
	},
	{
		slug: `investissement-energie-renouvelable`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.energy,
		position: [18.879, 17.174],
		radius: 2.069,
		text: `J'investis dans la production d'énergie renouvelable`,
		sources: [{ name: `Énergie Partagée`, link: `https://energie-partagee.org/` }]
	}
];

export default energyActions;
