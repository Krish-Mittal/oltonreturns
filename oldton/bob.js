class bob
{
    constructor(x,y,r)
    {
     var thrown ={
         'isStatic':false
     }
     this.body=Bodies.circle(x,y,r,thrown)
     this.r=r;
     World.add(world,this.body);
    }
    display()
    {
      push();
      translate(this.body.position.x,this.body.position.y);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r);
      pop();
    }
    
}