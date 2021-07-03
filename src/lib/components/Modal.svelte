<script>
	export let backLink;
	export let isOpen;
</script>

{#if isOpen}
	<a href={backLink}>
		<p>
			<span class="tag">Fermer</span>
		</p>
	</a>

	<div class="container">
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
		opacity: 1;
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
		display: flex;
		justify-content: center;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: auto;
	}
</style>
