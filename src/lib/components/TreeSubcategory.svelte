<script>
	import { actionsPage } from '$lib/constants/pages';
	import { treeSubcategoryFontSize } from '$lib/constants/settings';

	export let backgroundHeight;
	export let isDisabled;
	export let subcategory;

	let isNextClickDisabled = false;
</script>

<li
	style="font-size: {treeSubcategoryFontSize * backgroundHeight}px; left: {subcategory
		.position[0]}%; top: {subcategory
		.position[1]}%; width: {subcategory.width}%; height: {subcategory.height}%;"
>
	<a
		href="{actionsPage.path}?thematique={subcategory.slug}#{actionsPage.anchors.filters}"
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
		<b>
			{subcategory.name}
		</b>
	</a>
</li>

<style lang="scss">
	li {
		align-items: center;
		display: flex;
		justify-content: center;
		position: absolute;
		text-align: center;

		a {
			color: var(--font-color);
			line-height: 1.1;
		}
	}
</style>
