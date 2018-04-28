var pacman;
var pickups;

function setup() {
  createCanvas(600, 600);
  pacman = new PacMan();
  createPickUps();
}

function keyPressed(){
  pacman.updateDirection();
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

function draw() {
  background(0);
  processPickUps();
  pacman.draw();
  pacman.move();
}
