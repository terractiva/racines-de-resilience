import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const conflictsActions = [
	{
		slug: `engagement-coexistence-pratique-religieuses`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.conflicts,
		position: [83.553, 78.2446],
		radius: 2.2161,
		text: `Je m'engage pour la coexistence des pratiques et croyances religieuses`,
		sources: [{ name: `Coexister`, link: `https://www.coexister.fr/que-faisons-nous/` }]
	},
	{
		slug: `formation-gouvernance-partagee`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.conflicts,
		position: [76.7847, 76.9229],
		radius: 1.8028,
		text: `Je m'exerce à la gouvernance partagée`,
		sources: [{ name: `Université du Nous`, link: `https://universite-du-nous.org` }]
	},
	{
		slug: `formation-non-violence-gestion-conflits`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.conflicts,
		position: [79.7025, 79.0988],
		radius: 2.0244,
		text: `Je me forme à la non-violence et à la gestion des conflits`,
		sources: [
			{ name: `MAN`, link: `https://nonviolence.fr/` },
			{ name: `AFFCNV`, link: `https://www.cnvformations.fr/` },
			{ name: `EDUlib`, link: `https://mooc-francophone.com/cours/mooc-gestion-des-conflits/` }
		]
	},
	{
		slug: `soutiens-alliances-masculin-feminin`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.conflicts,
		position: [70.5852, 73.2642],
		radius: 2.1802,
		text: `Je soutiens de nouvelles alliances masculin-féminin, hommes-femmes`,
		sources: [
			{ name: `MKP`, link: `https://www.mkpfrance.org/` },
			{ name: `HeForShe`, link: `https://www.heforshe.org` }
		]
	},
	{
		slug: `formation-intelligence-collective`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.conflicts,
		position: [73.7865, 77.5822],
		radius: 1.6451,
		text: `Je me forme à l'intelligence collective`,
		sources: [{ name: `CYU`, link: `https://www.cyu.fr/du-ic#presentation` }]
	},
	{
		slug: `formation-mediation-pour-tous`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.conflicts,
		position: [67.7801, 69.7237],
		radius: 2.081,
		text: `Je me forme à la médiation pour tous`,
		sources: [
			{ name: `Médiation Nomade`, link: `https://www.mediationnomade.fr/` },
			{ name: `France Médiation`, link: `https://www.francemediation.fr/` }
		]
	}
];

export default conflictsActions;
