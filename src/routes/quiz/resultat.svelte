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
	import CopyButton from '$lib/components/CopyButton.svelte';
	import QuizResult from '$lib/components/QuizResult.svelte';
	import Section from '$lib/components/Section.svelte';
	import { quizPage } from '$lib/constants/pages';
	import Categories from '$lib/data/categories';
	import quizSteps from '$lib/data/quiz-steps';
	import handleLoadQuery from '$lib/utils/handleLoadQuery';

	export let query;

	const categories = Object.values(Categories);
	let showOtherResults = false;

	$: backHrefSuffix = query?.toString() ? `?${query.toString()}` : '';
	$: results = computeResults(values);
	$: otherResults = categories.filter((category) => !results.includes(category));
	$: values = query ? quizSteps.map((_, index) => query.get(`${index + 1}`)) : [];

	function computeResults(values) {
		const totals = values.reduce(
			(result, category) => {
				if (categories.includes(category)) {
					const categoryTotal = result[category] ? result[category] + 1 : 1;

					return {
						...result,
						max: categoryTotal > result.max ? categoryTotal : result.max,
						total: result.total + 1,
						[category]: categoryTotal
					};
				}

				return result;
			},
			{ max: 0, total: 0 }
		);

		return totals.total === quizSteps.length
			? categories.reduce(
					(result, category) => (totals[category] === totals.max ? [...result, category] : result),
					[]
			  )
			: [];
	}
</script>

<Section>
	<svelte:fragment slot="content">
		{#if browser}
			{#if results.length}
				<h2 class="text-center">{results.length === 1 ? 'Votre profil' : 'Vos profils'} :</h2>

				{#each results as category}
					<QuizResult {category} />
				{/each}

				<div class="buttons">
					<button
						class="button"
						class:is-hidden={showOtherResults}
						type="button"
						on:click={() => (showOtherResults = true)}>Voir les autres profils</button
					>
					<a class="button primary" href="{quizPage.path}/1{backHrefSuffix}">Refaire le test</a>
				</div>

				{#each otherResults as category}
					<QuizResult {category} isHidden={!showOtherResults} />
				{/each}

				<div class="share">
					<label for="test"><b>Copiez ce lien pour partager votre résultat :</b></label>
					<input readonly id="test" type="text" value={window.location.href} />
					<CopyButton text={window.location.href} />
				</div>
			{:else}
				<p>Vous n'avez pas répondu à toutes les questions...</p>
				<a class="button primary" href="{quizPage.path}/1{backHrefSuffix}">Revenir au début</a>
			{/if}
		{:else}
			<p class="mb-0">Chargement des résultats...</p>
		{/if}
	</svelte:fragment>
</Section>

<style lang="scss">
	h2 {
		margin-top: 0;
	}

	:global(section) {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	.buttons {
		display: flex;
		margin-bottom: 3rem;

		button,
		a {
			&:first-child {
				margin-right: 1rem;
			}
			&:last-child {
				margin-left: 0;
			}
		}
	}

	.share {
		align-items: center;
		display: flex;

		@include utilities.media-sm {
			flex-wrap: wrap;
		}

		label {
			@include utilities.media-sm {
				width: 100%;
			}
			@include utilities.media-md-lg {
				margin-right: 1rem;
			}
		}

		input {
			flex: 1;
			margin-right: 1rem;
		}
	}
</style>
