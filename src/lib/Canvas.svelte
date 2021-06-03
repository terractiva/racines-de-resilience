<script>
  import { onMount } from "svelte";
  import { fabric } from 'fabric';
  import Actions from "./Actions.svelte";
  import GestureHandler from "./GestureHandler.svelte";

  /** @type number */
  export let height;
  /** @type number */
  export let width;
  
	/** @type {import('@types/fabric').fabric.StaticCanvas} */
  let fabricCanvas;
  /** @type number */
  let paddingX;
  /** @type number */
  let paddingY;
  /** @type HTMLCanvasElement */
  let nativeCanvas;

  $: resizeCanvas(width, height);

  onMount(() => {
		fabricCanvas = new fabric.StaticCanvas(nativeCanvas, {
      // defaultCursor: 'grab',
      // hoverCursor: 'pointer',
      selection: false
    });
    fabricCanvas.setBackgroundImage('arbre.jpg', () => (resizeBackgroundImage(width, height)));
  });

  function resizeBackgroundImage(width, height) {
    const backgroundImage = fabricCanvas.backgroundImage;

    if (!backgroundImage) return;

		const imageRatio = backgroundImage.width / backgroundImage.height;
		const canvasRatio = width / height;

		if (imageRatio < canvasRatio) {
			backgroundImage.scaleToHeight(height);
			paddingX = (width - backgroundImage.getScaledWidth()) / 2;
      paddingY = 0;
		}
		else if (imageRatio > canvasRatio) {
			backgroundImage.scaleToWidth(width);
      paddingX = 0;
			paddingY = (height - backgroundImage.getScaledHeight()) / 2;
		}

		backgroundImage.center();
		fabricCanvas.renderAll();
  }

  function resizeCanvas(width, height) {
    if (!fabricCanvas) return;

		fabricCanvas.setDimensions({ height, width });
    resizeBackgroundImage(width, height);
  }
</script>

<style lang="scss">

</style>

<canvas bind:this={nativeCanvas} />
<GestureHandler fabricCanvas={fabricCanvas} paddingX={paddingX} paddingY={paddingY}>
  <Actions />
</GestureHandler>
