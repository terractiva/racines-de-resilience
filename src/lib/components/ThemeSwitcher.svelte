<script>
	import { browser } from '$app/env';

	let isDarkModeEnabled = false;

	if (browser) {
		// La classe `dark` est initialisée dans un script défini dans `app.html` pour être exécuté au
		// plus vite et éviter un effet de clignotement si on passe automatiquement en mode sombre.
		// Si le `localStorage` est vide, on initialise selon le thème défini par l'appareil, sinon on
		// initialise selon le dernier choix de l'utilisateur.
		isDarkModeEnabled = document.body.classList.contains('dark');
	}

	function toggleDarkMode() {
		isDarkModeEnabled = !isDarkModeEnabled;

		if (isDarkModeEnabled) {
			document.body.classList.add('dark');
			localStorage.setItem('color-scheme', 'dark');
		} else {
			document.body.classList.remove('dark');
			localStorage.setItem('color-scheme', 'light');
		}
	}
</script>

<button
	class="button icon-only"
	class:dark={!isDarkModeEnabled}
	type="button"
	on:click={toggleDarkMode}>{isDarkModeEnabled ? '☀️' : '🌙'}</button
>

<style lang="scss">
	button {
		border-radius: 50%;
	}
</style>
