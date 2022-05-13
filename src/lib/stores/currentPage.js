import { writable } from 'svelte/store';
import theme from './theme';

const currentPage = writable(null);

currentPage.subscribe((newCurrentPage) => {
	if (newCurrentPage) {
		newCurrentPage.forceTheme ? theme.disable(newCurrentPage.forceTheme) : theme.enable();
	}
});

export default currentPage;
