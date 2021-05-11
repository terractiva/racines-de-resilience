import { ZOOM_MAX } from './constants';
class Vue {
  constructor(largeurCanvas, hauteurCanvas) {
    this._hauteurCanvas = hauteurCanvas;
    this._largeurCanvas = largeurCanvas;
    this._x = null;
    this._y = null;
    this._zoom = null;
    this._zoomMin = null;
  }

  get _hauteurVue() {
    return this._hauteurCanvas / this._zoom;
  }

  get _largeurVue() {
    return this._hauteurCanvas / this._zoom;
  }

  calculerChangementX(changement) {
    const nouveauX = this._x - changement;

    if (0 <= nouveauX && (nouveauX + this._largeurVue) <= this._largeur) {
      this._x = nouveauX;

      return changement
    }

    return 0;
  }

  calculerDecalageY(decalage) {
    const nouveauY = this._y - decalage;

    if (0 <= nouveauY && (nouveauY + this._hauteurVue) <= this._hauteur) {
      this._y = nouveauY;

      return decalage
    };

    return 0;
  }

  calculerChangementZoom(changement) {
    if (this._zoom === null) {
      this._zoom = changement;
      this._zoomMin = changement;

      return changement;
    }

    const nouveauZoom = this._zoom * changement;

    if (nouveauZoom < this._zoomMin) {
      this._zoom = this._zoomMin;

      return this._zoomMin / this._zoom;
    }
    if (nouveauZoom > ZOOM_MAX) {
      this._zoom = ZOOM_MAX;

      return ZOOM_MAX / this._zoom;
    }

    this._zoom = nouveauZoom;

    return changement;
  }
}

export default Vue;