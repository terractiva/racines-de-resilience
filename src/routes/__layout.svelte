<script>
	import { dev } from '$app/env';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import ThemeContext from '$lib/components/ThemeContext.svelte';
	import { layoutContext } from '$lib/contexts';
	import { setContext } from 'svelte';

	let currentPage;

	setContext(layoutContext, { setCurrentPage });

	function setCurrentPage(newCurrentPage) {
		currentPage = newCurrentPage;
	}
</script>

<svelte:head>
	{#if !dev}
		<script
			data-host="https://microanalytics.io"
			data-dnt="false"
			src="https://microanalytics.io/js/script.js"
			id="ZwSg9rf6GA"
			async
			defer></script>
	{/if}
</svelte:head>

<ThemeContext {currentPage}>
	<Header currentPath={currentPage?.path} isFullscreen={currentPage?.isFullscreen} />

	<main class:is-fullscreen={currentPage?.isFullscreen}>
		<slot />
	</main>

	<Footer />
</ThemeContext>

<style global lang="scss">
	@use 'src/styles/theme.scss';

	html {
		height: 100%;

		body {
			display: flex;
			flex-direction: column;
			margin: 0;
			height: 100%;

			& > {
				header,
				nav.nav {
					height: utilities.$header-height;
					position: fixed;
					top: 0;
					z-index: utilities.$z-index-header;

					@include utilities.media-sm {
						height: utilities.$header-height-sm;
						min-height: utilities.$header-height-sm;
					}
				}

				header {
					left: 0;
				}

				nav.nav {
					right: 0;
				}

				main {
					flex: 1;

					&.is-fullscreen {
						height: 100%;
						overflow: hidden;
						position: relative;

						& + footer {
							display: none;
						}
					}
					&:not(.is-fullscreen) {
						margin-top: utilities.$header-height;

						@include utilities.media-sm {
							margin-top: utilities.$header-height-sm;
						}
					}
				}
			}
		}
	}
</style>
