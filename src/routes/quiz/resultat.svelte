<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return handleLoadQuery(browser && page.query, {}, (query) => ({ query }));
	}
</script>

<script>
	import { browser } from '$app/env';
	import QuizResult from '$lib/components/QuizResult.svelte';
	import Section from '$lib/components/Section.svelte';
	import { quizPage } from '$lib/constants/pages';
	import Categories from '$lib/data/categories';
	import quizSteps from '$lib/data/quiz-steps';
	import handleLoadQuery from '$lib/utils/handleLoadQuery';

	export let query;

	$: backHrefSuffix = query?.toString() ? `?${query.toString()}` : '';
	$: result = computeResult(values);
	$: values = query ? quizSteps.map((_, index) => query.get(`${index + 1}`)) : [];

	function computeResult(values) {
		const result = { max: 0, nbConstruct: 0, nbIntervene: 0, nbRegenerate: 0 };

		for (const value of values) {
			if (value === Categories.Construct) {
				result.nbConstruct++;
			} else if (value === Categories.Intervene) {
				result.nbIntervene++;
			} else if (value === Categories.Regenerate) {
				result.nbRegenerate++;
			}
		}

		result.max = Math.max(result.nbConstruct, result.nbIntervene, result.nbRegenerate);
		result.nbAnswers = result.nbConstruct + result.nbIntervene + result.nbRegenerate;

		return result;
	}
</script>

{#if browser}
	{#if result.nbAnswers !== quizSteps.length}
		<Section isCentered>
			<svelte:fragment slot="content">
				<p>Vous n'avez pas répondu à toutes les questions...</p>
				<a class="button" href="{quizPage.path}/1{backHrefSuffix}">Revenir au début</a>
			</svelte:fragment>
		</Section>
	{:else}
		<Section>
			<svelte:fragment slot="content">
				{#if result.nbConstruct === result.max}
					<QuizResult
						category={Categories.Construct}
						subtitle="ma priorité c'est de"
						subtitleLink="construire"
					>
						J'aime faire, inventer, tester. Je rêve d'une maison troglodyte dont les murs seraient
						comestibles, et d'un réseau de transport efficace zéro émission. Je vous ai déjà parlé
						de mon omelette sans œufs ?
					</QuizResult>
				{/if}

				{#if result.nbIntervene === result.max}
					<QuizResult
						category={Categories.Intervene}
						subtitle="mon moyen d'agir privilégié c’est"
						subtitleLink="m'interposer"
					>
						Je deviens tout rouge face au manque de respect pour les animaux, les femmes, les
						démuni·e·s, les enfants, les arbres et les promesses du gouvernement. Je ne vis que pour
						réveiller les endormi·e·s du ciboulot ! Bon, c'est vrai que je suis un peu à bout...
					</QuizResult>
				{/if}

				{#if result.nbRegenerate === result.max}
					<QuizResult
						category={Categories.Regenerate}
						subtitle="c'est le moment de se"
						subtitleLink="régénérer"
					>
						Innnnspirer, eeeexpirer... je suis le monde, le monde est moi, nous sommes relié·e·s. De
						la sagesse individuelle et collective naîtra la joie qui nous portera vers un avenir
						paisible et radieux. C'est la Terre qui me l'a dit...
					</QuizResult>
				{/if}
			</svelte:fragment>
		</Section>
	{/if}
{:else}
	<Section isCentered>
		<p class="mb-0" slot="content">Chargement des résultats...</p>
	</Section>
{/if}
