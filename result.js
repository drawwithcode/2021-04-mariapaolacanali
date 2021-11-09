const phrase = "The wise one says: scemo chi legge";
const words = phrase.split(" ");
let allButtons;
let iterator = 0;
let button;

let sticker;
let sticker2;
let sticker3;

let sfondo1;
let sfondo2;
let sfondo3;

let music;

// let finalbtn;

let x = 0;

function preload() {
  sfondo1 = loadImage("./assets/imperatore.png");
  sfondo2 = loadImage("./assets/donnina.png");
  sfondo3 = loadImage("./assets/dragone.png");

  music = loadSound("./assets/sound1.mp3");

  sticker = loadImage("./assets/sticker.gif");
  sticker2 = loadImage("./assets/sticker2.gif");
  sticker3 = loadImage("./assets/sticker3.gif");
}

function setup() {
  words.forEach((word) => {
    let wordsbtn = createElement("button", word);
    wordsbtn.style(
      "cursor",

      "default"
    );
  });

  allButtons = selectAll("button");

  // make a button
  button = createButton(" you can find a real one here ");
  button.position(
    windowWidth / 2 - button.width / 2,
    windowHeight - button.height - 50
  );
  button.style("background-color", "#ffc50a");
  button.style("color", "black");

  music.play();
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background("#fbfbfb");

  //make buttons moving
  iterator++;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 40 * i) / 400) * windowWidth;
    let y = ((iterator - 40 * i) / 400) * windowHeight;
    singleButton.style("position: absolute");
    singleButton.position(x, y);
    //buttons style
    singleButton.style("background-color", "#27af63");
    singleButton.style("color", "white");
    singleButton.style("Stroke", "white");
  });

  //main text
  var myText = "You just cracked\na fake fortune cookie, dum-dum";
  textFont("Spicy rice");
  textAlign(CENTER);
  textSize(90);
  textLeading(90);
  fill("white");
  stroke("black");
  strokeWeight(3);
  text(myText, width / 2, height / 6);

  imageMode(CORNER);
  image(sticker, 30, height - 260, 230, 230);
  image(sticker2, width - 260, height - 260, 230, 230);
  image(sticker3, width / 2 - 150, height - 500, 300, 300);

  image(sfondo1, 30, height - 480, 450, 450);
  image(sfondo2, width - 480, height - 480, 450, 450);
  image(sfondo3, width / 2 - 250, height - 620, 500, 500);

  // finalbtn = image(sticker2, width / 2 - 150, height - 400, 300, 300);
  button.mouseClicked(function () {
    window.open(
      "https://www.google.it/maps/search/chinese+restaurant/@45.4699529,9.1632122,14z",
      "_self"
    );
  });
}
