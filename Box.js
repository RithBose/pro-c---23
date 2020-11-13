    class box{
        constructor(x,y){
        var option ={ isStatic: true }
        this.body= Bodies.rectangle(x,y, this.width, this.height, option)
    this.width= 50
    this.height= 50
    World.add(world, this.body)
    }
    display(){
var pos= this.body.position
       push()
       translate(pos.x,pos.y)
        strokeWeight(4);
        stroke("green")
        fill("red")
        rect(0 ,0, this.width, this.height)
        pop()
    }
    }