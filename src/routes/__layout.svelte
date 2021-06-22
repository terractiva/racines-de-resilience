<script>
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

<ThemeContext {currentPage}>
	<Header currentPath={currentPage?.path} />

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

						& + footer {
							display: none;
						}
					}
					&:not(.is-fullscreen) {
						margin-top: utilities.$header-height;
						padding: 4rem 0;
					}
				}
			}
		}
	}
</style>
