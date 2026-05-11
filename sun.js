class Sun { // the sun class is used to create the sun and calculate the gravitational force it exerts on the planet
    constructor(x, y, m) { // the constructor takes in the x and y position of the sun and its mass

        this.pos = createVector(x, y); // the position of the sun is stored as a p5 vector
        this.mass = m; // the mass of the sun is stored as a variable

}

attract(planet) { // the attract function takes in a planet object and calculates the gravitational force it exerts on the planet
    let force = p5.Vector.sub(this.pos, planet.pos);// the force is calculated as the vector from the planet to the sun
    let distanceSq = constrain(force.magSq(), 25, 2500);// the distance squared is calculated and constrained to prevent extreme forces when the planet is too close or too far from the sun
    let G=10;
    let strength = G * (this.mass * planet.mass) / distanceSq;

    force.setMag(strength); // the force vector is set to have the magnitude of the strength of the gravitational force
    planet.applyForce(force); // the force is applied to the planet using the applyForce function in the Planet class
}

show () { // the show function is used to display the sun on the canvas
    noStroke();
    fill("yellow");
    this.r = sqrt(this.mass) * 10 * scale; // radius is based on the mass of the sun and the scale
    ellipse(this.pos.x*scale, this.pos.y*scale, this.r * 2*scale);// the sun is drawn as a yellow circle with a radius based on its mass and the scale
}
}