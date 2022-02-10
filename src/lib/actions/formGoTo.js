import { goto } from '$app/navigation';

export default function formGoto(node, options) {
	function onSubmit(event) {
		event.preventDefault();

		const [actionHref, actionAnchor] = node.getAttribute('action').split('#');
		const query = new URLSearchParams(new FormData(node)).toString();
		let href = actionHref;

		if (query) {
			href += `?${query}`;
		}
		if (actionAnchor) {
			href += `#${actionAnchor}`;
		}

		goto(href, options);
	}

	node.addEventListener('submit', onSubmit);

	return {
		destroy() {
			node.removeEventListener('submit', onSubmit);
		}
	};
}
