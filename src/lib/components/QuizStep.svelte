<script>
	import Categories from '$lib/data/categories';
	import quizSteps from '$lib/data/quiz-steps';

	export let group;
	export let index;
	export let isCurrentStep;
	export let step;

	const OPTION_TO_CATEGORY = [Categories.Construct, Categories.Regenerate, Categories.Intervene];

	$: options = shuffle(
		step.options.map((option, optionIndex) => ({
			label: option,
			category: OPTION_TO_CATEGORY[optionIndex]
		}))
	);

	// Merci https://javascript.info/task/shuffle
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;
	}
</script>

<fieldset class:is-current-step={isCurrentStep}>
	<legend
		><strong>
			{index + 1} / {quizSteps.length} • <span class="text-primary">{step.title}</span>
		</strong></legend
	>

	{#each options as option}
		<label>
			<input bind:group name={index + 1} type="radio" value={option.category} on:click />
			{option.label}
		</label>
	{/each}
</fieldset>

<style lang="scss">
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	fieldset {
		animation: fadeIn;
		animation-duration: 1s;

		&:not(.is-current-step) {
			display: none;
		}

		@include utilities.media-sm-md {
			padding-bottom: 3rem;
			padding-top: 3rem;
		}
		@include utilities.media-lg {
			padding: 5rem 7rem;
		}

		label {
			align-items: center;
			cursor: pointer;
			display: flex;

			&:not(:last-child) {
				margin-bottom: 3rem;
			}

			input {
				cursor: pointer;
				flex-shrink: 0;
				margin: 0;
				margin-right: 1rem;
			}
		}
	}
</style>
