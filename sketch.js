const url_string = window.location.href;
let url = new URL(url_string);

let imgs = [];

let button;
let slider;

let sticker;
let sticker2;

let sfondo1;
let sfondo2;

let x = 0;

function preload() {
  //make an array of images in order to create a gif
  //load all images of my array
  for (var i = 1; i < 8; i++) {
    imgs[i] = loadImage("./assets/" + i + ".png");
  }

  sfondo1 = loadImage("./assets/imperatore.png");
  sfondo2 = loadImage("./assets/donnina.png");

  sticker = loadImage("./assets/sticker.gif");
  sticker2 = loadImage("./assets/sticker2.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a button
  button = createButton("read your fortune<br>>^.^<");
  button.position(
    windowWidth / 2 - button.width / 2,
    windowHeight / 1.1 - button.height / 2
  );
  button.style("background-color", "#ffc50a");
  button.style("color", "black");
  button.hide();

  //recall the function "risultati" when click on my button
  button.mouseClicked(risultati);

  // make a slider to control my gif
  //min: It holds the minimum value of the slider.
  //max: It holds the maximum value of the slider.
  //value: It holds the default value of the slider.
  //step: It holds the step size of the slider.
  slider = createSlider(1, 7, 0).class("slider");
  slider.position(
    windowWidth / 2 - slider.width / 2,
    windowHeight / 1.33 - slider.height / 2
  );
}

//make a function lets me moving to the next page
function risultati() {
  window.open(url + "result.html", "_self");
}

function draw() {
  background("#fbfbfb");

  //title
  var myText = "THIS IS YOUR LUCKY DAY !";
  textFont("Spicy Rice");
  textAlign(CENTER);
  textSize(130);
  fill("white");
  stroke("black");
  strokeWeight(4);
  text(myText, width / 2, height / 6);

  imageMode(CENTER);

  //set i as the value of the slider
  //the value of the slider sets the number of the image
  i = slider.value();
  image(imgs[i], windowWidth / 2, (windowHeight / 7) * 3, 800, 800);

  if (i == 7) {
    button.show();
  }

  //text instruction
  var instruction = "★ slide to crack the fortune cookie ★";
  textFont("Varela Round");
  textAlign(CENTER);
  textSize(25);
  fill("black");
  noStroke();
  text(instruction, width / 2, height / 1.5);

  push();
  imageMode(CORNER);
  image(sticker, 30, height - 260, 230, 230);
  image(sticker2, width - 260, height - 260, 230, 230);

  image(sfondo1, 30, height - 480, 450, 450);
  image(sfondo2, width - 480, height - 480, 450, 450);
  pop();
}
