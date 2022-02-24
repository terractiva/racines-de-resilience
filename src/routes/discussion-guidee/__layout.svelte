<script>
	import SectionIntroduction from '$lib/components/SectionIntroduction.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import SectionBackground from '$lib/components/SectionBackground.svelte';
	import Backgrounds from '$lib/constants/backgrounds';
	import { guidedTalkPage } from '$lib/constants/pages';
	import Section from '$lib/components/Section.svelte';
	import currentPage from '$lib/stores/currentPage';
	import SectionFilters from '$lib/components/SectionFilters.svelte';

	currentPage.set(guidedTalkPage);
</script>

<PageMeta page={guidedTalkPage} />

<SectionBackground background={Backgrounds.Lines}>
	<SectionIntroduction>Discussion guidée</SectionIntroduction>
</SectionBackground>

<Section>
	<svelte:fragment slot="content">
		<p class="text-justify">
			Bienvenue à vous pour découvrir notre proposition de discussion guidée. Inspirée du temps
			d’échange post-projection offert au public des salles de cinéma, cet enregistrement audio en
			accès libre vous offre une animation à vivre depuis chez vous, et vous guide pour aborder les
			thématiques du film (énergie-climat-résilience) et découvrir des centaines de ressources pour
			passer à l’action.
		</p>

		<div class="text-center">
			<a
				sveltekit:noscroll
				class="button primary"
				href="{guidedTalkPage.path}/{guidedTalkPage.subPages.audio}">Lancer la discussion guidée</a
			>
		</div>
	</svelte:fragment>
</Section>

<SectionBackground background={Backgrounds.Marks}>
	<Section>
		<svelte:fragment slot="content">
			<p class="text-justify">
				Si vous préférez découvrir ou suivre une animation en salle, vous pouvez aussi regarder la
				captation vidéo du temps d’échange post-projection qui s’est déroulé au cinéma Espace
				Saint-Michel à Paris le 1 octobre 2021, en présence de <strong>Jean-Marc Jancovici</strong>,
				<strong>Emmanuel Cappellin</strong>
				et <strong>Anne-Marie Sangla</strong>, animé par <strong>Brianne Parquier</strong>.
			</p>

			<div class="text-center">
				<a
					sveltekit:noscroll
					class="button primary"
					href="{guidedTalkPage.path}/{guidedTalkPage.subPages.video}"
					>Lancer la vidéo de l'animation</a
				>
			</div>
		</svelte:fragment>
	</Section>
</SectionBackground>

<Section>
	<p class="outro text-center mb-0" slot="content">
		<b>Merci de votre écoute, et maintenant, en route !</b>
	</p>
</Section>

<SectionBackground background={Backgrounds.Strokes}>
	<SectionFilters />
</SectionBackground>

<slot />

<style lang="scss">
	.outro {
		font-size: 1.75em;
	}
</style>
