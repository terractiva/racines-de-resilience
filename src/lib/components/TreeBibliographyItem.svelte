<script>
	import { treeFontSize } from '$lib/constants/settings';

	export let backgroundHeight;
	export let bibliographyItem;
	export let index;
	export let showId;

	$: bgClasses = bibliographyItem.categories
		.map((category) => `bg-${category} text-${category}`)
		.join(' ');
</script>

<li
	style="font-size: {treeFontSize * backgroundHeight}px; left: {bibliographyItem
		.position[0]}%; top: {bibliographyItem.position[1]}%; width: {2 * bibliographyItem.radius}%;"
>
	<p class={bgClasses}>
		{#if showId}ID {index + 1}<br />{/if}
		{@html bibliographyItem.text}
	</p>
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

		p {
			align-items: center;
			border-radius: 50%;
			display: flex;
			flex-direction: column;
			font-weight: 600;
			height: 100%;
			line-height: 1.2;
			justify-content: center;
			left: 0;
			margin-bottom: 0;
			overflow: hidden;
			padding: 15%; // Valeur approximative permettant de faire rentrer un carré dans un cercle
			position: absolute;
			text-align: center;
			top: 0;
			width: 100%;
		}
	}
</style>
