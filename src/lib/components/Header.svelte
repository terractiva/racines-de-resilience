<script>
	import { aboutPage, actionsPage, homePage, supportUsPage } from '$lib/constants/pages';
	import Themes from '$lib/constants/themes';
	import { themeContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	export let currentPath;

	const { currentTheme$ } = getContext(themeContext);
	const pages = [actionsPage, supportUsPage, aboutPage];
</script>

<header>
	<a href={homePage.path}>
		<img
			alt="Racines de résilience"
			class:light-logo={$currentTheme$ === Themes.Dark}
			src="/logo.png"
		/>
	</a>
</header>

<nav class="nav">
	<div class="tabs">
		{#each pages as page}
			<a class:active={page.path === currentPath} href={page.path}>{page.label}</a>
		{/each}
	</div>

	<ThemeSwitcher />
</nav>

<style lang="scss">
	header,
	nav {
		z-index: utilities.$z-index-header;
	}

	header {
		a {
			display: block;
			height: 100%;
			padding: 0.5rem 1rem;

			img {
				height: 100%;
				width: auto;

				&.light-logo {
					filter: brightness(100);
				}
			}
		}
	}

	nav {
		div {
			background: var(--bg-color);
			box-shadow: utilities.$shadow;
		}
	}
</style>
