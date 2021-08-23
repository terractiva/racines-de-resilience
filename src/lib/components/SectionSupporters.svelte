<script>
	import Section from './Section.svelte';
</script>

<Section>
	<svelte:fragment slot="title"
		>Racines de résilience existe grâce à nos mécènes et partenaires... merci à eux !</svelte:fragment
	>

	<svelte:fragment slot="content">
		<ul>
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
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
			background: var(--bg-secondary-color);

			&::before {
				content: '';
				display: block;
				padding-bottom: 100%;
			}
		}
	}
</style>
