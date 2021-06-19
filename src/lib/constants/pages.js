/**
 * `description` : description de la page pour le référencement
 * `label` : text affiché dans le lien ou bouton qui redirige vers la page
 * `path` : chemin de la page, reflète les fichiers définis dans `src/routes`
 * `title` : titre de la page qu'on retrouve dans l'onglet du navigateur
 */

const aboutPage = {
	description: 'TODO:',
	label: 'À propos',
	path: '/a-propos',
	title: 'À propos'
};

const actionsPage = {
	description: 'TODO:',
	label: 'Actions',
	path: '/actions',
	title: 'Actions'
};

const actionsTreePage = {
	description: 'TODO:',
	label: 'Arbre aux actions',
	path: '/arbre-actions',
	title: 'Arbre aux actions'
};

// Pas de `title` exceptionnellement pour afficher seulement le nom du site
const homePage = {
	description: 'TODO:',
	label: 'Accueil',
	path: '/'
};

const supportUsPage = {
	description: 'TODO:',
	label: 'Nous soutenir',
	path: '/nous-soutenir',
	title: 'Nous soutenir'
};

export { aboutPage, actionsPage, actionsTreePage, homePage, supportUsPage };
