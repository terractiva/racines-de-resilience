<script>
	import { browser } from '$app/env';
	import Themes from '$lib/constants/themes';
	import { themeContext } from '$lib/contexts';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let currentPage;

	let doSwitchTheme = false;
	const currentTheme$ = writable('light');
	const isThemeDisabled$ = writable(false);

	setContext(themeContext, {
		currentTheme$,
		isThemeDisabled$,
		toggleTheme
	});

	if (browser) {
		// La classe `dark` est initialisée dans un script défini dans `app.html` pour être exécuté au
		// plus vite et éviter un effet de clignotement si on passe automatiquement en mode sombre.
		// Si le `localStorage` est vide, on initialise selon le thème défini par l'appareil, sinon on
		// initialise selon le dernier choix de l'utilisateur.
		currentTheme$.set(document.body.classList.contains(Themes.Dark) ? Themes.Dark : Themes.Light);
	}

	$: {
		if (currentPage) {
			currentPage.forceTheme ? disableTheme(currentPage.forceTheme) : enableTheme();
		}
	}

	function disableTheme(forcedTheme) {
		isThemeDisabled$.set(true);

		if ($currentTheme$ !== forcedTheme) {
			doSwitchTheme = true;
			toggleTheme(false);
		}
	}

	function enableTheme() {
		isThemeDisabled$.set(false);

		if (doSwitchTheme) {
			doSwitchTheme = false;
			toggleTheme(false);
		}
	}

	function toggleTheme(doSave = true) {
		if ($currentTheme$ === Themes.Dark) {
			currentTheme$.set(Themes.Light);
			document.body.classList.remove(Themes.Dark);
		} else {
			currentTheme$.set(Themes.Dark);
			document.body.classList.add(Themes.Dark);
		}
		if (doSave) {
			localStorage.setItem('theme', $currentTheme$);
		}
	}
</script>

<slot />
