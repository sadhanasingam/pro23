class PlayerArcher {
  constructor(x, y, width, height,angle) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
   
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    //add the code to move arrow up and down
    if (keyIsDown(LEFT_ARROW)&& this.angle < -70){
 
      this.angle += 1;
  
    }
    if (keyIsDown(RIGHT_ARROW)&& this.angle > -103){
      this.angle -= 1;

    }
    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
