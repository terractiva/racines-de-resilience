<script>
	import {
		aboutPage,
		actionsPage,
		communityPage,
		homePage,
		supportUsPage
	} from '$lib/constants/pages';
	import Themes from '$lib/constants/themes';
	import { themeContext } from '$lib/contexts';
	import { getContext } from 'svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	export let currentPath;
	export let isFullscreen;

	let isMenuOpen = false;
	const { currentTheme$ } = getContext(themeContext);
	const pages = [actionsPage, supportUsPage, communityPage, aboutPage];
</script>

<header class:has-background={!isFullscreen}>
	<a href={homePage.path}>
		<img
			alt="Racines de résilience"
			class:is-light={$currentTheme$ === Themes.Dark}
			src="/logo.png"
		/>
	</a>
</header>

<nav class="nav">
	<button
		class="button outline icon-only"
		type="button"
		on:click={() => (isMenuOpen = !isMenuOpen)}
	>
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zM2 12.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zM3 17.064a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2H3z"
				fill="currentColor"
			/></svg
		>
	</button>

	<div class:is-open={isMenuOpen}>
		<div class="tabs">
			{#each pages as page}
				<a class:active={page.path === currentPath} href={page.path}>{page.label}</a>
			{/each}
		</div>

		<ThemeSwitcher />
	</div>
</nav>

<style lang="scss">
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

				&.is-light {
					filter: brightness(100);
				}
			}
		}
	}

	nav {
		button {
			@include utilities.media-sm {
				padding: 0.5rem;
			}
			@include utilities.media-lg {
				display: none;
			}

			svg {
				display: block;
				height: 2rem;
				width: 2rem;
			}
		}

		& > div {
			display: flex;

			@include utilities.media-sm-md {
				flex-direction: column;
				align-items: center;
				position: absolute;
				right: 0;
				top: 100%;

				&:not(.is-open) {
					display: none;
				}

				.tabs {
					flex-direction: column;
					margin-top: 1rem;
					order: 1;

					a {
						text-align: initial;
					}
				}
			}

			.tabs {
				background: var(--bg-color);
				box-shadow: utilities.$shadow;
			}
		}
	}
</style>
