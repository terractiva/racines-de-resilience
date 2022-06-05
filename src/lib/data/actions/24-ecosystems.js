import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const ecosystemsActions = [
	{
		slug: `contribution-etude-biodiversite`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [70.1024, 1.6267],
		radius: 1.9917,
		text: `Je contribue à l'étude participative de la biodiversité`,
		sources: [
			{
				countrySlug: 'FR',
				name: `OPEN`,
				link: `https://www.open-sciences-participatives.org/home/`
			},
			{ countrySlug: 'FR', name: `Planète Mer`, link: `https://www.planetemer.org/` }
		]
	},
	{
		slug: `interpellation-risques-OGM`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [72.0831, 6.3533],
		radius: 2.1042,
		text: `J'interpelle le gouvernement sur les risques de prolifération des OGM`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Agir`,
				link: `https://ogm-jenveuxpas.agirpourlenvironnement.org/`
			}
		]
	},
	{
		slug: `defense-biodiversite`,
		level: 1,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [66.26, 2.2935],
		radius: 2.116,
		text: `Je défends la biodiversité des espèces et des milieux`,
		sources: [
			{ countrySlug: 'FR', name: `OFB`, link: `https://ofb.gouv.fr/` },
			{ countrySlug: 'FR', name: `WWF`, link: `https://www.wwf.fr/agir-au-quotidien` },
			{ countrySlug: 'FR', name: `LPO`, link: `https://www.lpo.fr/` },
			{ countrySlug: 'FR', name: `Noé`, link: `https://noe.org/` },
			{ countrySlug: 'FR', name: `ASPAS`, link: `https://www.aspas-nature.org/` }
		]
	},
	{
		slug: `respect-lois-protection-vie-marine`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [64.9193, 9.618],
		radius: 2.2215,
		text: `Je fais respecter les lois qui protègent la vie marine`,
		sources: [
			{ countrySlug: 'FR', name: `Sea Shepherd`, link: `https://seashepherd.fr` },
			{ countrySlug: 'FR', name: `Surfrider`, link: `https://surfrider.eu/` }
		]
	},
	{
		slug: `depart-mission-conservation`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [68.6263, 7.3645],
		radius: 1.9809,
		text: `Je deviens écovolontaire et pars en mission de conservation`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Cybelle Planète`,
				link: `https://www.cybelle-planete.org/ecovolontariat/ecovolontariat/definition.html`
			}
		]
	},
	{
		slug: `opposition-elevage-industriel`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [68.4948, 12.8756],
		radius: 1.94,
		text: `Je m'oppose à l'élevage industriel et à ses pollutions`,
		sources: [
			{ countrySlug: 'FR', name: `L214`, link: `https://www.l214.com/antispecisme` },
			{ countrySlug: 'FR', name: `CIWF`, link: `https://www.ciwf.fr/` }
		]
	},
	{
		slug: `lutte-artificialisation-sols`,
		level: 3,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [58.9273, 2.7392],
		radius: 2.2716,
		text: `Élu·e, j'apprends comment lutter contre l'artificialisation des sols`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Cohésion territoires`,
				link: `https://www.cohesion-territoires.gouv.fr/lutte-contre-letalement-urbain-et-preservation-des-paysages-et-de-la-biodiversite`
			}
		]
	},
	{
		slug: `militantisme-interdiction-pesticides`,
		level: 2,
		categories: [Categories.Intervene],
		subcategory: subcategories.ecosystems,
		position: [62.703, 5.1856],
		radius: 2.2138,
		text: `Je milite pour l'interdiction des pesticides`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Nous voulons des Coquelicots`,
				link: `https://nousvoulonsdescoquelicots.org/`
			},
			{
				countrySlug: 'FR',
				name: `Générations Futures`,
				link: `https://www.generations-futures.fr/`
			}
		]
	}
];

export default ecosystemsActions;
