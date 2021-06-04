<script>
  import { ZOOM_MAX } from '../helpers/constants';

  // TODO: position des actions
  // TODO: clic sur les actions

	/** @type {import('@types/fabric').fabric.StaticCanvas} */
  export let fabricCanvas;
  /** @type number */
  export let paddingX;
  /** @type number */
  export let paddingY;

  /** @type HTMLDivElement */
  let div;

  $: paddingX !== undefined && paddingY !== undefined && checkBoundaries();

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

    div.style.transform = `translate(${vpt[4]}px, ${vpt[5]}px) scale(${zoom})`
	}

  function moveStart(x, y) {
    div.style.cursor = 'grabbing';
		fabricCanvas.isDragging = true;
		fabricCanvas.selection = false;
		fabricCanvas.lastPosX = x;
		fabricCanvas.lastPosY = y;
  }

  function moveInProgress(x, y) {
		if (fabricCanvas.isDragging) {
			fabricCanvas.viewportTransform[4] += x - fabricCanvas.lastPosX;
			fabricCanvas.viewportTransform[5] += y - fabricCanvas.lastPosY;
			checkBoundaries();
			fabricCanvas.requestRenderAll();
			fabricCanvas.lastPosX = x;
			fabricCanvas.lastPosY = y;
		}
  }

  function moveEnd() {
    div.style.cursor = null;
		fabricCanvas.isDragging = false;
		fabricCanvas.selection = true;
  }

	function updateZoom(delta, x, y) {
		const min = 1;
		const max = ZOOM_MAX;
		let zoom = fabricCanvas.getZoom();

		zoom *= 0.998 ** delta;
		if (zoom > max) zoom = max;
		if (zoom < min) zoom = min;
		fabricCanvas.zoomToPoint({ x, y }, zoom);
		checkBoundaries();
	}
</script>

<style lang="scss">
  :global(main) {
    overflow: hidden;
		position: relative;
	}

  div {
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

<div
  bind:this={div}
  on:mousedown={(event) => (moveStart(event.clientX, event.clientY))}
  on:touchstart={(event) => {
    if (event.touches.length === 1) {
      (moveStart(event.touches[0].clientX, event.touches[0].clientY))
    }
  }}
  on:mousemove={(event) => (moveInProgress(event.clientX, event.clientY))}
  on:touchmove={(event) => {
    if (event.touches.length === 1) {
      moveInProgress(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
      event.stopPropagation();
    }
  }}
  on:mouseup={moveEnd}
  on:touchend={moveEnd}
  on:mousewheel={(event) => {
    updateZoom(event.deltaY, event.offsetX, event.offsetY);
		event.preventDefault();
		event.stopPropagation();
  }}
  style="padding: {paddingY}px {paddingX}px;"
>
  <slot></slot>
</div>
