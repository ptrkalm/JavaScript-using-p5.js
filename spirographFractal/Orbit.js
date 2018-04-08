class Orbit{

  constructor(x, y, r, p, s){
    this.angle = -PI/2;
    this.r = r;
    this.x = x;
    this.y = y;
    this.child = null;
    this.parent = p;
    this.speed = s;
  }

  newChild(parent){
    console.log(parent);
    let newR = this.r / 3;
    let rSum = this.r + newR;
    let newX = this.x + rSum * cos(this.angle);
    let newY = this.y + rSum * sin(this.angle);
    this.child =
      new Orbit(newX, newY, newR, parent, -4 * this.speed);
    return this.child;
  }

  update(){
    if (this.parent != null){
      this.angle += this.speed;

      let rSum = this.parent.r + this.r;
      this.x = this.parent.x + rSum * cos(this.angle);
      this.y = this.parent.y + rSum * sin(this.angle);
    }
  }

  show(){
    noFill();
    stroke(74, 83, 89);
    strokeWeight(1);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }
}
