const canvas = document.getElementById("canva");
const ctx = canvas.getContext('2d');
canvas.height = 700;
canvas.width = 700;



class Line{
    constructor(canvas){
        this.canvas = canvas;
        this.x = Math.random()*this.canvas.width;
        this.y = Math.random()*this.canvas.height;
        this.history = {};
        this.history = [{x : this.x, y : this.y}];
        this.lineWidth = Math.floor(Math.random()*15)+1;
        this.hue = Math.floor(Math.random()*360);
        this.maxL = 15;
        this.speedX=3;
        this.speedY=9;
        this.timer =0 ;
        this.life=100;
        this.skip = 0;
        
        

    }
    draw(){
        ctx.strokeStyle = 'hsl('+this.hue+',100%,50%)';
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for(let i =0;i<this.history.length;i++){
            ctx.lineTo(this.history[i].x,this.history[i].y);
        }
        ctx.stroke();
        
    }
    reset(){
        this.x = Math.random()*this.canvas.width;
        this.y = Math.random()*this.canvas.height;
        this.history = [{x : this.x, y : this.y}];
    }
    update(){
        this.timer++;
        if(this.timer< this.life){
            this.x = this.x+this.speedX+ Math.random()*3;
            this.y = this.y+this.speedY+ Math.random()*18;
            this.history.push({x : this.x, y : this.y})
            this.skip += 1
            if(this.history.length > this.maxL && skip % 100000 == 0){
                setTimeout(this.history.shift(),50000);
            }
        }
        else if(this.history.length<=1){
            this.reset();
        }
        else{
            this.history.shift();
        }

    }
    

}
const linesarray= [];
for(let i=0; i<10; i++){
    linesarray.push(new Line(canvas));

}

function animate(){
    
        ctx.clearRect(0,0,canvas.width,canvas.height);
        linesarray.forEach(object => object.update());
        linesarray.forEach(object => object.draw());

    //line cord update
    
    window.requestAnimationFrame(animate);
}
animate();
function refreshPage(){
    location.reload(true)
}