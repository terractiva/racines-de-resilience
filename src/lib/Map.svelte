<script>
	/**
	 * @see http://fabricjs.com/fabric-intro-part-5#pan_zoom
	 */
	import { fabric } from 'fabric';
	import { onDestroy, onMount } from 'svelte';

	/** @type HTMLCanvasElement */
	let canvas;
	/** @type {import('@types/fabric').fabric.StaticCanvas} */
	let fabricCanvas;

	onMount(() => {
		fabricCanvas = new fabric.StaticCanvas(canvas, {
			selection: false
		});

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		fabricCanvas.setBackgroundImage('arbre.jpg', drawBackgroundImage);

		canvas.addEventListener('mousedown', onMouseDown.bind(this));
		canvas.addEventListener('mousemove', onMouseMove.bind(this));
		canvas.addEventListener('mouseup', onMouseUp.bind(this));

		canvas.addEventListener('touchstart', onMouseDown.bind(this));
		canvas.addEventListener('touchmove', onMouseMove.bind(this));
		canvas.addEventListener('touchend', onMouseUp.bind(this));

		canvas.addEventListener('mousewheel', onMouseWheel.bind(this));
	});

	onDestroy(() => {
		canvas.removeEventListener('mousedown', onMouseDown.bind(this));
		canvas.removeEventListener('mousemove', onMouseMove.bind(this));
		canvas.removeEventListener('mouseup', onMouseUp.bind(this));

		canvas.removeEventListener('touchstart', onMouseDown.bind(this));
		canvas.removeEventListener('touchmove', onMouseMove.bind(this));
		canvas.removeEventListener('touchend', onMouseUp.bind(this));

		canvas.removeEventListener('mousewheel', onMouseWheel.bind(this));
	});

	function checkBoundaries() {
		var vpt = fabricCanvas.viewportTransform;
		var zoom = fabricCanvas.getZoom();
		if (vpt[4] >= 0) {
			vpt[4] = 0;
		} else if (vpt[4] < fabricCanvas.getWidth() - fabricCanvas.getWidth() * zoom) {
			vpt[4] = fabricCanvas.getWidth() - fabricCanvas.getWidth() * zoom;
		}
		if (vpt[5] >= 0) {
			vpt[5] = 0;
		} else if (vpt[5] < fabricCanvas.getHeight() - fabricCanvas.getHeight() * zoom) {
			vpt[5] = fabricCanvas.getHeight() - fabricCanvas.getHeight() * zoom;
		}
	}

	function drawBackgroundImage() {
		const backgroundImage = fabricCanvas.backgroundImage;

		backgroundImage.scaleToHeight(fabricCanvas.getHeight());
		backgroundImage.scaleToWidth(fabricCanvas.getWidth());
		backgroundImage.center();
		fabricCanvas.renderAll();
	}

	function onMouseDown(event) {
		const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
		const y = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

		fabricCanvas.isDragging = true;
		fabricCanvas.selection = false;
		fabricCanvas.lastPosX = x;
		fabricCanvas.lastPosY = y;
	}
	function onMouseMove(event) {
		if (
			fabricCanvas.isDragging &&
			(event instanceof MouseEvent || (event instanceof TouchEvent && event.touches.length === 1))
		) {
			const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
			const y = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

			fabricCanvas.viewportTransform[4] += x - fabricCanvas.lastPosX;
			fabricCanvas.viewportTransform[5] += y - fabricCanvas.lastPosY;
			checkBoundaries();
			fabricCanvas.requestRenderAll();
			fabricCanvas.lastPosX = x;
			fabricCanvas.lastPosY = y;

			if (event instanceof TouchEvent) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
	}
	function onMouseUp() {
		fabricCanvas.setViewportTransform(fabricCanvas.viewportTransform);
		fabricCanvas.isDragging = false;
		fabricCanvas.selection = true;
	}

	function onMouseWheel(event) {
		updateZoom(event.deltaY, event.offsetX, event.offsetY);
		event.preventDefault();
		event.stopPropagation();
	}

	function resizeCanvas() {
		fabricCanvas.setDimensions({
			height: window.innerHeight,
			width: window.innerWidth
		});
	}

	function updateZoom(delta, x = fabricCanvas.getWidth() / 2, y = fabricCanvas.getHeight() / 2) {
		const min = 1;
		const max = 4;
		let zoom = fabricCanvas.getZoom();

		zoom *= 0.998 ** delta;
		if (zoom > max) zoom = max;
		if (zoom < min) zoom = min;
		fabricCanvas.zoomToPoint({ x, y }, zoom);
		checkBoundaries();
	}
</script>

<canvas bind:this={canvas} />

<div>
	<button type="button" on:click={() => updateZoom(-150)}>+</button>
	<button type="button" on:click={() => updateZoom(150)}>-</button>
</div>

<style lang="scss">
	canvas {
		cursor: grab;
		touch-action: none;

		&:active {
			cursor: grabbing;
		}
	}

	div {
		bottom: 15px;
		display: flex;
		flex-direction: column;
		position: fixed;
		right: 15px;

		button {
			&:first-of-type {
				margin-bottom: 5px;
			}
		}
	}
</style>
