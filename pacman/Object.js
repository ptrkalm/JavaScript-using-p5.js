class MyObject {
  constructor(color, x, y, drawX, drawY, dir){
    this.color = color;
    this.x = x; this.y = y;
    this.drawX = drawX; this.drawY = drawY;
    this.dir = dir;
  }

  draw(){
    fill(this.color);
    rect(4 + this.drawX * 8, 4 + this.drawY * 8, 8, 8);
  }

  move(){
    //console.log(this.dir);
    if (this.moveIsPossible(this.dir))
    {
      if      (this.dir == 'r') {this.drawX += 0.5; if(Math.floor(this.drawX) == this.drawX) this.x = this.drawX;}
      else if (this.dir == 'l') {this.drawX -= 0.5; if(Math.floor(this.drawX) == this.drawX) this.x = this.drawX;}
      else if (this.dir == 'u') {this.drawY -= 0.5; if(Math.floor(this.drawY) == this.drawY) this.y = this.drawY;}
      else if (this.dir == 'd') {this.drawY += 0.5; if(Math.floor(this.drawY) == this.drawY) this.y = this.drawY;}
      if      (this.x == 29) {this.x = 0; this.drawX = 0;}
      else if (this.x == -1) {this.x = 28; this.drawX = 28;}
    }
  }
}
