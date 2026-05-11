class Planet { // the planet class is used to create the planet and update its position based on the forces applied to it
    constructor(x, y, mass) { // the constructor takes in the x and y position of the planet and its mass
        this.pos = createVector(x, y); // the position of the planet is stored as a p5 vector
        this.vel = p5.Vector.random2D(); // the velocity of the planet is initialized to a random direction 
        this.vel.mult(5);
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.color = [random(255), random(255), random(255)];
    }

applyForce(force) { // the applyForce function takes in a force vector and applies it to the planet by adding it to the acceleration
    let f = p5.Vector.div(force, this.mass); // the force is divided by the mass of the planet to get the acceleration (F=ma)
    this.acc.add(f);
}

update() { // the update function updates the velocity and position of the planet based on the acceleration
    this.vel.add(this.acc); // the velocity is updated by adding the acceleration to it
    this.pos.add(this.vel); // the position is updated by adding the velocity to it
    this.acc.set(0, 0);
}

show() { // the show function is used to display the planet on the canvas
    stroke("white");
    strokeWeight(2);
    fill(this.color);
    this.r = sqrt(this.mass) * 10 * scale; 
    ellipse(this.pos.x*scale, this.pos.y*scale, this.r * 2*scale);
    }
}