<script>
	import Section from '$lib/components/Section.svelte';
	import { quizPage } from '$lib/constants/pages';
</script>

<Section isCentered>
	<svelte:fragment slot="content">
		<p class="text-justify">
			Par quoi commencer ? Avec toutes ces actions, c'est difficile de savoir où donner de la tête !
			Alors, sans se la prendre, la tête, on vous a concocté un test qui ne se prend pas au sérieux
			pour savoir de quel côté regarder 😉
		</p>
		<a class="button primary" href="{quizPage.path}/1">Commencer le test</a>
	</svelte:fragment>
</Section>

<style lang="scss">
	p {
		@include utilities.media-md {
			max-width: 75%;
		}
		@include utilities.media-lg {
			max-width: 50%;
		}
	}
</style>
