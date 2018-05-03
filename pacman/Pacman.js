class Pacman extends MyObject {
  constructor(color, x, y, drawX, drawY, dir){
    super(color, x, y, drawX, drawY, dir);
    this.nextDir = this.dir;
  }

  moveIsPossible(dir){
    if (dir == 'r'){
      if(maze[this.y][this.x+1] != '#' && maze[this.y][this.x+1] != '-') return true;
    }
    if (dir == 'l'){
      if(maze[this.y][this.x-1] != '#' && maze[this.y][this.x-1] != '-') return true;
    }
    if (dir == 'u'){
      if(maze[this.y-1][this.x] != '#' && maze[this.y-1][this.x] != '-') return true;
    }
    if (dir == 'd'){
      if(maze[this.y+1][this.x] != '#' && maze[this.y+1][this.x] != '-') return true;
    }
    return false;
  }

  nextDirection(){
    if      (keyCode == RIGHT_ARROW)  this.nextDir = 'r';
    else if (keyCode == LEFT_ARROW)   this.nextDir = 'l';
    else if (keyCode == UP_ARROW)     this.nextDir = 'u';
    else if (keyCode == DOWN_ARROW)   this.nextDir = 'd';
  }

  changeDirection(){
    if      (this.nextDir == 'r' && this.moveIsPossible('r') && this.y == this.drawY) this.dir = 'r';
    else if (this.nextDir == 'l' && this.moveIsPossible('l') && this.y == this.drawY) this.dir = 'l';
    else if (this.nextDir == 'u' && this.moveIsPossible('u') && this.x == this.drawX) this.dir = 'u';
    else if (this.nextDir == 'd' && this.moveIsPossible('d') && this.x == this.drawX) this.dir = 'd';
  }

  move(){
    this.changeDirection();
    super.move();
    updatePMPos();
  }

}
