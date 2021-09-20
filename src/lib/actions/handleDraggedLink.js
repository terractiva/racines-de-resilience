export default function handleDraggedLink(node) {
	let isDisabled = false;
  let isNextClickDisabled = false;

	function onClick(event) {
		if (isNextClickDisabled) {
			event.preventDefault();
			isNextClickDisabled = false;
		}
	}
	function onMousedown(event) {
		event.preventDefault(); // Empêche le glisser-déposer
	}
	function onMouseup() {
    if (isDisabled) {
      isNextClickDisabled = true;
    }
	}

	node.addEventListener('click', onClick);
	node.addEventListener('mousedown', onMousedown);
	node.addEventListener('mouseup', onMouseup);

	return {
		update(newIsDisabled) {
			isDisabled = newIsDisabled;

			if (isDisabled) {
				node.style.cursor = 'inherit';
			} else {
				node.style.cursor = '';
			}
		},
		destroy() {
			node.removeEventListener('click', onClick);
			node.removeEventListener('mousedown', onMousedown);
			node.removeEventListener('mouseup', onMouseup);
		}
	};
}
