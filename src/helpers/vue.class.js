class Vue {
  constructor(largeur, hauteur) {
    this._hauteur = hauteur;
    this._largeur = largeur;
    this._x = 0;
    this._y = 0;
  }

  calculerDecalageX(decalage, zoom) {
    const nouveauX = this._x - decalage;

    if (0 <= nouveauX && (nouveauX + this._largeur / zoom) <= this._largeur) {
      this._x = nouveauX;

      return decalage
    }

    return 0;
  }

  calculerDecalageY(decalage, zoom) {
    const nouveauY = this._y - decalage;

    if (0 <= nouveauY && (nouveauY + this._hauteur / zoom) <= this._hauteur) {
      this._y = nouveauY;

      return decalage
    };

    return 0;
  }
}

export default Vue;