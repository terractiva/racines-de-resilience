<script>
	import { gitHubLink } from '$lib/constants/settings';
	import Section from './Section.svelte';
	import SectionContentTwoThirds from './SectionContentTwoThirds.svelte';
</script>

<Section>
	<svelte:fragment slot="title"
		>La démarche low-tech de <i>Racines de résilience</i></svelte:fragment
	>

	<svelte:fragment slot="content">
		<SectionContentTwoThirds>
			<p class="text-justify w-100 mb-0">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, lobortis vitae
				mauris ut, volutpat lobortis risus. Ut commodo euismod mauris, lacinia accumsan purus
				iaculis et. Donec leo nisl, maximus sed sapien nec, euismod facilisis arcu. Nullam semper
				suscipit condimentum.
			</p>
			<a class="button primary" href={gitHubLink} rel="external" target="_blank">En savoir plus</a>
		</SectionContentTwoThirds>
	</svelte:fragment>
</Section>
