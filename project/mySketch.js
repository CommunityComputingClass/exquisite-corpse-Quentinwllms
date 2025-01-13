let colors = [
  'rgb(117, 59, 97)',
  'rgb(240, 8, 109)',
  'rgb(89, 150, 103)',
  'rgb(136, 6, 6)',
  'rgb(189, 64, 91)', 
  'rgb(47, 32, 69)',
  'rgb(45, 93, 94)',
  'rgb(113, 222, 180)',
  'rgb(78, 78, 97)',
  'rgb(214, 72, 11)',
  'rgb(242, 222, 177)',
  'rgb(214, 223, 255)',
  'rgb(210, 185, 237)',
  'rgb(209, 235, 195)',
  'rgb(191, 159, 159)'
];
let openTime = [
  2000,
  7500,
  3000,
  5000,
  5100,
  8000,
  8100,
  7000,
  7100,
  9000,
  "wink"
];
let x = 150;
let y = 150;
let w = 86;
let h = 40; 
let pupilChangeX = 0;
let pupilChangeY = 0;

function setup() {
  createCanvas(500, 500);
  background(200);
  angleMode(DEGREES);
  eye();
  openEye();
}

function eye() {
 
  strokeWeight(1.5)

  randomColor = floor(random(0,colors.length));
  fill(colors[randomColor]);
  ellipse(x,y,w,h); // left eye
  
  ellipse(x + 200,y,w,h); //right eye

  fill(0);

  ellipse(x + pupilChangeX,y - pupilChangeY + 5,30,30); //left pupil
  ellipse(x + pupilChangeX + 200,y - pupilChangeY + 5,30,30); //right pupil
  fill(255);
  ellipse(x + pupilChangeX + 5,y - pupilChangeY - 5,5,5); //left highlight
  ellipse(x + pupilChangeX + 205,y - pupilChangeY - 5,5,5); //right highlight
}


function blink () {
  background (200);
  strokeWeight(8);
  line(x-w/2,y,x+w/2,y); //left closed eye
  line(x + 200 - w/2,y,x + 200 + w/2,y); //right closed eye
  
  setTimeout(openEye,205);
}

function openEye () {

  randomOpenTime = [floor(random(0,openTime.length))];
  
  if (openTime[randomOpenTime] == "wink") {
  wink();
    
  setTimeout(openEye,500);
  }
  else {
  background(200);
  pupilChangeX = random(-20,20); //randomizes pupil position in eye
  pupilChangeY = random(1.3,8.1);
  eye();
  
  //console.log(randomOpenTime);
  setTimeout(blink,openTime[randomOpenTime]); //sets timeout randomized from set values in array
    }
}

function wink () {
  background(200);
  strokeWeight(1.5);

 // randomColor = floor(random(0,colors.length));
  fill(colors[randomColor]);
  ellipse(x,y,w,h);
  
  fill(0);
  ellipse(x ,y  ,30,30);
  fill(255);
  ellipse(x+5,y-10,5,5);
  
  strokeWeight(8);
  line(x+157,y,x+243,y-20);
  line(x+157,y,x+243,y+20);
}

