import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const inequalitiesActions = [
	{
		slug: `militantisme-encadrement-loyers`,
		level: 2,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [84.9099, 52.6176],
		radius: 1.9033,
		text: `Je milite pour une politique du logement qui encadre les loyers`,
		sources: [
			{ countrySlug: 'FR', name: `DAL`, link: `https://www.droitaulogement.org/` },
			{
				countrySlug: 'FR',
				name: `UCLPD`,
				link: `http://www.hclpd.gouv.fr/IMG/pdf/encadrement_des_loyersweb2-2.pdf`
			}
		]
	},
	{
		slug: `engagement-actions-solidarite-climatique-internationale`,
		level: 1,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [86.6419, 47.2075],
		radius: 2.3444,
		text: `Je m'engage dans des actions de solidarité climatique internationale`,
		sources: [
			{ countrySlug: 'FR', name: `Geres`, link: `https://www.geres.eu/jagis/citoyen/` },
			{
				countrySlug: 'FR',
				name: `CARE`,
				link: `https://www.carefrance.org/care-actions/climat-changement-climatique/`
			},
			{ countrySlug: 'FR', name: `SOL`, link: `https://www.sol-asso.fr/passerelles-paysannes/` },
			{
				countrySlug: 'FR',
				name: `Genre en Action`,
				link: `https://www.genreenaction.net/Genre-developpement-durable-et-changements.html`
			}
		]
	},
	{
		slug: `refus-discriminations`,
		level: 1,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [90.8932, 46.7948],
		radius: 2.2205,
		text: `Je refuse les discriminations (origine, handicap, sexe, religion, orientation sexuelle...)`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Défenseur des droits`,
				link: `https://www.antidiscriminations.fr/?gclid=Cj0KCQjw3duCBhCAARIsAJeFyPVk8R95IIEqu683UkFtnUu78bvehaZBokvSnuIHKO8RFpvgkU3nq7kaAkB8EALw_wcB&gclsrc=aw.ds`
			}
		]
	},
	{
		slug: `interpellation-citoyennete-universelle`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [78.8429, 44.7566],
		radius: 2.0509,
		text: `J'interpelle mes élu·e·s pour une citoyenneté universelle`,
		sources: [
			{
				countrySlug: 'FR',
				name: `CCFD-Terre Solidaire`,
				link: `https://ccfd-terresolidaire.org/nos-combats/migrations/devenir-une-ville/`
			},
			{ countrySlug: 'FR', name: `OCU`, link: `https://o-c-u.org/` }
		]
	},
	{
		slug: `combat-ecart-revenus`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [80.6122, 49.9604],
		radius: 2.0509,
		text: `Je me bats pour limiter l'écart entre tous les revenus de 1 à 10`,
		sources: [
			{
				countrySlug: 'FR',
				name: `ESUS`,
				link: `https://www.economie.gouv.fr/entreprises/agrement-entreprise-solidaire-utilite-sociale-ess#`
			},
			{
				countrySlug: 'FR',
				name: `Oxfam`,
				link: `https://www.oxfamfrance.org/inegalites-et-justice-fiscale/cac-40-le-grand-ecart-salarial/`
			}
		]
	},
	{
		slug: `lutte-droit-femmes`,
		level: 2,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [82.8256, 45.1813],
		radius: 2.2605,
		text: `J'agis pour le climat à travers le droit des femmes et la lutte contre le patriarcat`,
		sources: [
			{ countrySlug: 'FR', name: `WECF France`, link: `https://wecf-france.org/` },
			{ countrySlug: 'FR', name: `Empow'Her`, link: `https://empow-her.com` }
		]
	},
	{
		slug: `defense-revenu-universel`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.inequalities,
		position: [75.6958, 43.9779],
		radius: 1.7669,
		text: `Je défends la création d'un revenu universel de base`,
		sources: [{ countrySlug: 'FR', name: `UBI`, link: `https://fr.eci-ubi.eu/` }]
	}
];

export default inequalitiesActions;
