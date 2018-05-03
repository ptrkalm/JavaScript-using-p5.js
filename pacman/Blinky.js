class Blinky extends Ghost {
  constructor(){
    super(color(255, 0, 0), 13, 11, 13.5, 11, 'l');
    this.leftHouse = true;
    this.mode = "chase";
  }

  changeMode(){
    return;
  }

  scatterTile(){
    return [27, 33];
  }

  chaseTile(){
    return [pmX, pmY];
  }

  move(){
    super.move();
    console.log(this.x);
  }
}
