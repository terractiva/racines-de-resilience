<script>
	import { filtersContext } from '$lib/contexts';
	import actions from '$lib/data/actions';
	import { setContext } from 'svelte';

	let results = actions;
	const filters = { category: [], level: [], subcategory: [] };

	setContext(filtersContext, { filterByCategory, filterByLevel, filterBySubcategory });

	function filter() {
		results = actions.filter((action) => {
			const hasCategory = filters.category.length
				? action.categories.some((category) => filters.category.includes(category))
				: true;
			const hasLevel = filters.level.length ? filters.level.includes(action.level) : true;
			const hasSubcategory = filters.subcategory.length
				? filters.subcategory.includes(action.subcategory.name)
				: true;

			if (!filters.category.length || !filters.subcategory.length) {
				return hasCategory && hasLevel && hasSubcategory;
			}

			return hasLevel && (hasCategory || hasSubcategory);
		});
	}

	function filterByCategory(group) {
		filters.category = group;
		filter();
	}

	function filterByLevel(group) {
		filters.level = group;
		filter();
	}

	function filterBySubcategory(group) {
		filters.subcategory = group;
		filter();
	}
</script>

<slot {results} />
