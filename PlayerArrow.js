class PlayerArrow {
  constructor(x, y, width, height,) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {

    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y, this.width,this.height);
    pop();
   
  }

  shoot(){
    var newangle = archer.angle - 28;
    newangle = newangle*(3.14/180);
    var velocity = p5.Vector.fromAngle(newangle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: velocity.x*(180/3.14), y: velocity.y*(180/3.14)});
  
  }

}

