class Paper {
    constructor(x, y, diameter) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,diameter);
      this.radius = diameter;
    }
      display(){
      Push()
      rectMode(CENTER);
    stroke("green");
    strokeWeight(4);
    fill(255);
   circle(0, 0, this.diameter);
    pop();
    }
  };