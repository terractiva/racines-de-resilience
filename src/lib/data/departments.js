const departments = [
	{
		name: 'Ain',
		number: '01'
	},
	{
		name: 'Aisne',
		number: '02'
	},
	{
		name: 'Allier',
		number: '03'
	},
	{
		name: 'Alpes-de-Haute-Provence',
		number: '04'
	},
	{
		name: 'Hautes-Alpes',
		number: '05'
	},
	{
		name: 'Alpes-Maritimes',
		number: '06'
	},
	{
		name: 'Ardèche',
		number: '07'
	},
	{
		name: 'Ardennes',
		number: '08'
	},
	{
		name: 'Ariège',
		number: '09'
	},
	{
		name: 'Aube',
		number: '10'
	},
	{
		name: 'Aude',
		number: '11'
	},
	{
		name: 'Aveyron',
		number: '12'
	},
	{
		name: 'Bouches-du-Rhône',
		number: '13'
	},
	{
		name: 'Calvados',
		number: '14'
	},
	{
		name: 'Cantal',
		number: '15'
	},
	{
		name: 'Charente',
		number: '16'
	},
	{
		name: 'Charente-Maritime',
		number: '17'
	},
	{
		name: 'Cher',
		number: '18'
	},
	{
		name: 'Corrèze',
		number: '19'
	},
	{
		name: 'Corse-du-Sud',
		number: '2A'
	},
	{
		name: 'Haute-Corse',
		number: '2B'
	},
	{
		name: "Côte-d'Or",
		number: '21'
	},
	{
		name: "Côtes d'Armor",
		number: '22'
	},
	{
		name: 'Creuse',
		number: '23'
	},
	{
		name: 'Dordogne',
		number: '24'
	},
	{
		name: 'Doubs',
		number: '25'
	},
	{
		name: 'Drôme',
		number: '26'
	},
	{
		name: 'Eure',
		number: '27'
	},
	{
		name: 'Eure-et-Loir',
		number: '28'
	},
	{
		name: 'Finistère',
		number: '29'
	},
	{
		name: 'Gard',
		number: '30'
	},
	{
		name: 'Haute-Garonne',
		number: '31'
	},
	{
		name: 'Gers',
		number: '32'
	},
	{
		name: 'Gironde',
		number: '33'
	},
	{
		name: 'Hérault',
		number: '34'
	},
	{
		name: 'Ille-et-Vilaine',
		number: '35'
	},
	{
		name: 'Indre',
		number: '36'
	},
	{
		name: 'Indre-et-Loire',
		number: '37'
	},
	{
		name: 'Isère',
		number: '38'
	},
	{
		name: 'Jura',
		number: '39'
	},
	{
		name: 'Landes',
		number: '40'
	},
	{
		name: 'Loir-et-Cher',
		number: '41'
	},
	{
		name: 'Loire',
		number: '42'
	},
	{
		name: 'Haute-Loire',
		number: '43'
	},
	{
		name: 'Loire-Atlantique',
		number: '44'
	},
	{
		name: 'Loiret',
		number: '45'
	},
	{
		name: 'Lot',
		number: '46'
	},
	{
		name: 'Lot-et-Garonne',
		number: '47'
	},
	{
		name: 'Lozère',
		number: '48'
	},
	{
		name: 'Maine-et-Loire',
		number: '49'
	},
	{
		name: 'Manche',
		number: '50'
	},
	{
		name: 'Marne',
		number: '51'
	},
	{
		name: 'Haute-Marne',
		number: '52'
	},
	{
		name: 'Mayenne',
		number: '53'
	},
	{
		name: 'Meurthe-et-Moselle',
		number: '54'
	},
	{
		name: 'Meuse',
		number: '55'
	},
	{
		name: 'Morbihan',
		number: '56'
	},
	{
		name: 'Moselle',
		number: '57'
	},
	{
		name: 'Nièvre',
		number: '58'
	},
	{
		name: 'Nord',
		number: '59'
	},
	{
		name: 'Oise',
		number: '60'
	},
	{
		name: 'Orne',
		number: '61'
	},
	{
		name: 'Pas-de-Calais',
		number: '62'
	},
	{
		name: 'Puy-de-Dôme',
		number: '63'
	},
	{
		name: 'Pyrénées-Atlantiques',
		number: '64'
	},
	{
		name: 'Hautes-Pyrénées',
		number: '65'
	},
	{
		name: 'Pyrénées-Orientales',
		number: '66'
	},
	{
		name: 'Bas-Rhin',
		number: '67'
	},
	{
		name: 'Haut-Rhin',
		number: '68'
	},
	{
		name: 'Rhône',
		number: '69'
	},
	{
		name: 'Haute-Saône',
		number: '70'
	},
	{
		name: 'Saône-et-Loire',
		number: '71'
	},
	{
		name: 'Sarthe',
		number: '72'
	},
	{
		name: 'Savoie',
		number: '73'
	},
	{
		name: 'Haute-Savoie',
		number: '74'
	},
	{
		name: 'Paris',
		number: '75'
	},
	{
		name: 'Seine-Maritime',
		number: '76'
	},
	{
		name: 'Seine-et-Marne',
		number: '77'
	},
	{
		name: 'Yvelines',
		number: '78'
	},
	{
		name: 'Deux-Sèvres',
		number: '79'
	},
	{
		name: 'Somme',
		number: '80'
	},
	{
		name: 'Tarn',
		number: '81'
	},
	{
		name: 'Tarn-et-Garonne',
		number: '82'
	},
	{
		name: 'Var',
		number: '83'
	},
	{
		name: 'Vaucluse',
		number: '84'
	},
	{
		name: 'Vendée',
		number: '85'
	},
	{
		name: 'Vienne',
		number: '86'
	},
	{
		name: 'Haute-Vienne',
		number: '87'
	},
	{
		name: 'Vosges',
		number: '88'
	},
	{
		name: 'Yonne',
		number: '89'
	},
	{
		name: 'Territoire-de-Belfort',
		number: '90'
	},
	{
		name: 'Essonne',
		number: '91'
	},
	{
		name: 'Hauts-de-Seine',
		number: '92'
	},
	{
		name: 'Seine-Saint-Denis',
		number: '93'
	},
	{
		name: 'Val-de-Marne',
		number: '94'
	},
	{
		name: "Val-D'Oise",
		number: '95'
	},
	{
		name: 'Guadeloupe',
		number: '971'
	},
	{
		name: 'Martinique',
		number: '972'
	},
	{
		name: 'Guyane',
		number: '973'
	},
	{
		name: 'La Réunion',
		number: '974'
	},
	{
		name: 'Saint-Pierre-et-Miquelon',
		number: '975'
	},
	{
		name: 'Mayotte',
		number: '976'
	},
	{
		name: 'Saint-Barthélemy',
		number: '977'
	},
	{
		name: 'Saint-Martin',
		number: '978'
	},
	{
		name: 'Terres australes et antarctiques françaises',
		number: '984'
	},
	{
		name: 'Wallis-et-Futuna',
		number: '986'
	},
	{
		name: 'Polynésie française',
		number: '987'
	},
	{
		name: 'Nouvelle-Calédonie',
		number: '988'
	},
	{
		name: 'Clipperton',
		number: '989'
	}
];

export default departments;
