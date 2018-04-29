class PickUp{
  constructor(x, y){
    this.size = 6;
    this.x = x;
    this.y = y;
    this.color = color(255);
    this.valid = 1;
  }

  draw(){
    if (this.valid){
      noStroke();
      strokeWeight(2);
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    }
  }

  pickup(x, y, size){
    let distance = sqrt(pow(x - this.x, 2) + pow(y - this.y, 2));
    if (distance < size/2 + this.size/2 && this.valid == 1){
      this.valid = 0;
      countScore(10);
    }
  }
}
