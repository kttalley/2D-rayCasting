
let walls = [];
let ray;
let particle;

function setup() {
    createCanvas(400,400);
    for (let i = 0; i < 5; i++){
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2= random(height);
        walls[i] = new Boundary(x1, x2, y1, y2);
    }
    
    // ray = new Ray(100, 200);
    particle = new Particle();
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
        particle.look(wall);
    }
    particle.update(mouseX,mouseY);
    particle.show();
    // ray.show();
    // ray.lookAt(mouseX, mouseY);
    // let pt = ray.cast(wall);
    // if(pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}