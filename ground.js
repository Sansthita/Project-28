class Ground{
    constructor(){
        var options = {
            density:1.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(500, 500, 50, 50);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/ground.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, 500, 500, this.width, this.height);
        pop();
    }
}