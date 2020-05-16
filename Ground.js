class Ground{
  constructor(){
    var g_o = {
        isStatic:true,
    }
    this.body = Bodies.rectangle (200,height,400,10,g_o);
    World.add (world,this.body);
  }
  display(){
    rectMode (CENTER);
    rect(this.body.position.x,this.body.position.y,400,10);
  }
}