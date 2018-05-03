class Clyde extends Ghost {
  constructor(){
    super(color(255, 180, 78), 15, 14, 15.5, 14, 'u');
  }

  changeMode(){
    if (this.mode == "ghostHouse") return;
    if (distToPacman(this.x, this.y, pmX, pmY) > 8){this.mode = "chase"}
    else this.mode = "scatter";
  }

  scatterTile(){
    return [0, 33];
  }

  chaseTile(){
    return [pmX, pmY];
  }
}
