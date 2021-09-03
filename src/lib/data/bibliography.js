import Categories from './categories';

const bibliography = [
	{
		text: `<i>Pétrole, la fête est finie !,</i> R. Heinberg`,
		categories: [Categories.Construct],
		position: [26.2764, 11.969],
		radius: 1.3502
	},
	{
		text: `<i>Faut-il sortir du nucléaire ?,</i> G. Woessner`,
		categories: [Categories.Construct],
		position: [23.2252, 10.5683],
		radius: 1.3502
	},
	{
		text: `MOOC <i>Énergie et climat,</i> Avenir Climatique`,
		categories: [Categories.Construct],
		position: [12.3523, 15.8474],
		radius: 1.3502
	},
	{
		text: `<i>Drawdown,</i> P. Hawken`,
		categories: [Categories.Construct],
		position: [10.0929, 18.6532],
		radius: 1.1603
	},
	{
		text: `<i>La Conception bioclimatique,</i> Terre Vivante`,
		categories: [Categories.Construct],
		position: [5.517, 19.635],
		radius: 1.4207
	},
	{
		text: `<i>Famille presque zéro déchet : Ze guide,</i> B. Moret, J. Pichon`,
		categories: [Categories.Construct],
		position: [1.1881, 39.3766],
		radius: 1.5314
	},
	{
		text: `Revues <i>Kaizen, We Demain</i>`,
		categories: [Categories.Construct],
		position: [1.2483, 45.5284],
		radius: 1.2574
	},
	{
		text: `<i>L'Âge des low-tech,</i> P. Bihouix`,
		categories: [Categories.Construct],
		position: [2.5505, 50.9207],
		radius: 1.2574
	},
	{
		text: `Appli Climat HD, Météo france`,
		categories: [Categories.Construct],
		position: [1.3236, 54.7145],
		radius: 1.1799
	},
	{
		text: `Site de recettes <i>Bon pour le climat</i>`,
		categories: [Categories.Construct],
		position: [1.8956, 58.9239],
		radius: 1.3015
	},
	{
		text: `MOOC <i>Permaculture,</i> Université des Colibris`,
		categories: [Categories.Construct],
		position: [1.178, 70.0463],
		radius: 1.534
	},
	{
		text: `<i>Manuel de transition,</i> R. Hopkins`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [1.4553, 79.491],
		radius: 1.298
	},
	{
		text: `Institut Momentum`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [4.2812, 81.32],
		radius: 1.2463
	},
	{
		text: `<i>Effondrement,</i> J. Diamond`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [15.8331, 90.9733],
		radius: 1.4314
	},
	{
		text: `<i>L'Effondrement des sociétés complexes,</i> J. Tainter`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [18.8641, 91.9841],
		radius: 1.5332
	},
	{
		text: `<i>Collapsus,</i> L. Testot, L. Aillet`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [22.2895, 94.3686],
		radius: 1.1797
	},
	{
		text: `<i>Les Limites à la croissance (30 ans après),</i> Rapport Meadows`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [27.1627, 84.1962],
		radius: 1.4807
	},
	{
		text: `Journaux en ligne : Reporterre, Goodplanet info`,
		categories: [Categories.Construct, Categories.Regenerate],
		position: [27.6931, 91.4289],
		radius: 1.4288
	},
	{
		text: `<i>Pédagogie de la coopération,</i> I. Peloux`,
		categories: [Categories.Regenerate],
		position: [34.7146, 89.6142],
		radius: 1.3578
	},
	{
		text: `<i>Saison brune,</i> P. Squarzoni`,
		categories: [Categories.Regenerate],
		position: [37.3666, 87.3251],
		radius: 1.2455
	},
	{
		text: `Film <i>Une vérité qui dérange</i>`,
		categories: [Categories.Regenerate],
		position: [38.8292, 92.5249],
		radius: 1.2031
	},
	{
		text: `Revues <i>Terrestres, Yggdrasil</i>`,
		categories: [Categories.Regenerate],
		position: [47.9454, 92.4541],
		radius: 1.2192
	},
	{
		text: `BD <i>Petit traité d'écologie sauvage,</i> A. Pignocchi`,
		categories: [Categories.Regenerate],
		position: [51.1803, 90.4894],
		radius: 1.4204
	},
	{
		text: `<i>Soon,</i> T. Cadène, B. Adam`,
		categories: [Categories.Regenerate],
		position: [52.7037, 86.826],
		radius: 1.1836
	},
	{
		text: `BD <i>Émotions mode d'emploi,</i> Art-Mella`,
		categories: [Categories.Regenerate],
		position: [58.5927, 92.1279],
		radius: 1.3335
	},
	{
		text: `<i>Manuel de survie en milieu naturel,</i> D. Manise`,
		categories: [Categories.Regenerate],
		position: [64.5439, 92.1515],
		radius: 1.3854
	},
	{
		text: `<i>Manières d'être vivant : enquêtes sur la vie à travers nous,</i> B. Morizot`,
		categories: [Categories.Regenerate],
		position: [67.5957, 93.4882],
		radius: 1.579
	},
	{
		text: `<i>Une autre fin du monde est possible,</i> P. Servigne, R. Stevens G. Chapelle`,
		categories: [Categories.Regenerate],
		position: [71.3939, 92.7141],
		radius: 1.6618
	},
	{
		text: `Film <i>L'autre connexion</i>`,
		categories: [Categories.Regenerate],
		position: [76.6941, 92.7141],
		radius: 1.1915
	},
	{
		text: `Podcasts <i>Présages, Sismique</i>`,
		categories: [Categories.Regenerate],
		position: [79.2231, 90.7112],
		radius: 1.3055
	},
	{
		text: `<i>Sagesses d'ailleurs pour vivre aujourd'hui,</i> F. Van Ingen`,
		categories: [Categories.Regenerate],
		position: [75.6282, 82.5003],
		radius: 1.5937
	},
	{
		text: `<i>L'Espérance en mouvement,</i> J. Macy`,
		categories: [Categories.Regenerate],
		position: [78.5222, 85.9015],
		radius: 1.4967
	},
	{
		text: `<i>Tu es donc je suis,</i> S. Kumar`,
		categories: [Categories.Regenerate],
		position: [81.8894, 88.074],
		radius: 1.265
	},
	{
		text: `<i>Les Mots sont des fenêtres,</i> M. B. Rosenberg`,
		categories: [Categories.Regenerate],
		position: [87.746, 83.4788],
		radius: 1.5791
	},
	{
		text: `<i>L'intelligence collective,</i> C. Marsan et al.`,
		categories: [Categories.Regenerate],
		position: [88.0471, 76.552],
		radius: 1.4855
	},
	{
		text: `<i>Reclaim,</i> É. Hache`,
		categories: [Categories.Regenerate],
		position: [91.544, 84.0116],
		radius: 1.1392
	},
	{
		text: `Podcast <i>La Voix des oasis</i>`,
		categories: [Categories.Regenerate, Categories.Intervene],
		position: [90.7838, 73.7153],
		radius: 1.2327
	},
	{
		text: `<i>Gouverner la décroissance,</i> A. Sinaï, M.Szuba`,
		categories: [Categories.Regenerate, Categories.Intervene],
		position: [93.5413, 74.9713],
		radius: 1.4422
	},
	{
		text: `<i>Over-development,</i> overpopulation, overshoot, Population Media Center`,
		categories: [Categories.Regenerate, Categories.Intervene],
		position: [87.9193, 65.3467],
		radius: 1.8299
	},
	{
		text: `<i>Films Human, Woman</i>`,
		categories: [Categories.Regenerate, Categories.Intervene],
		position: [92.045, 67.2308],
		radius: 1.1305
	},
	{
		text: `Article <i>Temps de travail et climat,</i> La Relève et la Peste`,
		categories: [Categories.Regenerate, Categories.Intervene],
		position: [93.9291, 57.171],
		radius: 1.5311
	},
	{
		text: `<i>Une écologie décoloniale,</i> M. Ferdinand`,
		categories: [Categories.Regenerate, Categories.Intervene],
		position: [95.6088, 49.4816],
		radius: 1.4949
	},
	{
		text: `<i>Manifeste pour un plafonnement des revenus et des patrimoines,</i> Fondation Copernic`,
		categories: [Categories.Intervene],
		position: [95.1775, 43.6242],
		radius: 1.826
	},
	{
		text: `<i>Le Capital au XXIe siècle,</i> T. Piketty`,
		categories: [Categories.Intervene],
		position: [95.972, 39.2371],
		radius: 1.3642
	},
	{
		text: `<i>Pour une taxe carbone,</i> K. Schubert`,
		categories: [Categories.Intervene],
		position: [93.407, 36.3365],
		radius: 1.4282
	},
	{
		text: `Magazines, journaux : <i>Socialter, L'Âge de faire, Silence !</i>`,
		categories: [Categories.Intervene],
		position: [93.6113, 28.8239],
		radius: 1.4755
	},
	{
		text: `Vidéos <i>Partager c'est sympa, Le Biais Vert, Le Réveilleur</i>`,
		categories: [Categories.Intervene],
		position: [95.4613, 24.3887],
		radius: 1.4755
	},
	{
		text: `Websérie <i>[Next]</i>`,
		categories: [Categories.Intervene],
		position: [94.0198, 17.9209],
		radius: 1.0606
	},
	{
		text: `<i>La Désobéissance civile,</i> H. D. Thoreau`,
		categories: [Categories.Intervene],
		position: [92.2268, 13.0924],
		radius: 1.5432
	},
	{
		text: `<i>Petit manuel de résistance contemporaine,</i> C. Dion`,
		categories: [Categories.Intervene],
		position: [87.5375, 12.3153],
		radius: 1.4876
	},
	{
		text: `<i>La 6e extinction,</i> E. Kolbert`,
		categories: [Categories.Intervene],
		position: [80.0824, 5.4848],
		radius: 1.3384
	},
	{
		text: `L'Observatoire de l'artificialisation`,
		categories: [Categories.Intervene],
		position: [76.4616, 6.0668],
		radius: 1.4176
	},
	{
		text: `Carte interactive Half-Earth`,
		categories: [Categories.Intervene],
		position: [63.2768, -0.2217],
		radius: 1.2509
	},
	{
		text: `Film <i>Il était une forêt</i>`,
		categories: [Categories.Intervene],
		position: [56.1542, 3.6494],
		radius: 1.1299
	}
];

export default bibliography;
