<script>
	import { text } from 'svelte/internal';

	import gestes from '../contenus/gestes.js';

	let canvas;
	let context;
	const image = new Image();

	image.onload = () => {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');

		canvas.height = document.body.clientHeight;
		canvas.width = document.body.clientWidth;

		canvas.addEventListener('mousedown', onMouseDown);

		draw(1, 0, 0);
	};

	image.src = 'arbre.jpg';

	function draw(scale, x, y) {
		const ratio = image.width / image.height;

		context.clearRect(0, 0, ratio * canvas.height, canvas.height);
		context.scale(scale, scale);
		context.translate(x, y);
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

	function unzoom() {
		draw(1 / 1.2, 0, 0);
	}

	function zoom() {
		draw(1.2, 0, 0);
	}
</script>

<div class="scale">
	<button type="button" on:click={unzoom}>-</button>
	<button type="button" on:click={zoom}>+</button>
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
