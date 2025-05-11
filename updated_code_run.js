function setup() {
  createCanvas(600, 600);
  noStroke(); // Remove outlines for a clean look
}

function draw() {
  background(173, 216, 230); // Light blue background (sky-like)

  // Sun (circle with rays)
  fill((frameCount * 2) % 255, (frameCount * 1) % 255, 0); // Dynamic yellow sun
  ellipse(500, 100, 100, 100); // Sun body
  for (let i = 0; i < 360; i += 30) {
    let x = 500 + cos(radians(i)) * 70;
    let y = 100 + sin(radians(i)) * 70;
    stroke((frameCount * 2) % 255, (frameCount * 1) % 255, 0); // Dynamic sun rays
    strokeWeight(2);
    line(500, 100, x, y); // Sun rays
  }
  noStroke(); // Reset stroke for other shapes

  // Grass (green rectangle at the bottom)
  fill(60, (frameCount * 2) % 255, (frameCount * 3) % 255); // Dynamic green grass
  rect(0, 500, 600, 100);

  // House (rectangle, triangle roof, door, and windows)
  fill((frameCount * 3) % 255, (frameCount * 1) % 255, 80); // Dynamic coral color for house body
  rect(200, 300, 200, 200); // House body
  
  fill((frameCount * 5) % 255, (frameCount * 2) % 255, (frameCount * 1) % 255); // Dynamic brown for roof
  triangle(200, 300, 400, 300, 300, 200); // Roof
  
  fill((frameCount * 2) % 255, 255, 255); // Dynamic white for door and windows
  rect(270, 400, 60, 100); // Door
  rect(230, 330, 50, 50); // Left window
  rect(320, 330, 50, 50); // Right window

  // Smiling face (circle, eyes, and smile)
  fill(255, (frameCount * 2) % 255, 196); // Dynamic peach puff color for face
  ellipse(100, 100, 120, 120); // Face

  fill(0); // Black for eyes
  ellipse(80, 90, 15, 15); // Left eye
  ellipse(120, 90, 15, 15); // Right eye

  noFill();
  stroke(0); // Black for smile
  strokeWeight(3);
  arc(100, 110, 60, 40, radians(20), radians(160)); // Smile

  // Balloon (ellipse and string)
  fill(255, 0, (frameCount * 3) % 255); // Dynamic red balloon
  ellipse(400, 200, 50, 70); // Balloon

  stroke(0); // Black string
  line(400, 235, 400, 300); // String
}