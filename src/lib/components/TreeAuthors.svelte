<script>
	import { actionsTreePage } from '$lib/constants/pages';
</script>

<a href="{actionsTreePage.path}/{actionsTreePage.children.authors}"><span>©</span> Crédits</a>

<style lang="scss">
	$height: 2rem;

	a {
		@include utilities.pill();

		align-items: center;
		bottom: 1rem;
		color: var(--font-color);
		line-height: $height;
		margin: 0;
		padding-right: 1rem;
		position: fixed;

		@include utilities.media-sm {
			left: 1rem;
		}
		@include utilities.media-md-lg {
			right: 1rem;
		}

		span {
			font-size: 2.2rem;
			margin-right: 0.5rem;
		}
	}
</style>
