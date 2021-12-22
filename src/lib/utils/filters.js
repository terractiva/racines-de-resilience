import actions from '$lib/data/actions';

export function getFilterValueFromQuery(query, filterName) {
	const filterValue = query.get(filterName);

	return filterValue ? filterValue.split(',') : [];
}

export function getResults(filterValues) {
	const termRegexp = new RegExp(filterValues.term, 'i');

	return actions.filter((action) => {
		const hasCategory = filterValues.category.length
			? action.categories.some((category) => filterValues.category.includes(category))
			: true;
		const hasLevel = filterValues.level.length ? filterValues.level.includes(action.level) : true;
		const hasSubcategory = filterValues.subcategory.length
			? filterValues.subcategory.includes(action.subcategory.slug)
			: true;
		const hasTerm = filterValues.term ? action.text.match(termRegexp) : true;

		if (filterValues.category.length && filterValues.subcategory.length) {
			return hasLevel && hasTerm && (hasCategory || hasSubcategory);
		}

		return hasCategory && hasLevel && hasSubcategory && hasTerm;
	});
}
