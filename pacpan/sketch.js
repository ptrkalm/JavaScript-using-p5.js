var pacman;
var pickups;
var mapScale = 20;

function setup() {
  frameRate(20);
  width = 27 * mapScale;
  height = 30 * mapScale;
  createCanvas(width, height);
  pacman = new PacMan();
  createPickUps();
}

function keyPressed(){
  pacman.nextDirection();
}

function createPickUps(){
  pickups = new Array();
  for (let i = 0; i < 11; i++){
    pickups.push(new PickUp(50 + 50*i, 100));
  }
}

function processPickUps(){
  for (let i = 0; i < pickups.length; i++){
    pickups[i].pickup(pacman.x, pacman.y, pacman.size);
    pickups[i].draw();
  }
}

function drawMap(){
  stroke(0,0, 255, 255);
  noFill(0);
  for (var i = 0; i < mapData.rects.length; i++){
    rect(mapData.rects[i].x * mapScale, mapData.rects[i].y * mapScale,
         mapData.rects[i].width * mapScale, mapData.rects[i].height * mapScale);
  }
  for (var i = 0; i < mapData.others.length; i++){
    beginShape();
    for (var j = 0; j < mapData.others[i].length; j++){
      vertex(mapData.others[i][j][0] * mapScale, mapData.others[i][j][1] * mapScale);
    }
    endShape();
  }
}

function draw() {
  background(0);
  //processPickUps();
  drawMap();
  pacman.draw();
  pacman.changeDirection();
  pacman.move();
}
