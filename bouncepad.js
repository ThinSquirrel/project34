class Bounce{

    constructor(x,y,width,height){

        var options = {

            isStatic:true
        }

        
        this.bouncepad = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;

        World.add(world,this.bouncepad)
        
        
    }

    display(){

        
    push();
    rectMode(CENTER);
    fill("blue")
    rect(this.bouncepad.position.x,this.bouncepad.position.y,this.width,this.height);
    pop();
    
    
    }
}