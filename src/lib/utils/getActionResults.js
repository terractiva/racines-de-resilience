import actions from '$lib/data/actions';

export default function getActionResults({
	actionTerm,
	category = [],
	level = [],
	subcategory = [],
	sourceTerm
}) {
	const actionTermRegexp = new RegExp(actionTerm, 'i');
	const sourceTermRegexp = new RegExp(sourceTerm, 'i');

	return actions.filter((action) => {
		const hasActionTerm = actionTerm ? action.text.match(actionTermRegexp) : true;
		const hasCategory = category.length
			? action.categories.some((actionCategory) => category.includes(actionCategory))
			: true;
		const hasLevel = level.length ? level.includes(action.level) : true;
		const hasSourceTerm = sourceTerm
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
