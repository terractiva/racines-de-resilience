<script>
  /**
   * Adaptation de http://fabricjs.com/fabric-intro-part-5#pan_zoom
   */
  import { ZOOM_MAX } from '../helpers/constants';

	/** @type import('@types/fabric').fabric.Canvas | import('@types/fabric').fabric.StaticCanvas */
  export let fabricCanvas;
  /** @type boolean */
  export let isEdit;
  /** @type number */
  export let paddingX;
  /** @type number */
  export let paddingY;

  /** @type HTMLDivElement */
  let div;
  /** @type boolean */
  let isDragging = false;
  /** @type boolean */
  let isMouseDown = false;

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
		isMouseDown = true;
		fabricCanvas.selection = false;
		fabricCanvas.lastPosX = x;
		fabricCanvas.lastPosY = y;
  }

  function moveInProgress(x, y) {
		if (isMouseDown) {
      isDragging = true;
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
		isDragging = false;
    isMouseDown = false;
		fabricCanvas.selection = true;
  }

	function updateZoom(delta, x, y) {
		const min = 1;
		const max = ZOOM_MAX;
		let zoom = fabricCanvas.getZoom();

		zoom *= 0.998 ** delta;

    if (!isEdit) {
      if (zoom > max) zoom = max;
      if (zoom < min) zoom = min;
    }

    let point = { x, y };
    
    if (x === undefined || y === undefined) {
      const center = fabricCanvas.getCenter();
      
      point = {
        x: center.left,
        y: center.top
      };
    }

    fabricCanvas.zoomToPoint(point, zoom);
		checkBoundaries();
	}
</script>

<style lang="scss">
  :global(main) {
    overflow: hidden;
		position: relative;
	}

  .gesture {
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

  .navigation {
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

<svelte:window
  on:keypress={(event) => {
    if (isEdit && event.code === 'Space') {
      if (div.style.pointerEvents) {
        div.style.pointerEvents = null;
      } else {
        div.style.pointerEvents = 'none';
      }
    }
  }}
></svelte:window>

<div
  bind:this={div}
  class="gesture"
  style="padding: {paddingY}px {paddingX}px;"
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
    updateZoom(event.deltaY, event.pageX, event.pageY - 60); // TODO: à améliorer
		event.preventDefault();
		event.stopPropagation();
  }}
>
  <slot isDragging={isDragging}></slot>
</div>

<div class="navigation">
	<button type="button" on:click={() => updateZoom(-120)}>+</button>
	<button type="button" on:click={() => updateZoom(120)}>-</button>
</div>
