import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const agricultureActions = [
	{
		slug: `aide-agriculture-foncier`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [3.6717, 74.5782],
		radius: 2.1607,
		text: `J'aide de nouveaux·elles agriculteur·rice·s à accéder à du foncier`,
		sources: [{ countrySlug: 'FR', name: `Terre de Liens`, link: `https://terredeliens.org/` }]
	},
	{
		slug: `organisation-repas-durable-potes`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [8.0535, 60.3114],
		radius: 1.7444,
		text: `J'organise un repas durable entre potes`,
		sources: [
			{
				countrySlug: 'FR',
				name: `WARN`,
				link: `https://www.wearereadynow.net/unrepasdurableentrepotes/`
			}
		]
	},
	{
		slug: `participation-jardin-partage`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [6.3853, 64.6297],
		radius: 2.1119,
		text: `Je participe à un jardin partagé`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Partageons les Jardins`,
				link: `http://partageonslesjardins.fr/reseau-national/`
			},
			{
				countrySlug: 'FR',
				name: `Incroyables Comestibles`,
				link: `https://lesincroyablescomestibles.fr/`
			}
		]
	},
	{
		slug: `adoption-alimentation-responsable`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [2.2873, 63.2374],
		radius: 2.3195,
		text: `J'adopte une alimentation bio, locale, végé ou végan moins émettrice`,
		sources: [
			{ countrySlug: 'FR', name: `Bioconsomacteurs`, link: `https://www.bioconsomacteurs.org` },
			{ countrySlug: 'FR', name: `Bio et local`, link: `https://bioetlocal.org/` },
			{ countrySlug: 'FR', name: `Slow Food`, link: `https://slowfood.fr/` }
		]
	},
	{
		slug: `soutiens-bio-maraichage-proximite`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [10.2935, 68.6981],
		radius: 2.2251,
		text: `Je soutiens la bio pour tou·te·s, l'insertion et le maraîchage de proximité`,
		sources: [
			{ countrySlug: 'FR', name: `Réseau Cocagne`, link: `http://www.reseaucocagne.asso.fr/` }
		]
	},
	{
		slug: `conversion-cantine-bio`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [7.6127, 73.063],
		radius: 2.0642,
		text: `Je convertis ma cantine scolaire / d'entreprise / d'EHPAD au bio-local-végétal`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Agir`,
				link: `https://www.agirpourlenvironnement.org/campagne/du-bio-et-local-dans-les-cantines-c-est-possible/`
			},
			{
				countrySlug: 'FR',
				name: `CPIE`,
				link: `https://www.cpie.fr/uncpie/projet/176834/Transformer-pratiques-en-restauration-collective`
			}
		]
	},
	{
		slug: `formation-traction-animale`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [13.5927, 59.4222],
		radius: 1.9459,
		text: `Je me forme à la traction animale`,
		sources: [
			{ countrySlug: 'FR', name: `CERRTA`, link: `https://www.formationtractionanimale.com` },
			{
				countrySlug: 'FR',
				name: `Les Jardins d'Illas`,
				link: `https://www.agroecologie-tractionanimale.fr/`
			}
		]
	},
	{
		slug: `formation-agro-ecologie-jardin`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [10.3701, 62.9331],
		radius: 2.217,
		text: `Je me forme à l'agro-écologie pour mon jardin`,
		sources: [
			{ countrySlug: 'FR', name: `UPP`, link: `https://permaculture-upp.org/` },
			{
				countrySlug: 'FR',
				name: `Terre & Humanisme`,
				link: `https://formation.terre-humanisme.org/`
			},
			{
				countrySlug: 'FR',
				name: `Ferme du Bec Hellouin`,
				link: `https://www.fermedubec.com/se-former/se-former-ailleurs/`
			}
		]
	},
	{
		slug: `plantation-arbres`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [13.5015, 52.7762],
		radius: 1.9459,
		text: `Je plante des arbres, beaucoup d'arbres`,
		sources: [
			{ countrySlug: 'FR', name: `Reforest'Action`, link: `https://www.reforestaction.com/` },
			{ countrySlug: 'FR', name: `All4Trees`, link: `https://all4trees.org/` }
		]
	},
	{
		slug: `construction-politique-agricole-responsable`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [19.2621, 51.7506],
		radius: 2.1482,
		text: `Je co-construis une politique agricole européenne intégrant les enjeux énergie-climat`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Pour une autre PAC`,
				link: `https://pouruneautrepac.eu/qui-sommes-nous/`
			}
		]
	},
	{
		slug: `formation-agriculture-sequestration-carbone`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [9.9707, 55.6208],
		radius: 2.1939,
		text: `Agriculteur·rice, je me forme à la séquestration du carbone`,
		sources: [
			{
				countrySlug: 'FR',
				name: `ADEME`,
				link: `https://sites.google.com/view/experimentation-vivea/accueil?authuser=0`
			},
			{
				countrySlug: 'FR',
				name: `France Carbone Agri`,
				link: `https://www.france-carbon-agri.fr/possible-interessante-et-accompagnee-objectif-bas-carbonne/`
			}
		]
	},
	{
		slug: `formation-agro-ecologie-agriculture`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.agriculture,
		position: [16.3342, 55.8665],
		radius: 2.1939,
		text: `Agriculteur·rice, je me forme en agroécologie`,
		sources: [
			{ countrySlug: 'FR', name: `OSAE`, link: `https://osez-agroecologie.org/` },
			{ countrySlug: 'FR', name: `AFAC` },
			{ countrySlug: 'FR', name: `Solagro`, link: `https://solagro.org` },
			{ countrySlug: 'FR', name: `Agroforesterie`, link: `https://www.agroforesterie.fr/index.php` }
		]
	}
];

export default agricultureActions;
