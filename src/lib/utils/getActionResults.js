import actions from '$lib/data/actions';

export default function getActionResults({
	action,
	category = [],
	level = [],
	subcategory = [],
	source
}) {
	const actionTermRegexp = new RegExp(action, 'i');
	const sourceTermRegexp = new RegExp(source, 'i');

	return actions.filter((action) => {
		const hasActionTerm = action ? action.text.match(actionTermRegexp) : true;
		const hasCategory = category.length
			? action.categories.some((actionCategory) => category.includes(actionCategory))
			: true;
		const hasLevel = level.length ? level.includes(action.level) : true;
		const hasSourceTerm = source
			? action.sources.some((source) => source.name.match(sourceTermRegexp))
			: true;
		const hasSubcategory = subcategory.length
			? subcategory.includes(action.subcategory.slug)
			: true;

		if (category.length && subcategory.length) {
			return hasActionTerm && hasLevel && hasSourceTerm && (hasCategory || hasSubcategory);
		}

		return hasActionTerm && hasCategory && hasLevel && hasSourceTerm && hasSubcategory;
	});
}
