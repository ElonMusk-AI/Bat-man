class Raindrops{
    constructor(x,y){
        var options = {
            friction: 2,
            restitution: 0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10,options);
        World.add(world,this.body);    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        ellipse(0,0,10,10);
        pop();
    }
}