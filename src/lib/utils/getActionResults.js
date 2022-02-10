import actions from '$lib/data/actions';

export default function getActionResults({ category = [], level = [], subcategory = [], term }) {
	const termRegexp = new RegExp(term, 'i');

	return actions.filter((action) => {
		const hasCategory = category.length
			? action.categories.some((actionCategory) => category.includes(actionCategory))
			: true;
		const hasLevel = level.length ? level.includes(action.level) : true;
		const hasSubcategory = subcategory.length
			? subcategory.includes(action.subcategory.slug)
			: true;
		const hasTerm = term ? action.text.match(termRegexp) : true;

		if (category.length && subcategory.length) {
			return hasLevel && hasTerm && (hasCategory || hasSubcategory);
		}

		return hasCategory && hasLevel && hasSubcategory && hasTerm;
	});
}
