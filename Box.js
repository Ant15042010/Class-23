class Box{
  constructor (x,y,width,length){
    var b_o = {
        restitution:1.0,
      }
      this.body = Bodies.rectangle (x,y,width,length,b_o);
      this.width = width;
      this.length = length;
      World.add (world,this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill (rgb(75,75,255));
    rectMode (CENTER);
    rect(0,0,this.width,this.length);
    pop ();
  }
}