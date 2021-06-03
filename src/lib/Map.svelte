<script>
	/**
	 * @see http://fabricjs.com/fabric-intro-part-5#pan_zoom
	 */
	import { fabric } from 'fabric';
	import { ZOOM_MAX } from '../helpers/constants';
	import { onDestroy, onMount } from 'svelte';
	import actions from '../helpers/actions';
	import { writable } from 'svelte/store';

	/** @type HTMLCanvasElement */
	let canvas;
	/** @type {import('@types/fabric').fabric.StaticCanvas} */
	let fabricCanvas;
	let gutterX = writable(0)
	let gutterY = writable(0)
	let width = writable(0)
	let height = writable(0)

	onMount(() => {
		fabricCanvas = new fabric.Canvas(canvas, {
			defaultCursor: 'grab',
			hoverCursor: 'pointer',
			selection: false
		});

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		fabricCanvas.setBackgroundImage('arbre.jpg', drawBackgroundImage);

		fabricCanvas.on('mouse:down', onMouseDown.bind(this));
		fabricCanvas.on('mouse:move', onMouseMove.bind(this));
		fabricCanvas.on('mouse:up', onMouseUp.bind(this));
		fabricCanvas.on('mouse:wheel', onMouseWheel.bind(this));
	});

	onDestroy(() => {
		fabricCanvas.off('mouse:down', onMouseDown.bind(this));
		fabricCanvas.off('mouse:move', onMouseMove.bind(this));
		fabricCanvas.off('mouse:up', onMouseUp.bind(this));
		fabricCanvas.off('mouse:wheel', onMouseWheel.bind(this));
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

	function drawActions() {
		for (const action of actions) {
			const left = $gutterX + action.position[0] * (fabricCanvas.getWidth() - 2 * $gutterX) / 100;
			const top = $gutterY + action.position[1] * (fabricCanvas.getHeight() - 2 * $gutterY) / 100;
			const radius = action.rayon * (fabricCanvas.getWidth() - 2 * $gutterX) / 100;

			// Texte
			const text = new fabric.Text(action.texte, {
				fontFamily: 'Calibri',
				fontSize: 5,
				fontWeight: 500,
				lineHeight: 1,
				textAlign: 'center',
				originX: 'center',
				originY: 'center',
				top: top + radius,
				selectable: false,
				left: left + radius
			});

			// Cercle
			// TODO: edit mode
			const circle = new fabric.Circle({
				left,
				top,
				radius,
				selectable: false,
				opacity: 0,
				data: action.texte
			});

			circle.on('modified', (event) => {
				const radius = 100 * event.target.radius * event.target.scaleX / (fabricCanvas.getWidth() - 2 * $gutterX);
				const left = 100 * (event.target.left - $gutterX) / (fabricCanvas.getWidth() - 2 * $gutterX);
				const top = 100 * (event.target.top - $gutterY) / (fabricCanvas.getHeight() - 2 * $gutterY);

				console.log(`{
					position: [${left.toFixed(2)}, ${top.toFixed(2)}],
					rayon: ${radius.toFixed(2)},
					sources: \`\`,
					texte: \`\`
				}`)
			})

			fabricCanvas.add(text);
			fabricCanvas.add(circle);
		}
	}

	function drawBackgroundImage() {
		const backgroundImage = fabricCanvas.backgroundImage;
		const imageRatio = backgroundImage.width / backgroundImage.height;
		const canvasRatio = fabricCanvas.getWidth() / fabricCanvas.getHeight();

		if (imageRatio < canvasRatio) {
			backgroundImage.scaleToHeight(fabricCanvas.getHeight());
			gutterX.set((fabricCanvas.getWidth() - backgroundImage.getScaledWidth()) / 2);
		}
		if (imageRatio > canvasRatio) {
			backgroundImage.scaleToWidth(fabricCanvas.getWidth());
			gutterY.set((fabricCanvas.getHeight() - backgroundImage.getScaledHeight()) / 2);
		}

		drawActions();
		backgroundImage.center();
		fabricCanvas.renderAll();
	}

	function onMouseDown(event) {
		if (event.target) {
			fabricCanvas.isDragging = false;
		} else {
			const x = event.e instanceof MouseEvent ? event.e.clientX : event.e.touches[0].clientX;
			const y = event.e instanceof MouseEvent ? event.e.clientY : event.e.touches[0].clientY;

			fabricCanvas.isDragging = true;
			fabricCanvas.selection = false;
			fabricCanvas.lastPosX = x;
			fabricCanvas.lastPosY = y;
			fabricCanvas.setCursor('grabbing');
		}
	}
	function onMouseMove({ e: event }) {
		if (
			fabricCanvas.isDragging &&
			(event instanceof MouseEvent || (event instanceof TouchEvent && event.touches.length === 1))
			) {
			const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
			const y = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
				
			fabricCanvas.viewportTransform[4] += x - fabricCanvas.lastPosX;
			fabricCanvas.viewportTransform[5] += y - fabricCanvas.lastPosY;
			checkBoundaries();
			fabricCanvas.setCursor('grabbing');
			fabricCanvas.requestRenderAll();
			fabricCanvas.lastPosX = x;
			fabricCanvas.lastPosY = y;

			if (event instanceof TouchEvent) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
	}
	function onMouseUp(event) {
		fabricCanvas.selection = false;

		if (event.target) {
			alert(`Ouvrir "${event.target.data.split('\n').join(' ')}"`);
		}
		else if (fabricCanvas.isDragging) {
			fabricCanvas.setViewportTransform(fabricCanvas.viewportTransform);
			fabricCanvas.isDragging = false;
			fabricCanvas.setCursor('grab');
		}
	}

	function onMouseWheel({ e: event }) {
		updateZoom(event.deltaY, event.offsetX, event.offsetY);
		event.preventDefault();
		event.stopPropagation();
	}

	function resizeCanvas() {
		height.set(window.innerHeight)
		width.set(window.innerWidth)
		fabricCanvas.setDimensions({
			height: window.innerHeight,
			width: window.innerWidth
		});
	}

	function updateZoom(delta, x = fabricCanvas.getWidth() / 2, y = fabricCanvas.getHeight() / 2) {
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

<canvas bind:this={canvas} />
{#if fabricCanvas}
	<div class="actions">
		{#each actions as action}
			<div style="
				left: {$gutterX + action.position[0] * ($width - 2 * $gutterX) / 100}px;
				top: {$gutterY + action.position[1] * ($height - 2 * $gutterY) / 100}px;
				height: {action.rayon * ($width - 2 * $gutterX) / 50}px;
				width: {action.rayon * ($width - 2 * $gutterX) / 50}px;
			">
				{action.texte}
			</div>
		{/each}
	</div>
{/if}

<div class="zoom">
	<button type="button" on:click={() => updateZoom(-150)}>+</button>
	<button type="button" on:click={() => updateZoom(150)}>-</button>
</div>

<style lang="scss">
	.actions {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;

		& > div {
			position: absolute;
			overflow: hidden;
			background: pink;
			opacity: 0.4;
			border-radius: 50%;
		}
	}

	.zoom {
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
