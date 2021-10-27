<script>
	let isDetailsClick = false;
	let isOpen = false;
	let nativeDetails;
</script>

<svelte:body
	on:click={() => {
		if (isDetailsClick) {
			isDetailsClick = false;
		} else {
			isOpen = false;
		}
	}} />

<details
	bind:open={isOpen}
	bind:this={nativeDetails}
	class="dropdown"
	on:click={() => (isDetailsClick = true)}
>
	<summary class="button"><slot name="summary" /></summary>

	<div class="card right">
		<slot name="card" />
	</div>
</details>

<style lang="scss">
	@include utilities.media-sm {
		details {
			position: initial;

			.card {
				box-sizing: border-box;
				left: 50%;
				max-width: calc(100% - var(--grid-gutter));
				text-align: left;
				transform: translateX(-50%);
				white-space: initial;
				width: max-content;
			}
		}
	}
</style>
