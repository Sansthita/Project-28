class Tree{
    constructor(){
        var options = {
            density:1.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(900, 450, 50, 50);
        //this.width = 500;
        //this.height = 500;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, 900, 450, 500, 500);
        pop();
    }
}