<script>
	// Adaptation de http://fabricjs.com/fabric-intro-part-5#pan_zoom

	import { zoomIncrement, zoomMax, zoomMin } from '$lib/constants/settings';
	import TreeNavigatorButtons from './TreeNavigatorButtons.svelte';

	/** @type import('@types/fabric').fabric.StaticCanvas */
	export let fabricCanvas;
	/** @type [x: number, y: number] */
	export let padding;

	let cursor = 'grab';
	let isDragging = false;
	let isMouseDown = false;
	let transform = null;
	let zoom = null;

	// Permet de réinitialiser lors d'un redimensionnement de fenêtre
	$: {
		if (padding) {
			zoom = 1;
			checkAndApplyMovement();
		}
	}

	function checkAndApplyMovement() {
		const vTransform = fabricCanvas.viewportTransform; // vTransform[4] = x, vTransform[5] = y
		const xMax = fabricCanvas.getWidth() * (1 - zoom);
		const yMax = fabricCanvas.getHeight() * (1 - zoom);

		if (vTransform[4] >= 0) {
			vTransform[4] = 0;
		} else if (vTransform[4] < xMax) {
			vTransform[4] = xMax;
		}
		if (vTransform[5] >= 0) {
			vTransform[5] = 0;
		} else if (vTransform[5] < yMax) {
			vTransform[5] = yMax;
		}

		transform = `translate(${vTransform[4]}px, ${vTransform[5]}px) scale(${zoom / zoomMax})`;
	}

	function onMoveEnd() {
		cursor = 'grab';
		isDragging = false;
		isMouseDown = false;
	}

	function onMoveInProgress(cursorX, cursorY) {
		if (isMouseDown) {
			isDragging = true;
			fabricCanvas.viewportTransform[4] += cursorX - fabricCanvas.lastPosX;
			fabricCanvas.viewportTransform[5] += cursorY - fabricCanvas.lastPosY;
			checkAndApplyMovement();
			fabricCanvas.requestRenderAll();
			fabricCanvas.lastPosX = cursorX;
			fabricCanvas.lastPosY = cursorY;
		}
	}

	function onMoveStart(cursorX, cursorY) {
		cursor = 'grabbing';
		isMouseDown = true;
		fabricCanvas.lastPosX = cursorX;
		fabricCanvas.lastPosY = cursorY;
	}

	function onScroll(delta, cursorX, cursorY) {
		updateZoom(fabricCanvas.getZoom() * 0.998 ** delta, { x: cursorX, y: cursorY });
	}

	function updateZoom(newZoom, pointToZoom) {
		if (!pointToZoom) {
			pointToZoom = {
				x: fabricCanvas.getCenter().left,
				y: fabricCanvas.getCenter().top
			};
		}
		if (newZoom > zoomMax) {
			newZoom = zoomMax;
		}
		if (newZoom < zoomMin) {
			newZoom = zoomMin;
		}

		zoom = newZoom;
		fabricCanvas.zoomToPoint(pointToZoom, newZoom);
		checkAndApplyMovement();
	}
</script>

<svelte:window on:mouseup={onMoveEnd} on:touchend={onMoveEnd} />

<section
	style="cursor: {cursor}; height: {zoomMax * 100}%; padding: {zoomMax * padding?.[1]}px {zoomMax *
		padding?.[0]}px; transform: {transform}; width: {zoomMax * 100}%;"
	on:mousedown={(event) => onMoveStart(event.clientX, event.clientY)}
	on:touchstart|passive={(event) => {
		if (event.touches.length === 1) {
			onMoveStart(event.touches[0].clientX, event.touches[0].clientY);
		}
	}}
	on:mousemove={(event) => onMoveInProgress(event.clientX, event.clientY)}
	on:touchmove|nonpassive|preventDefault|stopPropagation={(event) => {
		if (event.touches.length === 1) {
			onMoveInProgress(event.touches[0].clientX, event.touches[0].clientY);
		}
	}}
	on:wheel|nonpassive|preventDefault|stopPropagation={(event) =>
		onScroll(event.deltaY, event.pageX, event.pageY)}
>
	<slot {isDragging} />
</section>

<TreeNavigatorButtons
	{zoom}
	zoomedIn={() => updateZoom(zoom + zoomIncrement)}
	zoomedOut={() => updateZoom(zoom - zoomIncrement)}
/>

<style lang="scss">
	section {
		box-sizing: border-box;
		cursor: grab;
		left: 0;
		position: absolute;
		top: 0;
		touch-action: none; // Empêche le zoom par pincement sur mobile
		transform-origin: top left;
	}
</style>
