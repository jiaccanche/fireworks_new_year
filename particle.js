function particle(x,y, firework,hu){
    //Posicion inicial
    this.pos = createVector(x,y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu= hu;
    
    if(this.firework){
    this.vel = createVector(0,random(-15,-10));
    }else{
        //Explota aqui
        this.vel =  p5.Vector.random2D();
        this.vel.mult(random(2,12));
    }
    this.acc = createVector(0,0);

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.done = function(){
        if(this.lifespan < 0){
            return true;
        }else{
            return false;
        }
    }

    this.update = function(){

        if(!this.firework){
            //limita el rango de explosión
            this.vel.mult(0.85);
            this.lifespan -=4;
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function(){
        colorMode(HSB);
        if(!this.firework){
            strokeWeight(2);
            stroke(this.hu,255,255,this.lifespan);
        }else{
            strokeWeight(4);
            stroke(this.hu,255,255);
        }

        point(this.pos.x,this.pos.y);
    }


}