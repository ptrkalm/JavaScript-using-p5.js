var pacman;
var pmX = 13;
var pmY = 23;
var pmDir = 'l';

function setup() {
  frameRate(10);
  createCanvas(224, 248);
  rectMode(CENTER);
  pacman = new Pacman(color(255, 255, 0), 13, 23, 13.5, 23, 'l');
  //blinky = new Ghost("Blinky", color(255, 0, 0), 13, 11, 13.5, 11, 'l');
  //inky = new Ghost("Inky", color(0, 255, 255), 11, 14, 11.5, 14, 'u');
  //pinky = new Ghost("Pinky", color(255, 180, 255), 13, 14, 13.5, 14, 'u');
  //clyde = new Clyde();
  blinky = new Blinky();
}

function drawMaze(){
  //noStroke();
  for (var x = 0; x < 31; x++)
    for (var y = 0; y < 28; y++){
      if      (maze[x][y] == '#'){
        fill(0, 0, 255);
        rect(4 + y * 8, 4 + x * 8, 8, 8);
      }
    /*  else if (maze[x][y] == '.'){
        fill(255, 175, 175);
        rect(4 + y * 8, 4 + x * 8, 3, 3);
      }*/
    /*  else if (maze[x][y] == 'o'){
        fill(255, 175, 175);
        rect(4 + y * 8, 4 + x * 8, 5, 5);
      }*/
      else if (maze[x][y] == '-'){
        fill(255, 175, 175);
        rect(4 + y * 8, 4 + x * 8, 8, 8);
      }
    }
}
function keyPressed(){
  pacman.nextDirection();
}

function updatePMPos(){
  pmX = pacman.x;
  pmY = pacman.y;
  pmDir = pacman.dir;
}

function processGhosts(){
  processBlinky();
  //processInky();
  //processPinky();
  //processClyde();
}

function processBlinky(){
  blinky.draw();
  blinky.move();
}
function processInky(){
  inky.draw();
  if(!inky.move()) inky.changeDirection(pacman.x, pacman.y);
}
function processPinky(){
  pinky.draw();
  if(!pinky.move()) pinky.changeDirection(pacman.x, pacman.y);
}
function processClyde(){
  clyde.draw();
  clyde.move();
}

function draw(){
  background(0);
  drawMaze();
  processGhosts();
  pacman.draw();
  pacman.move();
}
