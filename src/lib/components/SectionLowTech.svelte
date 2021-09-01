<script>
	import { gitHubLink } from '$lib/constants/settings';
	import Section from './Section.svelte';
	import SectionContentTwoThirds from './SectionContentTwoThirds.svelte';
</script>

<Section>
	<svelte:fragment slot="title"><slot name="title" /></svelte:fragment>

	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<a class="button primary" href={gitHubLink} rel="external" target="_blank">En savoir plus</a>
			<!-- <p class="text-justify w-100 mb-0">TODO:</p> -->
			<slot name="right-content" />
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>

<style lang="scss">
	a {
		justify-self: start;
	}
</style>
