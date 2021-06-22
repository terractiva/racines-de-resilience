<script>
	// Adaptation de http://fabricjs.com/fabric-intro-part-5#pan_zoom

	import { zoomMax, zoomMin } from '$lib/constants/settings';
	import TreeNavigatorAuthors from './TreeNavigatorAuthors.svelte';
	import TreeNavigatorZoom from './TreeNavigatorZoom.svelte';

	/** @type import('@types/fabric').fabric.StaticCanvas */
	export let fabricCanvas;
	/** @type [x: number, y: number] */
	export let padding;

	let cursor = 'grab';
	let isDragging = false;
	let isMouseDown = false;
	let transform;
	let zoom = 1;

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

		transform = `translate(${vTransform[4]}px, ${vTransform[5]}px) scale(${zoom})`;
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
	style="cursor: {cursor}; padding: {padding?.[1]}px {padding?.[0]}px; transform: {transform};"
	on:mousedown={(event) => onMoveStart(event.clientX, event.clientY)}
	on:touchstart={(event) => {
		if (event.touches.length === 1) {
			onMoveStart(event.touches[0].clientX, event.touches[0].clientY);
		}
	}}
	on:mousemove={(event) => onMoveInProgress(event.clientX, event.clientY)}
	on:touchmove={(event) => {
		if (event.touches.length === 1) {
			onMoveInProgress(event.touches[0].clientX, event.touches[0].clientY);
			event.preventDefault();
			event.stopPropagation();
		}
	}}
	on:wheel={(event) => {
		onScroll(event.deltaY, event.pageX, event.pageY);
		event.preventDefault();
		event.stopPropagation();
	}}
>
	<slot {isDragging} />
</section>

<TreeNavigatorAuthors />
<TreeNavigatorZoom
	{zoom}
	zoomedIn={() => updateZoom(zoom + 0.2)}
	zoomedOut={() => updateZoom(zoom - 0.2)}
/>

<style lang="scss">
	section {
		box-sizing: border-box;
		cursor: grab;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		touch-action: none; // Empêche le zoom par pincement sur mobile
		transform-origin: top left;
		width: 100%;
	}
</style>
