// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const level4Btn = {
  x: 400, // x position (centre of the button)
  y: 450, // y position (centre of the button)
  w: 370, // width
  h: 90, // height
  label: "'DARK SIDE OF THE MOON'", // text shown on the button
};

const level4Btn2 = {
  x: 400, // x position (centre of the button)
  y: 350, // y position (centre of the button)
  w: 370, // width
  h: 90, // height
  label: "'THE WALL'", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawLevel4() is called from main.js *only*
// when currentScreen === "level4"
function drawLevel4() {
  // Set background colour for the level4 screen
  image(pinkfloyd, 0, 0, width, height);

  // ---- Title and instructions text ----
  fill(255); // black text
  // textSize(32);
  textAlign(CENTER, CENTER);
  // text("Game Screen", width / 2, 160);

  textSize(18);
  text("Select the correct album title.", width / 2, 210);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawLevel4Button(level4Btn);
  drawLevel4Button(level4Btn2);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(level4Btn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawLevel4Button({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "level4"
function level4MousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(level4Btn)) {
    currentScreen = "win";
  }

  if (isHover(level4Btn2)) {
    currentScreen = "lose";
  }
}
