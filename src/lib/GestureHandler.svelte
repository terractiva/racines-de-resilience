<script>
  import { ZOOM_MAX } from '../helpers/constants';
  import { onDestroy, onMount } from "svelte";

	/** @type {import('@types/fabric').fabric.StaticCanvas} */
  export let fabricCanvas;
  // /** @type number */
  // export let paddingX;
  // /** @type number */
  // export let paddingY;

  /** @type HTMLDivElement */
  let div;
  /** @type string */
  let transform;

  const onMouseWheel = (event) => {
    updateZoom(event.deltaY, event.offsetX, event.offsetY);
		event.preventDefault();
		event.stopPropagation();
  };

	const onMouseDown = (event) => {
		const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
		const y = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

		fabricCanvas.isDragging = true;
		fabricCanvas.selection = false;
		fabricCanvas.lastPosX = x;
		fabricCanvas.lastPosY = y;
	}
	const onMouseMove = (event) => {
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
	const onMouseUp = ()  =>{
		fabricCanvas.setViewportTransform(fabricCanvas.viewportTransform);
		fabricCanvas.isDragging = false;
		fabricCanvas.selection = true;
	}

  onMount(() => {
    handleListeners('addEventListener');
  });

  onDestroy(() => {
    handleListeners('removeEventListener');
  });

	function checkBoundaries() {
		const vpt = fabricCanvas.viewportTransform;
		const zoom = fabricCanvas.getZoom();
    const maxX = fabricCanvas.getWidth() * (1 - zoom);
    const maxY = fabricCanvas.getHeight() * (1 - zoom);

		if (vpt[4] >= 0) {
			vpt[4] = 0;
		} else if (vpt[4] < maxX) {
			vpt[4] = maxX;
		}
		if (vpt[5] >= 0) {
			vpt[5] = 0;
		} else if (vpt[5] < maxY) {
			vpt[5] = maxY;
		}

    transform = `translate(${vpt[4]}px, ${vpt[5]}px) scale(${zoom})`;
	}

  // TODO: utiliser on:event
  function handleListeners(functionName) {
    div[functionName]('mousedown', onMouseDown);
    div[functionName]('mousemove', onMouseMove);
    div[functionName]('mouseup', onMouseUp);
    div[functionName]('mousewheel', onMouseWheel);
  }

	function updateZoom(delta, x, y) {
		const min = 1;
		const max = ZOOM_MAX;
		let zoom = fabricCanvas.getZoom();

		zoom *= 0.998 ** delta;
		if (zoom > max) zoom = max;
		if (zoom < min) zoom = min;
		fabricCanvas.zoomToPoint({ x, y }, zoom);
    // fabricCanvas.setZoom(zoom);
		checkBoundaries();
	}
</script>

<style lang="scss">
  div {
    box-sizing: border-box;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>

<!-- <div bind:this={div} style="padding: {paddingY}px {paddingX}px;"> -->
<div bind:this={div}>
  <slot transform={transform}></slot>
</div>
