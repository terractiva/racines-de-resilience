<script>
	import Section from '$lib/components/Section.svelte';
	import { quizPage } from '$lib/constants/pages';
</script>

<Section isCentered>
	<a class="button primary" href="{quizPage.path}/1" slot="content">Commencer le test</a>
</Section>
