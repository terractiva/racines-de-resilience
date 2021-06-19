<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				currentPath: page.path
			}
		};
	}
</script>

<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { actionsTreePage } from '$lib/constants/pages';

	export let currentPath;

	$: isFullscreen = currentPath === actionsTreePage.path;
</script>

<Header {currentPath} />
<main class:is-fullscreen={isFullscreen}>
	<slot />
</main>
{#if !isFullscreen}
	<Footer />
{/if}

<style global lang="scss">
	@use 'src/styles/theme.scss';

	html {
		height: 100%;
	}

	body {
		display: flex;
		flex-direction: column;
		margin: 0;
		height: 100%;
	}

	header,
	nav {
		height: utilities.$header-height;
		position: fixed;
		top: 0;
	}

	header {
		left: 0;
	}

	nav {
		right: 0;
	}

	main {
		flex: 1;

		&.is-fullscreen {
			height: 100%;
			overflow: hidden;
			position: relative;
		}
		&:not(.is-fullscreen) {
			margin-top: utilities.$header-height;
			padding: 4rem 0;
		}
	}
</style>
