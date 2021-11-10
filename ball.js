class Ball{

    constructor(x,y,r){

        var options = {

            restitution: 1,
            friction: 0.5
            
            
        }

        this.r = r
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r)
        pop();
    }
}