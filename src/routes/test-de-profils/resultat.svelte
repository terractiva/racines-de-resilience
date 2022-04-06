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
	import FiltersResults from '$lib/components/FiltersResults.svelte';
	import QuizResult from '$lib/components/QuizResult.svelte';
	import Section from '$lib/components/Section.svelte';
	import { quizPage } from '$lib/constants/pages';
	import Categories from '$lib/data/categories';
	import quizSteps from '$lib/data/quiz-steps';
	import getActionResults from '$lib/utils/getActionResults';
	import handleLoadQuery from '$lib/utils/handleLoadQuery';

	export let query;

	const categories = Object.values(Categories);
	let showOtherResults = false;

	$: backHrefSuffix = query?.toString() ? `?${query.toString()}` : '';
	$: results = computeResults(values);
	$: otherResults = categories.filter((category) => !results.includes(category));
	$: randomActions = getRandomActions(results);
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

	function getRandomActions(categories) {
		if (categories.length) {
			const actionResults = getActionResults({ category: categories });

			return [
				actionResults[Math.floor(Math.random() * actionResults.length)],
				actionResults[Math.floor(Math.random() * actionResults.length)]
			];
		}

		return [];
	}
</script>

{#if browser}
	{#if results.length}
		<Section isCentered>
			<svelte:fragment slot="title">
				{results.length === 1 ? 'Votre profil' : 'Vos profils'}
			</svelte:fragment>
			<svelte:fragment slot="content">
				{#each results as category}
					<QuizResult {category} />
				{/each}

				<hr class:is-hidden={!showOtherResults} />

				<button
					class="button"
					class:is-hidden={showOtherResults}
					type="button"
					on:click={() => (showOtherResults = true)}>Voir les autres profils</button
				>

				{#each otherResults as category}
					<QuizResult {category} isHidden={!showOtherResults} />
				{/each}

				<article>
					<FiltersResults
						results={randomActions}
						title="2 actions de l'arbre qui vous correspondent"
					/>
				</article>

				<div class="share">
					<label for="test"><b>Copiez ce lien pour partager votre résultat :</b></label>
					<input readonly id="test" type="text" value={window.location.href} />
					<CopyButton text={window.location.href} />
				</div>

				<a class="button primary" href="{quizPage.path}/1{backHrefSuffix}">Refaire le test</a>
			</svelte:fragment>
		</Section>
	{:else}
		<Section isCentered>
			<svelte:fragment slot="content">
				<p>Vous n'avez pas répondu à toutes les questions...</p>
				<a class="button primary" href="{quizPage.path}/1{backHrefSuffix}">Revenir au début</a>
			</svelte:fragment>
		</Section>
	{/if}
{:else}
	<Section isCentered>
		<svelte:fragment slot="content">
			<p class="mb-0">Chargement des résultats...</p>
		</svelte:fragment>
	</Section>
{/if}

<style lang="scss">
	hr {
		margin-bottom: 3rem;

		@include utilities.media-sm-md {
			width: 100%;
		}
		@include utilities.media-lg {
			width: 50%;
		}
	}

	article {
		margin: 8rem 0;

		@include utilities.media-lg {
			width: 75%;
		}
	}

	.share {
		align-items: center;
		display: flex;
		margin-bottom: 3rem;

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
