<script>
	import Section from './Section.svelte';
</script>

<Section>
	<svelte:fragment slot="title"
		>Racines de résilience existe grâce à nos mécènes et partenaires... merci à eux !</svelte:fragment
	>

	<svelte:fragment slot="content">
		<ul>
			<li>
				<a href="https://yggdrasil-mag.com/" rel="external" target="_blank">Yggdrasil</a>
			</li>
			<li>
				<a href="https://www.leanature.com/" rel="external" target="_blank">Léa Nature</a>
			</li>
			<li>
				<a href="https://www.infomaniak.com/fr" rel="external" target="_blank">Infomaniak</a>
			</li>
			<li>
				<a href="https://tseignette.github.io/" rel="external" target="_blank">Thomas Seignette</a>
			</li>
			<li>
				<a href="https://www.nourfilms.com/" rel="external" target="_blank">Nour Films</a>
			</li>
			<li>
				<a href="https://pulp-films.fr/" rel="external" target="_blank">Pulp Films</a>
			</li>
		</ul>
	</svelte:fragment>
</Section>

<style lang="scss">
	ul {
		@include utilities.responsive-grid(repeat(4, 1fr), repeat(6, 1fr), repeat(8, 1fr));

		list-style: none;
		margin: 0;
		padding: 0;

		li {
			position: relative;

			&::before {
				content: '';
				display: block;
				padding-bottom: 100%;
			}

			a {
				align-items: center;
				background: var(--bg-secondary-color);
				border-radius: 0.4rem;
				bottom: 0;
				display: flex;
				height: 100%;
				justify-content: center;
				left: 0;
				position: absolute;
				text-align: center;
				width: 100%;
			}
		}
	}
</style>
