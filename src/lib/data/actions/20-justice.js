import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const justiceActions = [
	{
		slug: `mise-en-demeure-entreprises-strategie-accord-paris`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.justice,
		position: [84.0058, 30.7483],
		radius: 2.182,
		text: `Élu·e, je mets en demeure les entreprises pour que leur stratégie s'aligne sur l'Accord de Paris`,
		sources: [{ name: `Eco Maires`, link: `https://ecomaires.com/` }]
	},
	{
		slug: `interpellation-lois-climats-ambitieuses`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.justice,
		position: [87.241, 34.4122],
		radius: 1.9111,
		text: `J'interpelle mes élu·e·s pour des lois climat ambitieuses`,
		sources: [
			{ name: `FNE`, link: `https://www.fne.asso.fr/` },
			{ name: `CliMates`, link: `https://www.weareclimates.org/` }
		]
	},
	{
		slug: `petition-decarbonation-economie-europe`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.justice,
		position: [88.8185, 29.3052],
		radius: 2.2054,
		text: `Je pétitionne mes élu·e·s européen·ne·s pour décarboner l'économie`,
		sources: [{ name: `WeMoveEurope`, link: `https://www.wemove.eu/fr` }]
	},
	{
		slug: `reconnaissance-crime-ecocide-constitution`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.justice,
		position: [75.1553, 30.0494],
		radius: 2.4507,
		text: `Juriste, je fais reconnaître le crime d'écocide et rentrer le climat dans notre constitution`,
		sources: [
			{
				name: `Notre Affaire à Tous`,
				link: `https://notreaffaireatous.org/climat-dans-la-constitution-notre-proposition-ideale/`
			},
			{
				name: `Notre Constitution Écologique`,
				link: `https://www.notreconstitutionecologique.org/`
			}
		]
	},
	{
		slug: `attaque-justice-etat`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.justice,
		position: [79.5976, 31.7468],
		radius: 2.3069,
		text: `J'attaque collectivement l'État en justice pour inaction climatique`,
		sources: [
			{ name: `L'Affaire du Siècle`, link: `https://laffairedusiecle.net/` },
			{
				name: `FNH`,
				link: `https://www.fondation-nicolas-hulot.org/jugement-de-laffaire-du-siecle-linaction-climatique-de-letat-est-illegale/`
			},
			{
				name: `Oxfam`,
				link: `https://www.oxfamfrance.org/laffairedusiecle-categorie/affaire-du-siecle-une-premiere-victoire-historique-pour-climat/`
			},
			{ name: `Greenpeace`, link: `https://www.greenpeace.fr/laffaire-du-siecle/` }
		]
	}
];

export default justiceActions;
