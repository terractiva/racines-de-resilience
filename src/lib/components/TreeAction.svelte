<script>
	import { actionsTreePage } from '$lib/constants/pages';

	export let action;
	export let isDisabled;

	let isNextClickDisabled = false;

	$: categoryClasses = action.categories.join(' ');
</script>

<li style="left: {action.position[0]}%; top: {action.position[1]}%; width: {2 * action.radius}%;">
	<a
		href="{actionsTreePage.path}/{action.slug}"
		style="cursor: {isDisabled ? 'inherit' : ''};"
		on:mousedown={(event) => {
			event.preventDefault(); // Empêche le glisser-déposer de lien
		}}
		on:mouseup={() => {
			if (isDisabled) {
				isNextClickDisabled = true;
			}
		}}
		on:click={(event) => {
			if (isNextClickDisabled) {
				event.preventDefault();
				isNextClickDisabled = false;
			}
		}}
	>
		<div>
			<p class="text">{@html action.text}</p>

			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
					fill="currentColor"
				/></svg
			>

			<p class="sources {categoryClasses}">
				{#each action.sources as source}<span>{source.name}</span>{/each}
			</p>
		</div>
	</a>
</li>

<style lang="scss">
	li {
		position: absolute;

		&::before {
			content: '';
			display: block;
			padding-bottom: 100%;
		}

		& > a {
			align-items: center;
			border-radius: 50%;
			color: var(--font-color);
			display: flex;
			height: 100%;
			justify-content: center;
			left: 0;
			overflow: hidden;
			position: absolute;
			top: 0;
			width: 100%;

			div {
				align-items: center;
				display: flex;
				flex-direction: column;
				height: 70%; // Valeur approximative permettant de faire rentrer un carré dans un cercle
				justify-content: center;
				width: 70%;

				p {
					line-height: 1.2;
					margin: 0;
					text-align: center;

					&.text {
						font-weight: 600;
					}

					&.sources {
						font-family: utilities.$font-family-secondary;
						font-weight: bold;

						&.construct:not(.regenerate) {
							color: utilities.$color-construct;
						}

						&.construct.regenerate {
							color: utilities.$color-construct-regenerate;
						}

						&.regenerate:not(.construct):not(.intervene) {
							color: utilities.$color-regenerate;
						}

						&.regenerate.intervene {
							color: utilities.$color-regenerate-intervene;
						}

						&.intervene:not(.regenerate) {
							color: utilities.$color-intervene;
						}

						span {
							&:not(:last-child) {
								&::after {
									content: ', ';
								}
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
	}
</style>
