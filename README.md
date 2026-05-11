MA1805- INTERACTIVE PROJECT

This project is a 2D gravity simulation created using JavaScript and the p5.js library. The purpose of the simulation is to demonstrate how gravity works between two celestial bodies, specifically a planet and a sun. The simulation visually represents important physics concepts such as force, acceleration, velocity, mass, and motion. It allows the user to interact with the system through sliders and keyboard controls, making the project both educational and interactive.

The program begins by creating a canvas using the createCanvas() function inside the setup() function. The background is set to black to represent outer space and improve the visibility of the objects. Global variables are used to store the planet, the sun, and the scale of the simulation. The scale variable is important because it allows the user to zoom in and out, making the orbit easier to observe.

Several sliders are included in the project. These sliders allow the user to change the mass of the planet, the mass of the sun, and the scale of the simulation in real time. The planet and sun are created using object-oriented programming with separate classes called Planet and Sun. The Planet class controls movement, velocity, acceleration, and rendering, while the Sun class controls gravitational attraction.

The draw() function runs continuously every frame, creating animation and updating the simulation in real time. Inside this function, the planet’s position is updated, the gravitational force is applied, and both objects are drawn onto the screen. The program uses vectors to simplify calculations involving movement and force.

The simulation also includes keyboard interaction. Pressing the “A” key creates a new planet at the mouse position. Overall, this project demonstrates understanding of JavaScript, p5.js, physics simulation, vector mathematics, object-oriented programming, and user interaction.
