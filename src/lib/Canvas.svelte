<script>
  import { onMount } from "svelte";
  import { fabric } from 'fabric';
  import Actions from "./Actions.svelte";
  import GestureHandler from "./GestureHandler.svelte";

  /** @type number */
  export let height;
  /** @type boolean */
  export let isEdit;
  /** @type number */
  export let width;
  
	/** @type import('@types/fabric').fabric.Canvas | import('@types/fabric').fabric.StaticCanvas */
  let fabricCanvas;
  /** @type number */
  let paddingX;
  /** @type number */
  let paddingY;
  /** @type HTMLCanvasElement */
  let nativeCanvas;

  $: resizeCanvas(width, height);

  onMount(() => {
		fabricCanvas = new fabric[isEdit ? 'Canvas' : 'StaticCanvas'](nativeCanvas, { selection: false });
    fabricCanvas.setBackgroundImage('arbre.jpg', () => (resizeBackgroundImage(width, height)));

    if (isEdit) {
      const circle = new fabric.Circle({ radius: 25, opacity: 0.1 });

			circle.on('modified', (event) => {
				const radius = 100 * event.target.radius * event.target.scaleX / (fabricCanvas.getWidth() - 2 * paddingX);
				const left = 100 * (event.target.left - paddingX) / (fabricCanvas.getWidth() - 2 * paddingX);
				const top = 100 * (event.target.top - paddingY) / (fabricCanvas.getHeight() - 2 * paddingY);

				console.log(`{
					position: [${left.toFixed(4)}, ${top.toFixed(4)}],
					rayon: ${radius.toFixed(4)},
					sources: \`\`,
					texte: \`\`
				}`)
			});

      fabricCanvas.add(circle);
    }
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

    fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]); // Réinitialise le zoom et le déplacement
		fabricCanvas.setDimensions({ height, width });
    resizeBackgroundImage(width, height);
  }
</script>

<canvas bind:this={nativeCanvas} />
<GestureHandler fabricCanvas={fabricCanvas} isEdit={isEdit} paddingX={paddingX} paddingY={paddingY} let:isDragging={isDragging}>
  <Actions isDragging={isDragging} />
</GestureHandler>
