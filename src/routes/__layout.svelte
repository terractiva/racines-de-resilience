<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import currentPage from '$lib/stores/currentPage';
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:window
	on:sveltekit:navigation-end={() => {
		_paq.push(['setCustomUrl', $page.path]);
		_paq.push(['setDocumentTitle', document.title]);
		_paq.push(['trackPageView']);
	}}
/>

<Header
	currentPath={$currentPage?.path}
	isFullScreen={$currentPage?.isFullScreen}
	hideMenu={$currentPage?.hideMenu}
/>

<main class:is-full-screen={$currentPage?.isFullScreen}>
	<slot />
</main>

<Footer />

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

					&.is-full-screen {
						height: 100%;
						overflow: hidden;
						position: relative;

						& + footer {
							display: none;
						}
					}
					&:not(.is-full-screen) {
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
