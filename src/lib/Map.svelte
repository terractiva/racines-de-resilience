<script>
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

	image.src = 'dessin.jpg';

	function draw(scale, x, y) {
		const ratio = image.width / image.height;

		context.clearRect(0, 0, ratio * canvas.height, canvas.height);
		context.scale(scale, scale);
		context.translate(x, y);
		context.drawImage(image, 0, 0, ratio * canvas.height, canvas.height);

		drawItem('Élément', 0.33710829584024, 0.45121951219512196);
		drawItem('Élément', 0.35007399952640306, 0.556910569105691);
		drawItem('Élément', 0.41261445260083673, 0.7540650406504065);
		drawItem('Élément', 0.3470232457178941, 0.7439024390243902);
		drawItem('Élément', 0.21889158576051782, 0.6128048780487805);
		drawItem('Élément', 0.08160766437761466, 0.7764227642276422);
		drawItem('Élément', 0.4766802825795248, 0.37398373983739835);
		drawItem('Élément', 0.7626884521272398, 0.8658536585365854);
		drawItem('Élément', 0.2089766358828637, 0.4949186991869919);
		drawItem('Élément', 0.6658270187070803, 0.3282520325203252);
		drawItem('Élément', 0.7260794064251322, 0.45426829268292684);
		drawItem('Élément', 0.8816678506590891, 0.5955284552845529);
	}

	function drawItem(text, px, py) {
		const fontSize = 14;
		const padding = 4;
		const ratio = image.width / image.height;
		const x = px * ratio * canvas.height;
		const y = py * canvas.height;

		context.font = `normal normal normal ${fontSize}px Arial`;

		const textWidth = context.measureText(text).width;

		context.fillStyle = 'white';
		context.fillRect(x - textWidth / 2, y, textWidth + 2 * padding, fontSize + 2 * padding);
		context.fillStyle = 'black';
		context.fillText(text, x + padding - textWidth / 2, y + padding + fontSize);
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
		draw(1 / 1.1, 0, 0);
	}

	function zoom() {
		draw(1.1, 0, 0);
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
