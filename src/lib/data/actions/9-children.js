import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const childrenActions = [
	{
		slug: `mise-en-place-education-respectueuse-enfant`,
		level: 1,
		categories: [Categories.Regenerate],
		subcategory: subcategories.children,
		position: [30.176, 86.5322],
		radius: 2.1565,
		text: `Je mets en place un climat éducatif respectueux de l'enfant`,
		sources: [
			{
				countrySlug: 'FR',
				name: `CANOPÉ`,
				link: `https://www.reseau-canope.fr/climatscolaire/agir/ressource/ressourceId/les-pratiques-corporelles-de-bien-etre.html`
			},
			{ countrySlug: 'FR', name: `OVEO`, link: `https://www.oveo.org/` }
		]
	},
	{
		slug: `pratique-education-paix-pedagogie-cooperatrice`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.children,
		position: [32.9851, 82.4123],
		radius: 2.3388,
		text: `Enseignant·e, parent, je pratique l'éducation à la paix et la pédagogie coopératrice`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Graines de Paix`,
				link: `https://www.grainesdepaix.org/fr/qui-sommes-nous/vision-mission-buts`
			},
			{ countrySlug: 'FR', name: `OCCE`, link: `http://www2.occe.coop/locce` }
		]
	},
	{
		slug: `pratique-education-environnement`,
		level: 2,
		categories: [Categories.Regenerate],
		subcategory: subcategories.children,
		position: [29.6311, 78.9851],
		radius: 2.2004,
		text: `Enseignant·e, parent, je fais de l'éducation à l'environnement`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Réseau École et Nature`,
				link: `http://reseauecoleetnature.org/taxonomy/term/1269`
			},
			{ countrySlug: 'FR', name: `FNE`, link: `https://www.fne.asso.fr/espace-education` },
			{
				countrySlug: 'FR',
				name: `EDUSCOL`,
				link: `https://eduscol.education.fr/1132/changement-climatique`
			}
		]
	},
	{
		slug: `soutien-formation-ecologie`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.children,
		position: [34.0825, 76.3745],
		radius: 2.4898,
		text: `J’œuvre pour un tronc commun sur l'écologie dans l'enseignement supérieur et dans la formation`,
		sources: [
			{
				countrySlug: 'FR',
				name: `The Shift Project`,
				link: `https://theshiftproject.org/article/100-appellent-former-etudiants-climat/`
			},
			{
				countrySlug: 'FR',
				name: `Pour un réveil écologique`,
				link: `https://pour-un-reveil-ecologique.org/`
			}
		]
	},
	{
		slug: `adoption-contact-enfants-nature`,
		level: 3,
		categories: [Categories.Regenerate],
		subcategory: subcategories.children,
		position: [33.6524, 70.2031],
		radius: 2.3439,
		text: `Enseignant·e, parent, j'amène les enfants au contact de la nature`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Les Décliques`,
				link: `https://lesdecliques.com/blog/trouver-forest-schools-france/`
			},
			{
				countrySlug: 'FR',
				name: `École Alternative`,
				link: `https://www.ecolealternative.com/carte-interactive-des-ecoles-alternatives/`
			},
			{ countrySlug: 'FR', name: `Classe découverte`, link: `https://www.classe-decouverte.info/` }
		]
	}
];

export default childrenActions;
