<script>
	import handleDraggedLink from '$lib/actions/handleDraggedLink';
	import { actionsTreePage } from '$lib/constants/pages';
	import { treeFontSize } from '$lib/constants/settings';

	export let action;
	export let actionIndex;
	export let backgroundHeight;
	export let isDisabled;
	export let showActionId;
	export let subcategoryIndex;

	$: textClasses = action.categories.map((category) => `text-${category}`).join(' ');
</script>

<li
	style="font-size: {treeFontSize * backgroundHeight}px; left: {action.position[0]}%; top: {action
		.position[1]}%; width: {2 * action.radius}%;"
>
	<a
		sveltekit:noscroll
		use:handleDraggedLink={isDisabled}
		href="{actionsTreePage.path}/{action.slug}"
	>
		{#if showActionId}
			<p>{subcategoryIndex + 1} - {actionIndex + 1}</p>
		{/if}
		<p>{@html action.text}</p>

		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
				fill="currentColor"
			/></svg
		>

		<p class={textClasses}>
			<b>
				{#each action.sources as source}<span>{source.name}</span>{/each}
			</b>
		</p>
	</a>
</li>

<style lang="scss">
	li {
		border-radius: 50%;
		position: absolute;

		&::before {
			border-radius: 50%;
			content: '';
			display: block;
			padding-bottom: 100%;
		}

		& > a {
			align-items: center;
			border-radius: 50%;
			color: var(--font-color);
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			left: 0;
			overflow: hidden;
			padding: 15%; // Valeur approximative permettant de faire rentrer un carré dans un cercle
			position: absolute;
			top: 0;
			width: 100%;

			p {
				font-weight: 600;
				line-height: 1.2;
				margin: 0;
				text-align: center;

				span {
					&:not(:last-child) {
						&::after {
							content: ', ';
						}
					}
				}
			}

			svg {
				color: var(--color-grey);
				height: 10%;
				margin: 1% 0;
				width: 10%;
			}
		}
	}
</style>
