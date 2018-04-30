class Ghost extends MyObject{
  constructor(name, color, x, y, drawX, drawY, dir){
    super(color, x, y, drawX, drawY, dir);
    this.name = name;
    this.leftHouse = false;
    this.changedDir = false;
  }

  moveIsPossible(dir){

    if (dir == 'r'){
      if(maze[this.y][this.x+1] != '#' && (maze[this.y][this.x+1] != '-' || this.leftHouse == false)) return true;
    }
    if (dir == 'l'){
      if(maze[this.y][this.x-1] != '#' && (maze[this.y][this.x-1] != '-' || this.leftHouse == false)) return true;
    }
    if (dir == 'u'){
      if(maze[this.y-1][this.x] != '#' && (maze[this.y-1][this.x] != '-' || this.leftHouse == false)) return true;
    }
    if (dir == 'd'){
      if(maze[this.y+1][this.x] != '#' && (maze[this.y+1][this.x] != '-' || this.leftHouse == false)) return true;
    }
    return false;
  }

  changeDirection(){
    console.log(this.dir);
    var x, y;
    if (this.name == "Blinky"){x = pmX; y = pmY};
    if (this.name == "Pinky"){
      if      (pmDir == 'r'){x = pmX + 4; y = pmY;}
      else if (pmDir == 'l'){x = pmX - 4; y = pmY;}
      else if (pmDir == 'u'){x = pmX; y = pmY - 4;}
      else if (pmDir == 'd'){x = pmX; y = pmY + 4;}
    }
    if (this.name == "Clyde"){
      if (distToPacman(this.x, this.y, pmX, pmY) > 8){x = pmX, y = pmY}
      else {x = 0; y = 33};
    }
    var nextDir = this.dir;
    var min = 1000;
    var distToPM;
    if (this.dir != 'l' && this.moveIsPossible('r') && this.y == this.drawY){
      distToPM = distToPacman(this.x+1, this.y, x, y);
      if (distToPM <= min){min = distToPM; nextDir = 'r';}
    }
    if (this.dir != 'u' && this.moveIsPossible('d') && this.x == this.drawX){
      distToPM = distToPacman(this.x, this.y+1, x, y);
      if (distToPM <= min){min = distToPM; nextDir = 'd';}
    }
    if (this.dir != 'r' && this.moveIsPossible('l') && this.y == this.drawY){
      distToPM= distToPacman(this.x-1, this.y, x, y);
      if (distToPM <= min){min = distToPM; nextDir = 'l';}
    }
    if (this.dir != 'd' && this.moveIsPossible('u') && this.x == this.drawX){
      distToPM = distToPacman(this.x, this.y-1, x, y);
      if (distToPM <= min){min = distToPM; nextDir = 'u';}
    }

    if(nextDir != this.dir) {this.dir = nextDir; this.changedDir = true; return true;}
    return false;
  }

  atIntersection(){
    if (this.atInter) {this.atInter = false; return false;}
    var poss = 0;
    if(this.dir != 'l' && this.moveIsPossible('r')) poss++;
    if(this.dir != 'r' && this.moveIsPossible('l')) poss++;
    if(this.dir != 'd' && this.moveIsPossible('u')) poss++;
    if(this.dir != 'u' && this.moveIsPossible('d')) poss++;
    if(poss > 1){this.atInter = true; return true;}
    return false;
  }

  changedDirection(){
    if(!this.atIntersection()) return false;
    updatePMPos();
    return this.changeDirection(pmX, pmY);
  }

  inHouse(){
    if(this.x < 10 || this.x > 17 ||
       this.y < 12 || this.y > 16) return false;
    return true;
  }

  move(){
    if (!this.inHouse()) this.leftHouse = true;
    if (this.changedDir == true) this.changedDir = false;
    else if (this.changedDirection()) return false;
    super.move();
  }
}
