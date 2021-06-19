<script>
	import { aboutPage, actionsPage, homePage, supportUsPage } from '$lib/constants/pages';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	export let currentPath;

	const pages = [actionsPage, supportUsPage, aboutPage];
</script>

<header>
	<a href={homePage.path}>
		<img alt="Racines de résilience" src="logo.png" />
	</a>
</header>

<nav class="nav tabs">
	{#each pages as page}
		<a class:active={page.path === currentPath} href={page.path}>{page.label}</a>
	{/each}

	<ThemeSwitcher />
</nav>

<style lang="scss">
	header,
	nav {
		background: var(--bg-color);
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
			}
		}
	}

	:global(.dark) {
		img {
			filter: brightness(100);
		}
	}
</style>
