<script>
	import { fabric } from 'fabric';
	import { onMount } from 'svelte';
	import TreeActions from './TreeActions.svelte';
	import TreeNavigator from './TreeNavigator.svelte';

	export let height;
	export let width;

	/** @type import('@types/fabric').fabric.StaticCanvas */
	let fabricCanvas;
	let isBackgroundError = false;
	let isBackgroundLoading = true;
	/** @type HTMLCanvasElement */
	let nativeCanvas;
	/** @type [x: number, y: number] */
	let backgroundPadding; // Espace à rajouter de chaque côté de l'arrière-plan pour qu'il prenne toute la place disponible

	$: showTree = !isBackgroundError && !isBackgroundLoading;
	$: resizeCanvas(width, height);

	onMount(() => {
		initCanvas();
	});

	function initCanvas() {
		fabricCanvas = new fabric.StaticCanvas(nativeCanvas, { selection: false });
		fabricCanvas.setBackgroundColor('#ffffff');
		fabricCanvas.setBackgroundImage('/arbre.jpg', (_, isError) => {
			isBackgroundLoading = false;

			if (isError) {
				isBackgroundError = true;
			} else {
				resizeCanvasBackground(width, height);
			}
		});
	}

	// Réinitialise le zoom et le déplacement
	function resetCanvasPosition() {
		fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
	}

	function resizeCanvas() {
		if (!fabricCanvas) return;

		resetCanvasPosition();
		fabricCanvas.setDimensions({ height, width });
		resizeCanvasBackground(width, height);
	}

	function resizeCanvasBackground(width, height) {
		const background = fabricCanvas.backgroundImage;

		if (!background) return;

		const backgroundRatio = background.width / background.height;
		const canvasRatio = width / height;

		if (backgroundRatio < canvasRatio) {
			background.scaleToHeight(height);
			backgroundPadding = [(width - background.getScaledWidth()) / 2, 0];
		} else if (backgroundRatio > canvasRatio) {
			background.scaleToWidth(width);
			backgroundPadding = [0, (height - background.getScaledHeight()) / 2];
		}

		background.center();
		fabricCanvas.renderAll();
	}
</script>

<canvas bind:this={nativeCanvas} style="opacity: {showTree ? 1 : 0};" />

{#if isBackgroundError}
	<p class="text-error">Oups, il y a eu une erreur...</p>
{/if}
{#if isBackgroundLoading}
	<p>Chargement de l'arbre...</p>
{/if}

{#if showTree}
	<TreeNavigator {fabricCanvas} padding={backgroundPadding} let:isDragging>
		<TreeActions {isDragging} backgroundHeight={height - 2 * backgroundPadding[1]} />
	</TreeNavigator>
{/if}

<style lang="scss">
	p {
		left: 50%;
		margin-bottom: 0;
		position: absolute;
		text-align: center;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	canvas {
		display: block;
		transition: opacity 0.5s ease;
	}
</style>
