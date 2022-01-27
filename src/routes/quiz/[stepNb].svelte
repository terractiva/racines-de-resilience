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
		currentStepNb === quizSteps.length ? `resultat` : `${quizPage.path}/${currentStepNb + 1}`;
	$: currentStepNb = computeCurrentStepNb(stepNb);
	$: previousHrefSuffix = query?.toString() ? `?${query.toString()}` : '';
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
					nativeForm.dispatchEvent(new Event('submit', { cancelable: true }));
				}}
			/>
		{/each}

		{#if currentStepNb > 1}
			<div>
				<a
					sveltekit:noscroll
					class="button primary"
					href="{quizPage.path}/{currentStepNb - 1}{previousHrefSuffix}">Précédent</a
				>
			</div>
		{/if}
	</form>
</Section>

<style lang="scss">
	div {
		margin-top: 3rem;
		text-align: center;
	}
</style>
