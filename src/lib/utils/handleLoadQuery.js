import { browser } from '$app/env';

/**
 * Permet :
 * 	- lors du pré-rendu : d'afficher des résultats (qui ne vont pas être en raccord avec les filtres)
 * 	- lors de l'affichage sur le client : de recharger les résultats (pour être raccord avec les filtres)
 * Avec du pré-rendu statique on ne peut pas faire autrement.
 *
 * @param {URLSearchParams} _ Passer `page.query`, Svelte n'appelle pas `load` si il n'y a pas de référence
 */
export default function handleLoadQuery(_, defaultProps, propsFn) {
	if (browser) {
		const query = new URL(window.location).searchParams; // La variable `page.query` initiale n'est pas à jour

		return {
			props: {
				...propsFn(query)
			}
		};
	}

	return {
		props: defaultProps
	};
}
