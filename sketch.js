var fireworks =[];
var gravity;
var lenght = 500;

function setup(){
    var canva = createCanvas(windowWidth,windowHeight);
    debugger;
    colorMode(HSB);
    gravity = createVector(0,0.2);
    stroke(255);
    strokeWeight(4);
    background(0);
    
}

function draw(){
    colorMode(RGB);
    background(0,0,0,50);
    
    if(random(1) < 0.08 && fireworks.length<12){
        console.log("tamaños iniciales:",width,height);
        fireworks.push(new firework(random(400,width - 400 ),height));
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