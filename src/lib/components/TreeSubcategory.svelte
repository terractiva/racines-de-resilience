<script>
	import { treeSubcategoryFontSize } from '$lib/constants/settings';

	export let backgroundHeight;
	export let subcategory;
</script>

<li
	style="font-size: {treeSubcategoryFontSize * backgroundHeight}px; left: {subcategory
		.position[0]}%; top: {subcategory
		.position[1]}%; width: {subcategory.width}%; height: {subcategory.height}%;"
>
	<p class="mb-0">
		<b>
			{subcategory.name}
		</b>
	</p>
</li>

<style lang="scss">
	li {
		align-items: center;
		display: flex;
		justify-content: center;
		position: absolute;
		text-align: center;

		p {
			line-height: 1.1;
		}
	}
</style>
