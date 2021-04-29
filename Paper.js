class Paper {
  constructor(x, y,r) {
    var options ={
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2

  }


  this.x=x;
  this.y=y;
  this.r = r;
  this.image = loadImage("mypaper.png")

    this.body = Bodies.circle(this.x,this.y,this.r, options);
     World.add(world, this.body);
  }
  display(){


    var pos =this.body.position;
    //pos.x = mouseX
    //pos.y = mouseY
    
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    //fill("magenta");
    image(this.image,200,38,this.r,this.r);
    pop();
  }
 };
