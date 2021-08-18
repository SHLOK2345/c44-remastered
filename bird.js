class Bird{

    constructor(){
    this.body=Bodies.rectangle(300,200,40,35,{isStatic:true})
    World.add(world,this.body)
    this.image=loadImage("bird.png")
    }

    display(){
      imageMode (CENTER)
        image(this.image,this.body.position.x,this.body.position.y,120,110)
    }
}