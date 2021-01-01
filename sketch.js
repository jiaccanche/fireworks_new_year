var fireworks =[];
var gravity;
var lenght = 500;

function setup(){
    console.log(windowWidth,windowHeight);
    var canva = createCanvas(windowWidth,windowHeight);
    colorMode(HSB);
    console.log(height);
    gravity = createVector(0,0.2);
    stroke(255);
    strokeWeight(4);
    background(0);
    
}

function draw(){
    colorMode(RGB);
    background(0,0,0,50);
    
    if(random(1) < 0.08 && fireworks.length<5){
        fireworks.push(new firework(random(300,width - 300 ),height));
    }
    
    for(var i=fireworks.length-1; i>=0;i--){
        fireworks[i].update();
        fireworks[i].show();

        //elimino el objecto para optimizar
        if(fireworks[i].done()){
            fireworks.splice(i,1);
        }

        /*if(!primeravez && fireworks[i].firework.pos.y > 500){
            fireworks.splice(i,1);
            
        }*/

    }
    //primeravez=false;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}