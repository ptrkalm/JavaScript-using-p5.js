var pacman;
var pickups;
var mapScale = 18;

function setup() {
  frameRate(12);
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
  for (var i = 0; i < 26; i++)
    for (var j = 0; j < 29; j++){
      if (pickupsMatrix[j][i] == 1){
        pickups.push(new PickUp(mapScale * (1 + i), mapScale * (1 + j)));
      }
    }
}

function countScore(points){
  let score = document.getElementById("score").innerHTML;
  console.log(score);
  document.getElementById("score").innerHTML =
  String(Number(score) + points);
}

function processPickUps(){
  for (let i = 0; i < pickups.length; i++){
    pickups[i].pickup(pacman.x, pacman.y, pacman.size);
    pickups[i].draw();
  }
}

function drawMap(){
  background(0);
  fill(0);
  stroke(0, 0, 255);
  strokeWeight(2);
  rect(0, 0, width - 1, height - 1)
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
  stroke(0);
  for (var i = 0; i < mapData.gaps.length; i++){
    line(mapData.gaps[i].x1 * mapScale-1, mapData.gaps[i].y1 * mapScale,
         mapData.gaps[i].x2 * mapScale-1, mapData.gaps[i].y2 * mapScale);
  }
  for (var i = 0; i < mapData.gaps.length; i++){
    line(mapData.gaps[i].x1 * mapScale, mapData.gaps[i].y1 * mapScale,
         mapData.gaps[i].x2 * mapScale, mapData.gaps[i].y2 * mapScale);
  }
}

function draw() {
  drawMap();
  processPickUps();
  pacman.draw();
  pacman.changeDirection();
  pacman.move();
}
