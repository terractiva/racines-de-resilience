<script>
	import { actionsTreePage } from '$lib/constants/pages';

	export let zoom;
	export let zoomedIn;
	export let zoomedOut;

	$: zoomLabel = zoom.toFixed(1);
</script>

<div class="wrapper">
	<div>
		<button class="button icon-only" type="button" on:click={zoomedIn}>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M12 4a1 1 0 00-1 1v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6V5a1 1 0 00-1-1z"
					fill="currentColor"
				/></svg
			>
		</button>

		<p>x{zoomLabel}</p>

		<button class="button icon-only" type="button" on:click={zoomedOut}>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill="currentColor" /></svg
			>
		</button>
	</div>

	<div>
		<a class="button icon-only" href="{actionsTreePage.path}/{actionsTreePage.children.help}">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4 9a7.997 7.997 0 0 0 4 6.93V16a4 4 0 1 0 8 0v-.07A8 8 0 1 0 4 9zm12 4.472a6 6 0 1 0-8 0h2V16a2 2 0 1 0 4 0V13.47l2 .001z"
					fill="currentColor"
				/><path
					d="M10 21.006V21c.588.34 1.271.535 2 .535.729 0 1.412-.195 2-.535v.006a2 2 0 1 1-4 0z"
					fill="currentColor"
				/></svg
			>
		</a>
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: fixed;
		right: 1rem;

		@include utilities.media-sm {
			bottom: 1rem;
		}
		@include utilities.media-md-lg {
			top: utilities.$header-height + 1rem;
		}

		div {
			@include utilities.pill(true);

			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}

			.button {
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
	}
</style>
