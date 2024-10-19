
let can, cwid, chgt, ctx, fps, prevFrameTime, animationId;
let ps = [];


class Particle{
  constructor(x, y, radius, color) {
    this.originalX = x;
    this.originalY = y;
    this.currentX = this.originalX;  
    this.currentY = this.originalY; 
    //this.velocityX = Math.random() * 1 + 0.01;
    this.velocityY = Math.random() * 1; 
    this.angle = Math.random() * (Math.PI * 2); //set angle of rotation of current particle to a random value between 0 and 360 degrees
    this.rotationRadius = Math.random() * cwid/1000; //rotation trajectory of current particle
    this.color = color; 
    this.radius = radius;
    this.growth = 0.1;
    
  }
  
  draw(){
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'white';
        ctx.beginPath(); 
        ctx.arc(this.currentX, this.currentY, this.radius, 0, 2*Math.PI);   
        ctx.fill();
        ctx.closePath();
    }
    
  update(){
    this.currentX += Math.cos(this.angle) * this.rotationRadius;
    this.currentY += Math.sin(this.angle ) * this.rotationRadius;
      
    this.angle += 0.01;
    
    if(this.currentY < 0 || this.currentX > cwid){
      this.currentX = Math.random() * cwid;
    }
    
    if(this.currentY < 0 || this.currentY > chgt){
      this.currentY = Math.random() * chgt;
    }
  }
}

function renderFrame(){
  clear();
  
  for (var i = 0; i < ps.length; i++) {
    let p = ps[i];
    p.update();
    p.draw();
  }
  
// ps[0].draw()
}

function clear() {
    ctx.clearRect(0, 0, cwid, chgt);
}
  
function loop(){
    let elapsed = Date.now() - prevFrameTime;
    if(elapsed > 1000/fps){
      prevFrameTime = Date.now();
      renderFrame();
    }
    animationId = requestAnimationFrame(() => loop());        
}
  

function bootStrap(){      
    can = document.getElementById("can");
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    cwid = can.width;
    chgt = can.height;
    ctx = can.getContext('2d', {willReadFrequently: true});
    fps = 30;
    prevFrameTime = Date.now();
    animationId = 0;

    ps = [];
    for (var i = 1; i <= 80; i++) {
        let p = new Particle(Math.random() * cwid, Math.random() * chgt, Math.ceil(Math.random() * cwid/900), 'white');
        ps.push(p);
    }

    loop();        
}

//respond to resize
window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    bootStrap();
});


bootStrap();
