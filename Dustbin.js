class  Dustbin {
    constructor(x,y,width,height){

var options= {

    isStatic:true
}
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
            World.add(world,this.body)

            this.image = loadImage("dustbin.PNG")

    }
display(){

    var map = this.body.position
    var angle= this.body.angle
  
    imageMode(CENTER)
//fill("white")
   image(this.image,1350,600,this.width,this.height)

}
    

    
};   



