<script>
	/**
	 * Inspiré de https://stackoverflow.com/questions/59629947/how-do-i-load-an-external-js-library-in-svelte-sapper
	 * On a besoin de ce composant pour importer le build personnalisé de `Fabric.js` qui ne peut pas
	 * s'importer avec `import`
	 */

	import { browser } from '$app/env';
	import { onMount, createEventDispatcher } from 'svelte';
	export let globalObjectName;
	export let src;

	let nativeScript;
	const dispatch = createEventDispatcher();

	onMount(() => {
		// Gère le cas où le script est déjà chargé avant `onMount`
		if (window[globalObjectName]) {
			dispatchLoad();
		} else {
			nativeScript.addEventListener('load', dispatchLoad);
			nativeScript.addEventListener('error', dispatchError);

			return () => {
				nativeScript.removeEventListener('load', dispatchLoad);
				nativeScript.removeEventListener('error', dispatchError);
			};
		}
	});

	function dispatchError() {
		dispatch('failed');
	}

	function dispatchLoad() {
		dispatch('loaded');
	}
</script>

<svelte:head>
	<!-- Permet d'ajouter la balise au pré-rendu et de ne pas recharger le script -->
	{#if !browser || (browser && !window[globalObjectName])}
		<script bind:this={nativeScript} {src}></script>
	{/if}
</svelte:head>
