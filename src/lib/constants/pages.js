/**
 * `description` : description de la page pour le référencement
 * `forceTheme` : force le thème de la page
 * `isFullscreen` : si activé, cache le pied de page et fait passer le contenu de la page derrière l'en-tête
 * `label` : texte affiché dans le lien ou bouton qui redirige vers la page
 * `path` : chemin de la page, reflète les fichiers définis dans `src/routes`
 * `title` : titre de la page qu'on retrouve dans l'onglet du navigateur
 */

import Themes from '$lib/constants/themes';

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
	forceTheme: Themes.Light,
	isFullscreen: true,
	label: 'Arbre aux actions',
	path: '/arbre-actions',
	title: 'Arbre aux actions'
};

const communityPage = {
	description: 'TODO:',
	label: 'Communauté',
	path: '/communaute',
	title: 'Communauté'
};

// Pas de `title` exceptionnellement pour afficher seulement le nom du site
const homePage = {
	description: 'TODO:',
	label: 'Accueil',
	path: '/'
};

const notFoundPage = {
	label: 'Page introuvable',
	path: '/introuvable',
	title: 'Page introuvable'
};

const supportUsPage = {
	description: 'TODO:',
	label: 'Nous soutenir',
	path: '/nous-soutenir',
	title: 'Nous soutenir'
};

export {
	aboutPage,
	actionsPage,
	actionsTreePage,
	communityPage,
	homePage,
	notFoundPage,
	supportUsPage
};
