let planet, sun; // specifically made fo the sun and the planet
let scale; // scale is used to make the distance between the sun and the planet more visible, as well as the size of the planet and sun

function setup() {
  createCanvas(700, 600);
  // Create the planet mass slider
  sliderPlanetMass = createSlider(1, 100, 20, 1);
  sliderPlanetMass.position(200, 10);
  sliderPlanetMass.style('width', '100px');

  // Create the sun mass slider = 
  sliderSunMass = createSlider(1, 100, 20, 1);
  sliderSunMass.position(200, 10);
  sliderSunMass.style('width', '100px');

  // Create scale slider 
  sliderScale = createSlider(0.001, 2, 1, 0.01);
  sliderScale.position(10, 530);
  sliderScale.style('width', '100px');

  planet = new Planet(100, 100, 5); // create the planet at x=100, y=100, radius 5
  sun = new sun(0, 0, 20); // create the sun at x=0, y=0, radius 20
}

function keyPressed() {
  if (key ==="a") {
    let mx = (mouseX - width / 2) / scale; // get the mouse x position relative to the center of the canvas and scale it
    let my = (mouseY - height / 2) / scale;
    planet = new Planet (mx, my, 5); // create a new planet at the mouse position with the mass from the slider
  }
}
function draw() {
  background(0);
  translate(width / 2, height / 2); // move the origin to the center of the canvas

  // Get sldier values to change syun and planet size
  planet.mass = sliderPlanetMass.value();
  textSize(20);
  text('Planet Mass: ' + planet.mass, -340, -240);

  sun.mass = sliderSunMass.value();
  text('Sun Mass: ' + sun.mass, -160, -240);

  scale = sliderScale.value();
  text('Scale: ' + scale, -340, 220);

  planet.update();
  sun.show();
}