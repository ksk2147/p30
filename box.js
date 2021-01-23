class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed)
      if(this.body.speed<2.5){
        World.add(world, this.body)

      }

      else{
        var pos =this.body.position;
        var angle = this.body.angle;
        World.remove(world, this.body)
        push();
        this.Visibility = this.Visibility-5;
        tint(255, this.visibility)
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("orange")
   
      rect(0, 0, this.width, this.height);
      pop();
      }
      
      
    }
  };
  