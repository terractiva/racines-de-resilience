import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const resilienceActions = [
	{
		slug: `achat-locale-solidaire`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [7.2618, 80.7054],
		radius: 1.6825,
		text: `J'achète mes produits localement et solidairement`,
		sources: [{ name: `AMAP`, link: `http://reseau-amap.org/` }]
	},
	{
		slug: `soutien-projet-plateforme-entraide-citoyenne`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [17.7998, 85.5179],
		radius: 2.0554,
		text: `Je reçois le soutien d'une plateforme d'entraide citoyenne pour mon projet`,
		sources: [{ name: `Colibris`, link: `https://colibris-lafabrique.org/` }]
	},
	{
		slug: `evaluation-resilience-alimentaire-territoire`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [14.3884, 79.5093],
		radius: 1.6979,
		text: `J'évalue la résilience alimentaire de mon territoire`,
		sources: [{ name: `CRATer`, link: `https://crater.resiliencealimentaire.org/` }]
	},
	{
		slug: `connexion-alternatives-locales`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [10.3132, 78.7191],
		radius: 2.1529,
		text: `Je me connecte aux alternatives autour de chez moi`,
		sources: [
			{ name: `Transiscope`, link: `https://transiscope.org/` },
			{ name: `Près de chez nous`, link: `https://presdecheznous.fr/` },
			{ name: `Communecter`, link: `https://www.communecter.org/` }
		]
	},
	{
		slug: `echange-services`,
		level: 1,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [13.5226, 84.9015],
		radius: 2.2527,
		text: `J'échange des services plutôt que de les consommer`,
		sources: [
			{ name: `Accorderies`, link: `https://www.accorderie.fr/` },
			{ name: `Systèmes d'Échange Local`, link: `https://annuairedessel.org/` }
		]
	},
	{
		slug: `aide-commune-transition`,
		level: 2,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [19.4741, 74.4474],
		radius: 2.0646,
		text: `J'aide ma commune à devenir une ville en transition`,
		sources: [{ name: `Mouvement de la Transition`, link: `https://www.entransition.fr/` }]
	},
	{
		slug: `engagement-projets-interet-collectif`,
		level: 2,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [18.1466, 79.7666],
		radius: 2.1769,
		text: `Je m'engage dans des projets au service de l'intérêt collectif`,
		sources: [
			{ name: `Tous Bénévoles`, link: `https://www.tousbenevoles.org//` },
			{ name: `Service Civique`, link: `https://www.service-civique.gouv.fr/jeunes-volontaires/` }
		]
	},
	{
		slug: `adhesion-mouvement-anticipation-effondrements-systemiques`,
		level: 2,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [15.3013, 73.823],
		radius: 2.2209,
		text: `Je rejoins un mouvement pour anticiper les effondrements systémiques`,
		sources: [{ name: `Adaptation Radicale`, link: `https://adaptationradicale.org/web/` }]
	},
	{
		slug: `questionnement-resilience-communale`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.resilience,
		position: [15.1499, 67.6313],
		radius: 1.939,
		text: `Élu·e, je me penche sur les questions de résilience communale`,
		sources: [{ name: `HCFDC`, link: `https://www.resilience-et-territoire.fr/` }]
	},
	{
		slug: `investissement-epargne-projets-locaux`,
		level: 2,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [19.667, 68.6284],
		radius: 2.0869,
		text: `J'investis mon épargne dans des projets locaux`,
		sources: [
			{ name: `Blue Bees`, link: `https://bluebees.fr/fr/` },
			{ name: `MiiMOSA`, link: `https://www.miimosa.com/fr?l=fr` },
			{ name: `Cigales`, link: `http://www.cigales.asso.fr/` }
		]
	},
	{
		slug: `creation-epicerie-solidaire-locale`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.resilience,
		position: [17.088, 62.7548],
		radius: 2.2361,
		text: `Je monte une épicerie solidaire ou un magasin de producteur·rice·s à deux pas`,
		sources: [
			{
				name: `Banque alimentaire`,
				link: `https://www.banquealimentaire.org/le-guide-pratique-des-epiceries-sociales-195`
			}
		]
	},
	{
		slug: `elaboration-plan-communal-sauvegarde`,
		level: 3,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [24.8193, 62.0452],
		radius: 1.8572,
		text: `Élu·e, j'élabore un Plan Communal de Sauvegarde`,
		sources: [
			{
				name: 'Resiliere',
				link: `https://resiliereorg.wordpress.com/risques-territoriaux-et-resilience/une-reserve-communale-de-securite-civile-pour-ma-commune%e2%80%af/`
			},
			{ name: 'SOS-Maires', link: `https://sosmaires.org/kits/` }
		]
	},
	{
		slug: `creation-reseaux-entraide-rural-urbain`,
		level: 3,
		categories: [Categories.Construct, Categories.Regenerate],
		subcategory: subcategories.resilience,
		position: [21.1475, 63.5663],
		radius: 2.0468,
		text: `Je tisse des réseaux d'entraide entre ruraux·ales et urbain·e·s`,
		sources: [{ name: `Humanum`, link: `https://entraide-humanum.org/` }]
	},
	{
		slug: `creation-regie-agricole-commune`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.resilience,
		position: [22.0385, 58.3131],
		radius: 1.9867,
		text: `Je participe à la création d'une régie agricole dans ma commune`,
		sources: [
			{ name: 'OPTIGEDE', link: `https://www.optigede.ademe.fr/fiche/creer-une-regie-agricole` }
		]
	}
];

export default resilienceActions;
