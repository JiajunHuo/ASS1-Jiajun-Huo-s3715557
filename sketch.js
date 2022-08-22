//Computational Prototyping for Industrial Design (2250)
//Assignment 1: Interactive Drawing Tool
//Jiajun Huo s3715557
var cloudxpos;
var on = false;
let starsX = [];
let starsY = [];
var hjj;
var jason = 175;
var mode;
var canvas;
let img;
function preload(){
  img = loadImage('Jiajun Huo portrait.JPG');
}
const numStars = 500;
let stars = [];

function setup() {
  createCanvas(600, 400);
  mode = 0;
  //textSize(21);
   //textSize(30);
  
  cloudxpos = 0;  
  hjj = 0;
  
  for (var i = 0; i < width; i += 20) {
    starsX[i] = random(0, width);
    starsY[i] = random(0, 200);
  }
  
  for(let i = 0; i < numStars; i ++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  
  //text
  clear();
  if (mode==0){
    textSize(35);
    text ('Welcome to Alpine Region',90,100);
    textSize(30);
    text ('Press Enter to start',175,200);
        textSize(17);
    text ('Press Mouse to see Author',198,300);

    textSize(15);
    text ('Jiajun Huo s3715557',230,400);
   //coustom 'brush' 
  if(mouseIsPressed == true){  
   push();
 translate(mouseX,mouseY);
  image(img,0,0,100,100);
  pop();
  }
  }
  if (mode == 1){
    
  
  colorMode(RGB);
  //mousepress nighttime & daytime
  if (on) {
    background(140, 200, 250);
    drawDay();
  } else {
    background(30,100,255);
    background(20, 200);
    drawNight();
    drawStars();
  }
  }
  function drawDay() {
    
    //sun
    noStroke();
    fill(255, 255, 100, 70);
    ellipse(100, 100, 100);
    fill(200, 70, 80, 225);
    ellipse(100, 100, 50, 50);

    //1st W moutain
    fill(225);
    triangle(110, 175, 0, 400, 211, 400);
    //1st mountain
    fill(255, 200);
    triangle(110, 175, 86, 224, 132, 224);
    //2ed mountain
    fill(230);
    triangle(558, 289, 514, 400, 600, 400);
    //4th mountain
    fill(200);
    triangle(224, 225, 145, 400, 305, 400);
    //3rd mountain
    fill(180);
    triangle(416, 132, 272, 400, 540, 400);
    //3rd W mountain
    fill(255, 200);
    triangle(416, 132, 367, 224, 459, 224);

    //cloudMove
    cloudxpos = cloudxpos + 1;

    if (cloudxpos > width + 30) {
      cloudxpos = -600;
    }
    translate(cloudxpos, 0);
    //translate(cloudxpos, 0)

    push();
    //2nd cloud
    noStroke();
    fill(255);
    circle(243, 112, 50);
    circle(248, 88, 50);
    circle(279, 121, 50);
    circle(283, 89, 50);
    circle(313, 115, 50);
    circle(315, 92, 50);

    //3rd cloud
    noStroke();
    circle(458, 50, 50);
    circle(473, 74, 50);
    circle(498, 49, 50);
    circle(515, 72, 50);
    circle(436, 77, 50);
    circle(528, 54, 50);

    //1st cloud
    circle(49, 27, 50);
    circle(30, 50, 50);
    circle(50, 60, 50);
    circle(79, 39, 50);
    circle(85, 65, 50);
    circle(112, 51, 50);
    pop();
  }
}

function drawNight() {
  //star flash
  fill(255, 255, 0);
  noStroke();
  if (frameCount % 80 == 0) {
    ellipse(random(width), random(200), 5, 5);
    ellipse(random(width), random(200), 5, 5);
    ellipse(random(width), random(150), 5, 5);
    ellipse(random(width), random(150), 5, 5);
    ellipse(random(width), random(150), 5, 5);
  }

  //star normal
  fill(jason, jason, hjj);
  ellipse(200, 75, 5);
  ellipse(30, 85, 5);
  ellipse(150, 20, 5);
  ellipse(100, 150, 5);
  ellipse(300, 35, 5);
  ellipse(400, 135, 5);
  ellipse(450, 45, 5);
  ellipse(530, 125, 5);
  ellipse(500, 10, 5);

  //moon
  fill(240, 165, 0);
  ellipse(130, 60, 50);

  //nightcloud
  //2nd cloud
  noStroke();
  fill(200);
  circle(243, 112, 50);
  circle(248, 88, 50);
  circle(279, 121, 50);
  circle(283, 89, 50);
  circle(313, 115, 50);
  circle(315, 92, 50);

  //3rd coclouduld
  noStroke();
  circle(458, 50, 50);
  circle(473, 74, 50);
  circle(498, 49, 50);
  circle(515, 72, 50);
  circle(436, 77, 50);
  circle(528, 54, 50);

  //1st cloud
  circle(49, 27, 50);
  circle(30, 50, 50);
  circle(50, 60, 50);
  circle(79, 39, 50);
  circle(85, 65, 50);
  circle(112, 51, 50);

  //1st moutain
  fill(145);
  triangle(110, 175, 0, 400, 211, 400);
  //1st w mountain
  fill(235, 200);
  triangle(110, 175, 86, 224, 132, 224);
  //2ed mountain
  fill(125);
  triangle(558, 289, 514, 400, 600, 400);
  //4th mountain
  fill(110);
  triangle(224, 225, 145, 400, 305, 400);
  //3rd mountain
  fill(95);
  triangle(416, 132, 272, 400, 540, 400);
  //3rd W mountain
  fill(235, 200);
  triangle(416, 132, 367, 224, 459, 224);

  cloudxpos = false;
}

function mousePressed() {
  on = !on;
}
//snowing
function drawStars() {
  const acc = map(mouseX, 0, width, 0.005, 0.2);

  stars = stars.filter((star) => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });

  while (stars.length < numStars) {
    stars.push(new Star(random(width), random(height)));
  }
}


class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);

    this.vel = createVector(0, 0);

    this.ang = atan2(y + width, x + height);
  }

  isActive() {
    return onScreen(this.prevPos.x, this.prevPos.y);
  }

  update(acc) {
    this.vel.y += sin(this.ang) * acc;

    this.prevPos.y = this.pos.y;

    this.pos.y += this.vel.y;
  }

  draw() {
    const alpha = map(this.vel.mag(), 0, 3, 0, 255);
    stroke(255, alpha);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}

function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;
}
  
function keyPressed(){
  if (keyCode === ENTER){
    mode = 1;
  }
}