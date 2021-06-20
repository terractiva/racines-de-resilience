<script>
	export let zoom;
	export let zoomedIn;
	export let zoomedOut;
</script>

<div>
	<button class="button icon-only" type="button" on:click={zoomedIn}>
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M12 4a1 1 0 00-1 1v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6V5a1 1 0 00-1-1z"
				fill="currentColor"
			/></svg
		>
	</button>

	<p>x{zoom.toFixed(1)}</p>

	<button class="button icon-only" type="button" on:click={zoomedOut}>
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
			><path d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill="currentColor" /></svg
		>
	</button>
</div>

<style lang="scss">
	div {
		@include utilities.pill(true);

		box-shadow: utilities.$shadow;
		position: fixed;
		right: 1rem;
		top: utilities.$header-height + 1rem;

		button {
			border-radius: 50%;
			padding: 0.4rem;

			svg {
				display: block;
				height: 2rem;
				width: 2rem;
			}
		}

		p {
			font-size: 0.8em;
			margin: 0.5rem 0;
			text-align: center;
		}
	}
</style>
