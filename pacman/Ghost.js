class Ghost extends MyObject{
  constructor(color, x, y, drawX, drawY, dir){
    super(color, x, y, drawX, drawY, dir);
    this.leftHouse = false;
    this.changedDir = false;
    this.mode = "ghostHouse"
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

  changeDirection(mode){
    var trgt = this.moveMode(mode);
    //console.log(trgt[0], trgt[1]);

    if(this.changedDir == true) {this.changedDir = false; return true;}

    var nextDir = this.dir;
    var min = 1000;
    var distToTarget;

    if (this.dir != 'l' && this.moveIsPossible('r') && this.y == this.drawY){
      distToTarget = distToPacman(this.x+1, this.y, trgt[0], trgt[1]);
      if (distToTarget <= min){min = distToTarget; nextDir = 'r';}
    }
    if (this.dir != 'u' && this.moveIsPossible('d') && this.x == this.drawX){
      distToTarget = distToPacman(this.x, this.y+1, trgt[0], trgt[1]);
      if (distToTarget <= min){min = distToTarget; nextDir = 'd';}
    }
    if (this.dir != 'r' && this.moveIsPossible('l') && this.y == this.drawY){
      distToTarget= distToPacman(this.x-1, this.y, trgt[0], trgt[1]);
      if (distToTarget <= min){min = distToTarget; nextDir = 'l';}
    }
    if (this.dir != 'd' && this.moveIsPossible('u') && this.x == this.drawX){
      distToTarget = distToPacman(this.x, this.y-1, trgt[0], trgt[1]);
      if (distToTarget <= min){min = distToTarget; nextDir = 'u';}
    }

    if (nextDir == this.dir) {return true;}
    else {this.dir = nextDir; this.changedDir = true; return false;}
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

  inHouse(){
    if(this.x < 10 || this.x > 17 ||
       this.y < 12 || this.y > 16) return false;
    return true;
  }

  ghostHouseMode(){
    if(!this.moveIsPossible(this.dir)){
      if(this.dir == 'u') this.dir = 'd';
      else this.dir = 'u';
    }
    return true;
  }

  moveMode(mode){
    if       (mode == "scatter") return this.scatterTile();
    else if  (mode == "chase")   return this.chaseTile();
  }

  move(){
    this.changeMode();
    if (
      (this.mode == "ghostHouse" && this.ghostHouseMode()) ||
      (this.mode == "scatter"    && this.changeDirection("scatter"))  ||
      (this.mode == "chase"      && this.changeDirection("chase"))
      )
      super.move();
    //if (!this.inHouse()) this.leftHouse = true;
    //if (this.changedDir == true) this.changedDir = false;
    //else if (this.changedDirection()) return false;
  }
}
