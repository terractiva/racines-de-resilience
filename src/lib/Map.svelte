<script>
	import Vue from '../helpers/vue.class.js';
	import { onDestroy } from 'svelte';
	import gestes from '../contenus/gestes.js';

	let vue;
	let canvas;
	let context;
	let minZoom;
	let x = 0;
	let y = 0;
	let zoom = 1;
	const image = new Image();
	const maxZoom = 6;

	image.onload = () => {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');

		canvas.height = document.body.clientHeight;
		canvas.width = document.body.clientWidth;
		canvas.addEventListener('mousedown', onMouseDown);

		const canvasRatio = canvas.width / canvas.height;
		const imageRatio = image.width / image.height;
		const dx = canvasRatio < imageRatio ? 0 : canvas.width - imageRatio * canvas.height;
		const dy = canvasRatio < imageRatio ? canvas.height - canvas.width / imageRatio : 0;

		minZoom = canvasRatio < imageRatio ? canvasRatio / imageRatio : 1;
		vue = new Vue(canvas.width, canvas.height);

		draw(minZoom, dx / 2, dy / 2, true);
	};

	// Déclenche le chargement
	image.src = 'arbre.jpg';

	onDestroy(() => {
		canvas.removeEventListener('mousedown', onMouseDown);
	});

	function draw(scale, dx, dy, initialDraw = false) {
		const ratio = image.width / image.height;
		const newZoom = scale * zoom;

		// On empêche de trop (dé)zoomer
		if (minZoom <= newZoom && newZoom <= maxZoom) zoom = newZoom;
		else return;

		const scaledDx = initialDraw ? dx / zoom : vue.calculerDecalageX(dx / zoom, zoom);
		const scaledDy = initialDraw ? dy / zoom : vue.calculerDecalageY(dy / zoom, zoom);

		context.clearRect(0, 0, ratio * canvas.height, canvas.height);
		context.scale(scale, scale);
		context.translate(scaledDx, scaledDy);
		context.drawImage(image, 0, 0, ratio * canvas.height, canvas.height);

		for (const geste of gestes) {
			drawItem(geste.position[0], geste.position[1], geste.texte, geste.sources);
		}
	}

	function drawItem(px, py, texte, sources) {
		const taillePolice = 5;
		const ecartLigne = 1;
		const ecartHautBas = 8;
		const nbLignes = texte.length + sources.length + 1;
		const diametre = taillePolice * nbLignes + ecartLigne * (nbLignes - 1) + ecartHautBas * 2;
		const ratio = image.width / image.height;
		const x = px * ratio * canvas.height;
		const y = py * canvas.height;

		// Cercle
		context.beginPath();
		context.arc(x, y, diametre / 2, 0, 2 * Math.PI, false);
		context.fillStyle = 'rgba(255, 255, 255, 0.8)';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#7C6962';
		context.stroke();

		// Texte
		// const largeurText = context.measureText(text).width;
		let position = y - diametre / 2 + ecartHautBas + taillePolice - 2;

		for (let nLigne = 0; nLigne < nbLignes; nLigne++) {
			let couleur = 'black';
			let ligne = texte[nLigne];

			if (texte.length <= nLigne) {
				couleur = '#7C6962';
				ligne = nLigne === texte.length ? '⌄' : sources[nLigne - texte.length - 1];
			}

			context.fillStyle = couleur;
			context.font = `normal normal normal ${taillePolice}px Arial`;
			context.textAlign = 'center';
			// context.fillText(ligne, x - largeurText / 2, y + taillePolice);
			context.fillText(ligne, x, position);

			position += taillePolice + ecartLigne;
		}
	}

	function onMouseDown(event) {
		const ratio = image.width / image.height;

		console.log(`${event.offsetX / (ratio * canvas.height)}, ${event.offsetY / canvas.height}`);
	}

	function goDown() {
		draw(1, 0, -50);
	}

	function goLeft() {
		draw(1, 50, 0);
	}

	function goRight() {
		draw(1, -50, 0);
	}

	function goUp() {
		draw(1, 0, 50);
	}

	function zoomIn() {
		draw(1.1, 0, 0);
	}

	function zoomOut() {
		draw(1 / 1.1, 0, 0);
	}
</script>

<div class="scale">
	<button type="button" on:click={zoomOut}>-</button>
	<button type="button" on:click={zoomIn}>+</button>
</div>

<div class="move">
	<button type="button" on:click={goLeft}>&larr;</button>
	<button type="button" on:click={goRight}>&rarr;</button>
	<button type="button" on:click={goUp}>&uarr;</button>
	<button type="button" on:click={goDown}>&darr;</button>
</div>

<canvas id="canvas" />

<style lang="scss">
	div {
		position: absolute;
		right: 10px;

		&.scale {
			top: 10px;
		}

		&.move {
			bottom: 10px;
		}
	}
</style>
