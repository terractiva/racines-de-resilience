
let hasBeenMoved = false;

// =================================================================================================
// Modal
// =================================================================================================
(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
  const modal = $trigger.dataset.target;
  const $target = document.getElementById(modal);

  $trigger.addEventListener('click', () => {
		if (!hasBeenMoved) $target.classList.add('is-active');
  });
});

(document.querySelectorAll('.modal-close') || []).forEach(($close) => {
  const $target = $close.closest('.modal');

  $close.addEventListener('click', () => {
    $target.classList.remove('is-active');
  });
});

// =================================================================================================
// Déplacement dans l'arbre
// =================================================================================================
require('../vendors/fabric.min');
require('../vendors/hammer.min');

const ZOOM_MIN = 1;
const ZOOM_MAX = 10

const main = document.getElementsByTagName('main')[0];
const canvas = document.getElementsByTagName('canvas')[0];
const treeContainer = document.getElementsByClassName('tree-container')[0];
const fabricCanvas = new window.fabric.StaticCanvas(canvas, { selection: false });

let isMouseDown = false;
let zoom = 1;

updateCanvasSize();
window.addEventListener('resize', () => {
	zoom = 1;

	updateCanvasSize();
	checkAndApplyMovement();
});

treeContainer.addEventListener('mousedown', ({ clientX, clientY }) => {
	onMoveStart(clientX, clientY);
});
treeContainer.addEventListener('touchstart', ({ touches }) => {
	if (touches.length === 1) onMoveStart(touches[0].clientX, touches[0].clientY);
}, { passive: true });

treeContainer.addEventListener('mousemove', ({ clientX, clientY }) => {
	onMoveInProgress(clientX, clientY);
});
treeContainer.addEventListener('touchmove', (event) => {
	event.preventDefault();
	event.stopPropagation();

	if (event.touches.length === 1) onMoveInProgress(event.touches[0].clientX, event.touches[0].clientY);
}, { passive: false });

window.addEventListener('mouseup', onMoveEnd);
window.addEventListener('touchend', onMoveEnd);

function onMoveStart(cursorX, cursorY) {
	isMouseDown = true;
	hasBeenMoved = false;
	treeContainer.style.cursor = 'grabbing';
	fabricCanvas.lastPosX = cursorX;
	fabricCanvas.lastPosY = cursorY;
}

function onMoveInProgress(cursorX, cursorY) {
	if (isMouseDown) {
		hasBeenMoved = true;
		fabricCanvas.viewportTransform[4] += cursorX - fabricCanvas.lastPosX;
		fabricCanvas.viewportTransform[5] += cursorY - fabricCanvas.lastPosY;

		checkAndApplyMovement();
		fabricCanvas.requestRenderAll();

		fabricCanvas.lastPosX = cursorX;
		fabricCanvas.lastPosY = cursorY;
	}
}

function onMoveEnd() {
	treeContainer.style.cursor = 'grab';
	isMouseDown = false;
}

// =================================================================================================
// Zoom dans l'arbre
// =================================================================================================
const ZOOM_INCREMENT = 1;
const ZOOM_TRANSITION_DURATION = 0.1;

const buttonMinus = document.getElementsByClassName('button is-minus')[0];
const buttonPlus = document.getElementsByClassName('button is-plus')[0];
const gestureManager = new window.Hammer.Manager(treeContainer);

let zoomOnPinchStart;

buttonMinus.addEventListener('click', () => {
	treeContainer.style.transition = `transform ease ${ZOOM_TRANSITION_DURATION}s`;

	updateZoom(zoom - ZOOM_INCREMENT);
	setTimeout(() => {
		treeContainer.style.transition = null;
	}, 100 * ZOOM_TRANSITION_DURATION);
});
buttonPlus.addEventListener('click', () => {
	treeContainer.style.transition = `transform ease ${ZOOM_TRANSITION_DURATION}s`;

	updateZoom(zoom + ZOOM_INCREMENT);
	setTimeout(() => {
		treeContainer.style.transition = null;
	}, 100 * ZOOM_TRANSITION_DURATION);
});

treeContainer.addEventListener('wheel', (event) => {
	event.preventDefault();
	event.stopPropagation();

	updateZoom(fabricCanvas.getZoom() * 0.998 ** event.deltaY, { x: event.pageX, y: event.pageY });
}, { passive: false });

gestureManager.add(new window.Hammer.Pinch());
gestureManager.on('pinchstart', () => {
	zoomOnPinchStart = zoom;
});
gestureManager.on('pinch', ({ center, scale }) => {
	updateZoom(zoomOnPinchStart * scale, center);
});

// =================================================================================================
// Fonctions de mise à jour de l'arbre
// =================================================================================================
function checkAndApplyMovement() {
	const vTransform = fabricCanvas.viewportTransform; // vTransform[4] = x, vTransform[5] = y
	const xMax = fabricCanvas.getWidth() * (1 - zoom);
	const yMax = fabricCanvas.getHeight() * (1 - zoom);

	if (vTransform[4] >= 0) vTransform[4] = 0;
	else if (vTransform[4] < xMax) vTransform[4] = xMax;

	if (vTransform[5] >= 0) vTransform[5] = 0;
	else if (vTransform[5] < yMax) vTransform[5] = yMax;

	treeContainer.style.transform = `translate(${vTransform[4]}px, ${vTransform[5]}px) scale(${zoom / ZOOM_MAX})`;
}

function updateCanvasSize() {
	fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]); // Réinitialise le zoom et le déplacement
  fabricCanvas.setDimensions({
		height: main.clientHeight,
		width: main.clientWidth
	});
}

function updateZoom(newZoom, pointToZoom) {
	if (!pointToZoom) {
		pointToZoom = {
			x: fabricCanvas.getCenter().left,
			y: fabricCanvas.getCenter().top
		};
	}
	if (newZoom > ZOOM_MAX) newZoom = ZOOM_MAX;
	if (newZoom < ZOOM_MIN) newZoom = ZOOM_MIN;

	zoom = newZoom;

	fabricCanvas.zoomToPoint(pointToZoom, newZoom);
	checkAndApplyMovement();
}
