class Planet {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.color = [random(255), random(255), random(255)];
    }

applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
}

update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
}

show() {
    stroke("white");
    strokeWeight(2);
    fill(this.color);
    this.r = sqrt(this.mass) * 10 * scale; 
    ellipse(this.pos.x*scale, this.pos.y*scale, this.r * 2*scale);
    }
}