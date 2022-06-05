import Categories from '../categories.js';
import subcategories from '../subcategories.js';

const housingActions = [
	{
		slug: `formation-campus-bas-carbone`,
		level: 1,
		categories: [Categories.Construct],
		subcategory: subcategories.housing,
		position: [3.0966, 23.7295],
		radius: 2.0146,
		text: `Je me forme pour rendre mon campus universitaire bas-carbone`,
		sources: [{ countrySlug: 'FR', name: `REFEDD`, link: `https://le-reses.org/nos-formations/` }]
	},
	{
		slug: `investissement-habitat-collectif-eco`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.housing,
		position: [10.3644, 30.4804],
		radius: 2.0736,
		text: `J'investis dans un habitat collectif éco-conçu`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Habitat Participatif France`,
				link: `https://www.habitatparticipatif-france.fr/`
			}
		]
	},
	{
		slug: `installation-chauffage-renouvelable`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.housing,
		position: [9.4725, 25.6455],
		radius: 1.9965,
		text: `J'installe une source renouvelable de chauffage`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Écoconso info`,
				link: `https://www.ecoconso.be/fr/content/quel-systeme-de-chauffage-choisir`
			},
			{ countrySlug: 'FR', name: `Réseau FAIRE`, link: `https://www.faire.gouv.fr/` }
		]
	},
	{
		slug: `renovation-thermique-logement`,
		level: 2,
		categories: [Categories.Construct],
		subcategory: subcategories.housing,
		position: [5.8473, 26.9947],
		radius: 2.0164,
		text: `Je fais la rénovation thermique de mon logement`,
		sources: [
			{ countrySlug: 'FR', name: `Réseau FAIRE`, link: `https://www.faire.gouv.fr/` },
			{ countrySlug: 'FR', name: `Dorémi`, link: `https://www.renovation-doremi.com/` }
		]
	},
	{
		slug: `construction-alternatives-bas-carbone`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.housing,
		position: [16.9393, 31.403],
		radius: 2.4867,
		text: `Bâtisseur·se ou auto-constructeur·rice, je me forme aux alternatives bas-carbone`,
		sources: [
			{
				countrySlug: 'FR',
				name: `Fédération Éco-construction`,
				link: `https://www.federation-ecoconstruire.org`
			},
			{
				countrySlug: 'FR',
				name: `MOOC Bâtiment durable`,
				link: `https://www.mooc-batiment-durable.fr/`
			}
		]
	},
	{
		slug: `renovation-thermique-meilleures-pratiques`,
		level: 3,
		categories: [Categories.Construct],
		subcategory: subcategories.housing,
		position: [13.8704, 28.1849],
		radius: 2.0912,
		text: `Rénovateur·rice thermique, je me forme aux meilleures pratiques`,
		sources: [
			{ countrySlug: 'FR', name: `Réseau FAIRE`, link: `https://www.faire.gouv.fr/` },
			{ countrySlug: 'FR', name: `Dorémi`, link: `https://www.renovation-doremi.com/formation` }
		]
	}
];

export default housingActions;
