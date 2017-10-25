var ang = 0;
var angDisplay;
function setup() {
  angDisplay = select('#angle')
  createCanvas(500,500);
  strokeWeight(5);
  ang = createSlider(0,PI,PI/4,0.001);
}

function draw() {
  angDisplay.html(ang.value());
  background(160);
  translate(width/2,height);
  beg = createVector(width/2,height);
  branch(beg,100);
}

function branch(begin,len){
  line(0,0,0,-len);
  if(len > 4){
    push()
    translate(0,-len);
    rotate(ang.value())
    branch(begin,len * 0.67);
    rotate(-2 * ang.value())
    branch(begin,len * 0.67);
    pop()
  }
  
  
  
}