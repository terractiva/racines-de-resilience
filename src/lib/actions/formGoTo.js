import { goto } from '$app/navigation';

export default function formGoto(node, options) {
	function onSubmit(event) {
		event.preventDefault();

    const splittedAction = node.action.split('#');
		const values = [];

		new FormData(node).forEach((value, key) => {
      const existing = values.find(item => item[0] === key);

      if (existing) {
        if (existing[1] instanceof Array) {
          existing[1].push(value);
        } else {
          existing[1] = [existing[1], value];
        }
      } else {
        values.push([key, value.toString()]);
      }
		});

    let link = splittedAction[0];
		const searchParams = new URLSearchParams(values);

    if (values.length) {
      link += `?${searchParams}`;
    }
    if (splittedAction[1]) {
      link += `#${splittedAction[1]}`;
    }

		goto(link, options);
	}

	node.addEventListener('submit', onSubmit);

	return {
		destroy() {
			node.removeEventListener('submit', onSubmit);
		}
	};
}
