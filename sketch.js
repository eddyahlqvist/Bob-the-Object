// Coded by Eddy Ahlqvist
// 2023 for learning purposes
// JavaScript with p5.js library

function setup() {
  //Canvas dimensions
  createCanvas(400, 400);

  // Initial background color.
  bg = 0;

  // Creates an Object of the Bob Class named b.
  // x pos, y pos, diameter, speed.
  b = new Bob(width / 2, height / 2, 0, 1);
}

function draw() {
  // bg = variable for setting background colors.
  background(bg);

  // Remaps distance so it reaches 255 grayscale at the end of the growth cycle.
  gs = map(b.d, 0, 400, 0, 255);

  // Object function for visuals.
  b.display();

  // Object function for animation.
  b.motion();

  // Object function for changing background color.
  b.flickBG();
}
