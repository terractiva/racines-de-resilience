<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return handleLoadQuery(
			browser && page.query,
			{
				stepNb: parseInt(page.params.stepNb, 10)
			},
			(query) => ({ query, stepNb: parseInt(page.params.stepNb, 10) })
		);
	}
</script>

<script>
	import { browser } from '$app/env';
	import formGoto from '$lib/actions/formGoTo';
	import QuizStep from '$lib/components/QuizStep.svelte';
	import Section from '$lib/components/Section.svelte';
	import { quizPage } from '$lib/constants/pages';
	import quizSteps from '$lib/data/quiz-steps';
	import handleLoadQuery from '$lib/utils/handleLoadQuery';

	export let query;
	export let stepNb;

	/** @type {HTMLFormElement} */
	let nativeForm;

	$: action =
		currentStepNb === quizSteps.length
			? quizPage.subpages.result
			: `${quizPage.path}/${currentStepNb + 1}`;
	$: currentStepNb = computeCurrentStepNb(stepNb);
	$: queryString = query?.toString() ? `?${query.toString()}` : '';
	$: values = quizSteps.map((_, index) => query?.get(`${index + 1}`));

	function computeCurrentStepNb(stepNb) {
		if (stepNb < 1) {
			return 1;
		}
		if (stepNb > quizSteps.length) {
			return quizSteps.length;
		}

		return stepNb;
	}
</script>

<Section>
	<form
		use:formGoto={{ keepfocus: true, noscroll: true, replaceState: true }}
		bind:this={nativeForm}
		{action}
		method="GET"
		slot="content"
	>
		{#each quizSteps as step, index}
			<QuizStep
				bind:group={values[index]}
				{index}
				{step}
				isCurrentStep={currentStepNb === index + 1}
				on:click={() => {
					try {
						nativeForm.dispatchEvent(new window.SubmitEvent('submit', { cancelable: true }));
					} catch (error) {
						// Pour les vieux navigateurs
						const event = window.document.createEvent('SubmitEvent');

						event.initEvent('submit', false, true);
						nativeForm.dispatchEvent(event);
					}
				}}
			/>
		{/each}

		<div>
			<a
				sveltekit:noscroll
				class="button primary"
				class:is-hidden={currentStepNb === 1}
				href="{quizPage.path}/{currentStepNb - 1}{queryString}">Précédent</a
			>
			<a
				sveltekit:noscroll
				class="button"
				class:is-hidden={currentStepNb === quizSteps.length}
				href="{quizPage.path}/{currentStepNb + 1}{queryString}">Suivant</a
			>
			<a
				sveltekit:noscroll
				class="button"
				class:is-hidden={currentStepNb !== quizSteps.length}
				href="{quizPage.subpages.result}{queryString}">Voir le résultat</a
			>
		</div>
	</form>
</Section>

<style lang="scss">
	div {
		margin-top: 3rem;
		text-align: center;
	}
</style>
