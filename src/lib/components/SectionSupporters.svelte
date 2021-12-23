<script>
	import Themes from '$lib/constants/themes';
	import theme from '$lib/stores/theme';
	import Section from './Section.svelte';
</script>

<Section>
	<svelte:fragment slot="title"
		><i>Racines de résilience</i> existe grâce à nos mécènes et partenaires... merci à eux !</svelte:fragment
	>

	<svelte:fragment slot="content">
		<ul class:is-dark={$theme.value === Themes.Dark}>
			<li>
				<a href="https://yggdrasil-mag.com/" rel="external" target="_blank">
					<img alt="Yggdrasil" src="/partenaires/yggdrasil.svg" />
				</a>
			</li>
			<li>
				<a href="https://www.nutergia.com/" rel="external" target="_blank">
					<img
						alt="Nutergia"
						src="/partenaires/nutergia.png"
						srcset="/partenaires/nutergia.png 1x, /partenaires/nutergia-2x.png 2x"
					/>
				</a>
			</li>
			<li>
				<a href="https://www.leanature.com/" rel="external" target="_blank">
					<img
						alt="Léa Nature"
						src="/partenaires/lea-nature.png"
						srcset="/partenaires/lea-nature.png 1x, /partenaires/lea-nature-2x.png 2x"
					/>
				</a>
			</li>
			<li>
				<a href="https://www.infomaniak.com/fr" rel="external" target="_blank">
					<img alt="Infomaniak" src="/partenaires/infomaniak.svg" />
				</a>
			</li>
			<li>
				<a href="https://www.onepercentfortheplanet.fr/" rel="external" target="_blank">
					<img
						alt="1% pour la planète"
						src="/partenaires/one-percent-for-the-planet.png"
						srcset="/partenaires/one-percent-for-the-planet.png 1x, /partenaires/one-percent-for-the-planet-2x.png 2x"
					/>
				</a>
			</li>
			<li>
				<a href="https://www.nourfilms.com/" rel="external" target="_blank">
					<img
						alt="Nour films"
						src="/partenaires/nour-films.png"
						srcset="/partenaires/nour-films.png 1x, /partenaires/nour-films-2x.png 2x"
					/>
				</a>
			</li>
			<li>
				<a class="text-dark" href="https://tseignette.github.io/" rel="external" target="_blank"
					>Thomas Seignette</a
				>
			</li>
			<li>
				<a href="http://pulp-films.fr/" rel="external" target="_blank">
					<img
						alt="Pulp Films"
						src="/partenaires/pulp-films.png"
						srcset="/partenaires/pulp-films.png 1x, /partenaires/pulp-films-2x.png 2x"
					/>
				</a>
			</li>
			<li>
				<img alt="Terractiva" src="/partenaires/terractiva.png" />
			</li>
		</ul>
	</svelte:fragment>
</Section>

<style lang="scss">
	ul {
		@include utilities.responsive-grid(repeat(3, 1fr), repeat(5, 1fr), repeat(7, 1fr), 1);

		list-style: none;
		margin: 0;
		padding: 0;

		&.is-dark li {
			& > a,
			& > img {
				background: var(--color-lightGrey);
			}
		}

		li {
			position: relative;

			&::before {
				content: '';
				display: block;
				padding-bottom: 50%;
			}

			& > a,
			& > img {
				align-items: center;
				border-radius: 0.4rem;
				bottom: 0;
				display: flex;
				font-weight: bold;
				height: 100%;
				justify-content: center;
				left: 0;
				padding: 1rem;
				position: absolute;
				text-align: center;
				width: 100%;
			}

			img {
				height: 100%;
				object-fit: contain;
				width: 100%;
			}
		}
	}
</style>
