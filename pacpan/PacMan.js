class PacMan{
  constructor(){
    this.speed = 3;
    this.size = 30;
    this.x = width/2;
    this.y = height/2;
    this.xDir = this.speed;
    this.yDir = this.speed;
    this.currDir = 'x';
    this.color = color(255, 255, 0);
  }

  move(){
    if (this.currDir == 'x'){
      this.x += this.xDir;
      if(this.x > width - this.size/2)
        this.x -= this.speed;
      else if(this.x < this.size/2)
        this.x += this.speed;
    }
    else{
      this.y += this.yDir;
      if(this.y > height - this.size/2)
        this.y -= this.speed;
      else if(this.y < this.size/2)
        this.y += this.speed;
    }
  }
  draw(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
  updateDirection(){
    if (keyCode == LEFT_ARROW){
      this.currDir = 'x';
      this.xDir = -this.speed;
    }
    else if (keyCode == RIGHT_ARROW){
      this.currDir = 'x';
      this.xDir = this.speed;
    }
    else if (keyCode == UP_ARROW){
      this.currDir = 'y';
      this.yDir = -this.speed;
    }
    else if (keyCode == DOWN_ARROW){
      this.currDir = 'y';
      this.yDir = this.speed;
    }
  }
}
