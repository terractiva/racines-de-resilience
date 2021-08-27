<script>
	export let backLink;
	export let hasPadding = true;
	export let isOpen;
</script>

{#if isOpen}
	<a href={backLink}>
		<p>
			<span class="tag">Fermer</span>
		</p>
	</a>

	<div class="card" class:has-padding={hasPadding}>
		<slot />
	</div>
{/if}

<style lang="scss">
	a,
	div {
		position: fixed;
		z-index: utilities.$z-index-modal;
	}

	a {
		display: block;
		height: 100%;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;

		&::before {
			background: var(--bg-color);
			content: '';
			display: block;
			height: 100%;
			opacity: 0.5;
			width: 100%;
		}

		p {
			background: var(--bg-color);
			margin-bottom: 0;
			position: absolute;
			right: 1rem;
			top: 1rem;

			span {
				border-color: var(--font-color);
				color: var(--font-color);
			}
		}
	}

	div {
		max-width: var(--grid-maxWidth);

		&:not(.has-padding) {
			padding: 0;
		}

		@include utilities.media-sm-md {
			left: calc(var(--grid-gutter) / 2);
			max-height: 80%;
			overflow: scroll;
			right: calc(var(--grid-gutter) / 2);
			top: 50%;
			transform: translateY(-50%);
		}
		@include utilities.media-lg {
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
