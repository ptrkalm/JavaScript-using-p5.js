var path;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  path = new Array();
  r1 = 100; x1 = 200; y1 = 200;
  sun = new Orbit(x1, y1, r1, null, 0.003);
  next = sun;
  //console.log(next);
  for (var i = 0; i < 10; i++){
    next = next.newChild(next);
    //console.log(next);
  }
}

function draw() {
  background(164, 186, 183);
  sun.show();
  current = sun;
  while (current.child != null){
      current = current.child;
      current.update();
      current.show();
  }
  path.push(createVector(current.x, current.y));

  stroke(84, 24, 42);
  beginShape();
  for (var i = 0; i < path.length; i++){
    vertex(path[i].x, path[i].y);
  }
  endShape();
}
