class Sun { 
    constructor(x, y, m) {

        this.pos = createVector(x, y);
        this.mass = m;

}

attract(planet) {
    let force = p5.Vector.sub(this.pos, planet.pos);
    let distanceSq = constrain(force.magSq(), 25, 2500);
    let G=10;
    let strength = G * (this.mass * planet.mass) / distanceSq;

    force.setMag(strength);
    planet.applyForce(force);
}

show () {
    noStroke();
    fill("yellow");
    this.r = sqrt(this.mass) * 10 * scale; // radius is based on the mass of the sun and the scale
    ellipse(this.pos.x*scale, this.pos.y*scale, this.r * 2*scale);
}
}