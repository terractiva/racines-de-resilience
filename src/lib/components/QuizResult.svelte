<script>
	import InputNames from '$lib/constants/input-names';
	import { actionsPage } from '$lib/constants/pages';
	import QuizIcon from './QuizIcon.svelte';

	export let category;
	export let subtitle;
	export let subtitleLink;
</script>

<div>
	<p class="text-{category} mb-0">
		<b>
			J'ai une majorité de&nbsp;<QuizIcon {category} />
		</b>
	</p>
	<p class="text-grey">
		<b>
			{subtitle}
			<a href="{actionsPage.path}?{InputNames.category}={category}#{actionsPage.anchors.filters}"
				>{subtitleLink}</a
			>
		</b>
	</p>
	<p class="mb-0">
		<slot />
	</p>
</div>

<style lang="scss">
	div {
		margin: auto;

		&:not(:last-child) {
			margin-bottom: 3rem;
		}

		@include utilities.media-lg {
			max-width: 50%;
		}

		p {
			&:first-child b {
				align-items: flex-end;
				display: flex;
			}
			&:nth-child(2) {
				margin-bottom: 0.5rem;
			}
			&:last-child {
				text-align: justify;
			}
		}
	}
</style>
