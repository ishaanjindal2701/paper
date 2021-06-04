class Paper{
    constuctor(x,y) {
        var options ={
        isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
        this.body=Bodies.circle(x,y,7,options)
World.add(world,this.body);

    }
display()  {
    ellipse(this.body.position.x,this.body.position.y,7,7)
}  
}