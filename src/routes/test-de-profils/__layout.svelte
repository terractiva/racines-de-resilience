<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { quizPage } from '$lib/constants/pages';
	import currentPage from '$lib/stores/currentPage';

	currentPage.set(quizPage);
</script>

<PageMeta page={quizPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>Le dernier test<br /> avant la fin du monde</SectionIntroduction>
</SectionBackground>

<slot />
