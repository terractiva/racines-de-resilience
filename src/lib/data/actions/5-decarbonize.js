import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const decarbonizeActions = [
	{
		slug: `calcul-empreinte-carbone`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [3.9493, 42.594],
		radius: 1.7678,
		text: `Je calcule mon empreinte carbone`,
		sources: [{ countrySlug: 'FR', name: `ADEME`, link: `https://nosgestesclimat.fr/` }]
	},
	{
		slug: `mesure-impact-gestes-quotidiens`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [4.1209, 54.2866],
		radius: 1.8596,
		text: `Je mesure l'impact de mes gestes quotidiens`,
		sources: [
			{ countrySlug: 'FR', name: `Ça Commence Par Moi`, link: `https://cacommenceparmoi.org/` }
		]
	},
	{
		slug: `accompagnement-economie-energie`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [7.0498, 42.042],
		radius: 1.9936,
		text: `Je me fais accompagner pour faire des économies d'énergie`,
		sources: [
			{ countrySlug: 'FR', name: `Dr Watt`, link: `https://www.enercoop.fr/formation-dr-watt` }
		]
	},
	{
		slug: `mesure-reduction-pollution-numerique`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [6.7128, 51.0338],
		radius: 2.0371,
		text: `Je mesure et réduis ma pollution numérique`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Carbonalyser`,
				link: `https://theshiftproject.org/carbonalyser-extension-navigateur/`
			},
			{
				countrySlug: 'FR',
				name: `ADEME`,
				link: `https://agirpourlatransition.ademe.fr/particuliers/bureau/bons-gestes/gardons-controle-pratiques-numeriques`
			}
		]
	},
	{
		slug: `scenario-consequences-rechauffement-entreprise`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [9.6831, 48.44],
		radius: 2.0201,
		text: `Je scénarise les conséquences d'un monde à +2°C avec mon entreprise`,
		sources: [{ countrySlug: 'FR', name: `Carbone4` }]
	},
	{
		slug: `travail-groupe-empreinte-carbone`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [10.6488, 43.1824],
		radius: 2.0501,
		text: `Je travaille en groupe sur mon empreinte carbone`,
		sources: [
			{ countrySlug: 'FR', name: `MyCO2`, link: `https://www.myco2.fr/` },
			{
				countrySlug: 'FR',
				name: `Conversations Carbones`,
				link: `https://carboneetsens.fr/particuliers-comment-passer-a-l-action-pour-la-planete/`
			}
		]
	},
	{
		slug: `defense-convention-citoyenne-climat`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [13.9138, 45.349],
		radius: 2.258,
		text: `Je défends l'étiquetage carbone et 148 autres propositions`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Convention Citoyenne pour le Climat`,
				link: `https://www.conventioncitoyennepourleclimat.fr`
			}
		]
	},
	{
		slug: `changement-metier-avenir`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.decarbonize,
		position: [18.1238, 45.5013],
		radius: 1.9592,
		text: `Je change de boulot pour un métier d'avenir`,
		sources: [
			{ countrySlug: 'FR', name: `Shiftyourjob`, link: `https://shiftyourjob.org/` },
			{
				countrySlug: 'FR',
				name: `OE`,
				link: `https://www.orientation-environnement.fr/ressources/`
			},
			{
				countrySlug: 'FR',
				name: `Réseau TEE`,
				link: `https://www.reseau-tee.net/espace-candidats-offres.php?annonceur=cpie`
			}
		]
	}
];

export default decarbonizeActions;
