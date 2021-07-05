<script>
	import { aboutPage, actionsPage, homePage, supportUsPage } from '$lib/constants/pages';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	export let currentPath;
	export let isFullscreen;

	const pages = [actionsPage, supportUsPage, aboutPage];
</script>

<header class:has-background={!isFullscreen}>
	<a href={homePage.path}>
		<img alt="Racines de résilience" src="/logo.png" />
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
		&.has-background {
			background: var(--bg-color);
		}

		a {
			display: block;
			height: 100%;
			padding: 0.5rem 1rem;

			img {
				height: 100%;
				width: auto;
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
