class Paper {

    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display() {

        var p = this.body.position;
        
        push();

        fill("blue");
        imageMode(CENTER);
        //ellipse(p.x, p.y, this.radius*2, this.radius*2);
        image(this.image, p.x, p.y, 50, 50);
        pop();
        
    }
}