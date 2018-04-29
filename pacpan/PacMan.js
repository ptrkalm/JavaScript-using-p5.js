class PacMan{
  constructor(){
    this.speed = 1 * mapScale;
    this.size = mapScale * 2 - 10;
    this.x = mapScale;
    this.y = mapScale;
    this.nextDir = 'r';
    this.xDir = 1;
    this.yDir = 1;
    this.currDir = 'x';
    this.color = color(255, 255, 0);
    this.pos = [1, 4];
  }

  moveIsPossible(dir){
    if (dir == 'r' &&
        mapMatrix[this.pos[0]][this.pos[1] + 2] == 0 &&
        mapMatrix[this.pos[0] + 1][this.pos[1] + 2] == 0) return true;
    if (dir == 'l' &&
        mapMatrix[this.pos[0]][this.pos[1] - 1] == 0 &&
        mapMatrix[this.pos[0] + 1][this.pos[1] - 1] == 0) return true;
    if (dir == 'd' &&
        mapMatrix[this.pos[0] + 2][this.pos[1]] == 0 &&
        mapMatrix[this.pos[0] + 2][this.pos[1] + 1] == 0) return true;
    if (dir == 'u' &&
        mapMatrix[this.pos[0] - 1][this.pos[1]] == 0 &&
        mapMatrix[this.pos[0] - 1][this.pos[1] + 1] == 0) return true;
    else return false;
  }

  move(){
    if (this.currDir == 'x'){
      if (this.xDir == 1) var dir = 'r';
      else var dir = 'l';
      if (this.moveIsPossible(dir)){
        this.x = this.x + this.xDir * this.speed;
        this.pos[1] = this.pos[1] + this.xDir;
        if(this.pos[1] == 30){
          this.pos[1] = 3;
          this.x = 0;
        }
        else if (this.pos[1] == 0){
          this.pos[1] = 30;
          this.x = width;
        }
      }
    }
    else{
      if (this.yDir == 1) var dir = 'd';
      else var dir = 'u';
      if (this.moveIsPossible(dir)){
        this.y = this.y + this.yDir * this.speed;
        this.pos[0] = this.pos[0] + this.yDir;
      }
    }
  }

  draw(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  nextDirection(){
    if (keyCode == LEFT_ARROW){
      this.nextDir = 'l';
    }
    else if (keyCode == RIGHT_ARROW){
      this.nextDir = 'r';
    }
    else if (keyCode == UP_ARROW){
      this.nextDir = 'u';
    }
    else if (keyCode == DOWN_ARROW){
      this.nextDir = 'd';
    }
  }

  changeDirection(){
    if(this.x % mapScale == 0 && this.y % mapScale == 0){
      if (this.nextDir == 'l' && this.moveIsPossible('l')){
        this.currDir = 'x';
        this.xDir = -1;
      }
      else if (this.nextDir== 'r' && this.moveIsPossible('r')){
        this.currDir = 'x';
        this.xDir = 1;
      }
      else if (this.nextDir == 'u' && this.moveIsPossible('u')){
        this.currDir = 'y';
        this.yDir = -1;
      }
      else if (this.nextDir == 'd' && this.moveIsPossible('d')){
        this.currDir = 'y';
        this.yDir = 1;
      }
    }
  }
}
