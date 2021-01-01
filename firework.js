function firework(x,y){
    //console.log(x,y);
    //color
    this.hu = random(255);
    this.firework = new particle(x,y,true,this.hu);
    this.exploded = false;
    this.particles = [];

    this.done = function() {
        if(this.exploded && this.particles.length===0){
            return true;
        }else{
            return false;
        }
        
    }

    this.update= function(){
        
        if(!this.exploded){
        //console.log("exploded value:",this.exploded);
        this.firework.applyForce(gravity);
        this.firework.update();
        if(this.firework.vel.y >= 0){
            this.exploded = true;
            this.explode();
        }
        }

        //Actualizacion para saber donde esta el punto 
        this.firework.applyForce(gravity);
        this.firework.update();
        if(this.exploded){
            //console.log("exploded value:",this.exploded);
            for(var i= this.particles.length-1; i>=0;i-- ){
                this.particles[i].applyForce(gravity);
                this.particles[i].update();
    
                if(this.particles[i].done()){
                   this.particles.splice(i,40);
                }
            }
        }
        

    }

    this.explode = function(){
        for (let i = 0; i < 60 ; i++) {
            var x = 16 * pow(sin(i), 3); var y = 13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i);
            var p = new particle(this.firework.pos.x,this.firework.pos.y,false,this.hu);
            //var p = new particle(this.firework.pos.x+x,this.firework.pos.y+y,false,this.hu);
            this.particles.push(p);
        }
    }


    this.show = function(){
        if(!this.exploded){
        this.firework.show();
        }

        if(this.exploded){
            for (let i = 0; i < this.particles.length ; i++) {
                this.particles[i].show();
            }
        }

    }



}