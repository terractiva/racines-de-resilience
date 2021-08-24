import actions from '$lib/data/actions';

function getFilterValueFromQuery(query, filterName) {
	const filterValue = query.get(filterName);

	return filterValue ? filterValue.split(',') : [];
}

function getResults(filterValues) {
	return actions.filter((action) => {
		const hasCategory = filterValues.category.length
			? action.categories.some((category) => filterValues.category.includes(category))
			: true;
		const hasLevel = filterValues.level.length ? filterValues.level.includes(action.level) : true;
		const hasSubcategory = filterValues.subcategory.length
			? filterValues.subcategory.includes(action.subcategory.slug)
			: true;

		if (!filterValues.category.length || !filterValues.subcategory.length) {
			return hasCategory && hasLevel && hasSubcategory;
		}

		return hasLevel && (hasCategory || hasSubcategory);
	});
}

function updateQueryWithFilterValue(query, filterName, filterValue) {
	if (filterValue.length) {
		query.set(filterName, filterValue.toString());
	} else {
		query.delete(filterName);
	}
}

export { getFilterValueFromQuery, getResults, updateQueryWithFilterValue };
