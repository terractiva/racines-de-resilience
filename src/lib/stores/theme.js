import { browser } from '$app/env';
import Themes from '$lib/constants/themes';
import { get, writable } from 'svelte/store';

let doSwitchTheme = false;
const store = writable({
	isDisabled: false,
	value: Themes.Light
});

if (browser) {
	// La classe `dark` est initialisée dans un script défini dans `app.html` pour être exécuté au
	// plus vite et éviter un effet de clignotement si on passe automatiquement en mode sombre.
	// Si le `localStorage` est vide, on initialise selon le thème défini par l'appareil, sinon on
	// initialise selon le dernier choix de l'utilisateur.
	store.set({
		isDisabled: false,
		value: document.body.classList.contains(Themes.Dark) ? Themes.Dark : Themes.Light
	});
	store.subscribe(({ value }) => {
		if (value === Themes.Dark) {
			document.body.classList.add(Themes.Dark);
		} else {
			document.body.classList.remove(Themes.Dark);
		}
	});
}

function toggle(doSave = true) {
	const currentTheme = get(store);
	const newValue = currentTheme.value === Themes.Dark ? Themes.Light : Themes.Dark;

	store.set({
		isDisabled: currentTheme.isDisabled,
		value: newValue
	});

	if (doSave) {
		localStorage.setItem('theme', newValue);
	}
}

export default {
	toggle,
	subscribe: store.subscribe,
	disable: (forcedValue) => {
		const currentTheme = get(store);
		let newValue = currentTheme.value;

		if (forcedValue !== currentTheme.value) {
			doSwitchTheme = true;
			newValue = forcedValue;
		}

		store.set({
			isDisabled: true,
			value: newValue
		});
	},
	enable: () => {
		const currentTheme = get(store);

		store.set({
			isDisabled: false,
			value: currentTheme.value
		});

		if (doSwitchTheme) {
			doSwitchTheme = false;
			toggle(false);
		}
	}
};
