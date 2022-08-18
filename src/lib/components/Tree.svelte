<script>
	import { headerHeight } from '$lib/constants/settings';
	import GlobalLibraryLoader from './GlobalLibraryLoader.svelte';
	import TreeAuthors from './TreeAuthors.svelte';
	import TreeItems from './TreeItems.svelte';
	import TreeNavigator from './TreeNavigator.svelte';
	import TreePaperVersion from './TreePaperVersion.svelte';

	export let height;
	export let showItemsId;
	export let width;

	/** @type import('@types/fabric').fabric.StaticCanvas */
	let fabricCanvas;
	let isBackgroundError = false;
	let isBackgroundLoading = false;
	let isFabricError = false;
	let isHammerLoading = true;
	let isHammerError = false;
	let isFabricLoading = true;
	/** @type HTMLCanvasElement */
	let nativeCanvas;
	/** @type [x: number, y: number] */
	let backgroundPadding; // Espace à rajouter de chaque côté de l'arrière-plan pour qu'il prenne toute la place disponible

	$: isError = isBackgroundError || isFabricError || isHammerError;
	$: isLoading = isBackgroundLoading || isFabricLoading || isHammerLoading;
	$: showTree = !isError && !isLoading;
	$: fabricCanvas && resizeCanvas(width, height);

	function initCanvas() {
		isBackgroundLoading = true;
		fabricCanvas = new window.fabric.StaticCanvas(nativeCanvas, { selection: false });
		fabricCanvas.setBackgroundColor('#ffffff');
		fabricCanvas.setBackgroundImage(
			window.devicePixelRatio >= 2 ? '/arbre-2x.jpg' : '/arbre.jpg',
			(_, isError) => {
				isBackgroundLoading = false;

				if (isError) {
					isBackgroundError = true;
				} else {
					resizeCanvasBackground(width, height);
				}
			}
		);
	}

	// Réinitialise le zoom et le déplacement
	function resetCanvasPosition() {
		fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
	}

	function resizeCanvas() {
		resetCanvasPosition();
		fabricCanvas.setDimensions({ height, width });
		resizeCanvasBackground(width, height);
	}

	function resizeCanvasBackground(width, height) {
		const background = fabricCanvas.backgroundImage;

		if (!background) return;

		const backgroundRatio = background.width / background.height;
		const canvasRatio = width / (height - headerHeight);

		if (backgroundRatio < canvasRatio) {
			background.scaleToHeight(height - headerHeight);
			backgroundPadding = [(width - background.getScaledWidth()) / 2, 0];
		} else if (backgroundRatio > canvasRatio) {
			background.scaleToWidth(width);
			backgroundPadding = [0, (height - headerHeight - background.getScaledHeight()) / 2];
		}

		fabricCanvas.viewportTransform[5] = headerHeight / 2;

		background.center();
		fabricCanvas.renderAll();
	}
</script>

<GlobalLibraryLoader
	globalObjectName="fabric"
	src="/fabric.min.js"
	on:failed={() => {
		isFabricLoading = false;
		isFabricError = true;
	}}
	on:loaded={() => {
		isFabricLoading = false;
		initCanvas();
	}}
/>
<GlobalLibraryLoader
	globalObjectName="Hammer"
	src="/hammer.min.js"
	on:failed={() => {
		isHammerLoading = false;
		isHammerError = true;
	}}
	on:loaded={() => {
		isHammerLoading = false;
	}}
/>

<canvas bind:this={nativeCanvas} style="opacity: {showTree ? 1 : 0};" />

{#if isError}
	<p class="text-error">Oups, il y a eu une erreur...</p>
{/if}
{#if isLoading}
	<p>Chargement de l'arbre...</p>
{/if}

{#if showTree}
	<TreeNavigator {fabricCanvas} padding={backgroundPadding} let:isDragging>
		<TreeItems {backgroundPadding} {height} {isDragging} {showItemsId} />
	</TreeNavigator>
	<TreeAuthors />
	<TreePaperVersion />
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
