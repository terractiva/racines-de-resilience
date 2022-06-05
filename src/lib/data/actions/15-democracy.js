import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const democracyActions = [
	{
		slug: `participation-atelier-democratie`,
		level: 1,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.democracy,
		position: [86.3897, 71.1482],
		radius: 1.7985,
		text: `Je participe à un Atelier Démocratie`,
		sources: [{ countrySlug: 'FR', name: `Pacte Civique`, link: `https://pactecivique.fr/` }]
	},
	{
		slug: `activation-citoyennete-eleves`,
		level: 2,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.democracy,
		position: [83.1942, 71.9448],
		radius: 1.828,
		text: `Enseignant·e, j'active la citoyenneté de mes élèves`,
		sources: [{ countrySlug: 'FR', name: `ÉVEIL`, link: `https://www.eveil.asso.fr/` }]
	},
	{
		slug: `lancement-convention-citoyenne-regionale`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.democracy,
		position: [74.994, 69.4039],
		radius: 2.2304,
		text: `Je lance une convention citoyenne pour le climat dans ma région`,
		sources: [
			{ countrySlug: 'FR', name: `Démocratie Ouverte`, link: `https://www.democratieouverte.org/` },
			{ countrySlug: 'FR', name: `CCC AURA`, link: `https://conventioncitoyenne-aura.fr/` }
		]
	},
	{
		slug: `organisation-assemblee-populaire-locale`,
		level: 2,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.democracy,
		position: [79.0204, 71.4528],
		radius: 2.1351,
		text: `J'organise une assemblée populaire locale pour le climat et la justice sociale`,
		sources: [
			{ countrySlug: 'FR', name: `Extinction Rebellion`, link: `https://extinctionrebellion.fr/` }
		]
	},
	{
		slug: `adhesion-liste-municipale-participative`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.democracy,
		position: [71.6877, 66.5173],
		radius: 1.9703,
		text: `Je rejoins une liste municipale participative`,
		sources: [
			{ countrySlug: 'FR', name: `36000 Communes`, link: `https://36000communes.org/` },
			{ countrySlug: 'FR', name: `Commonspolis`, link: `https://commonspolis.org/en/` }
		]
	},
	{
		slug: `ecriture-nouvelle-constitution`,
		level: 3,
		categories: [Categories.Regenerate, Categories.Intervene],
		subcategory: subcategories.democracy,
		position: [69.4097, 62.589],
		radius: 1.943,
		text: `Je coécris une nouvelle constitution`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Les Citoyens Constituants`,
				link: `https://www.lescitoyensconstituants.org/`
			}
		]
	}
];

export default democracyActions;
