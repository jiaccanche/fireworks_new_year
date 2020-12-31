var changeName = function(){
  var name = getUrlParam('name','A todos'); 
  name = decodeURIComponent(name);
  console.log(name);
  document.getElementById("name").innerHTML = name;
  
}

var resizeCanvasCustom = function(){
  var canvas = document.getElementById('defaultCanvas0');
  var heightRatio = 1.5;
  canvas.height = canvas.width * heightRatio;
}

var loadMain = function(){
  changeName();
  resizeCanvasCustom();
}

//funciones buscadas en internet:
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue){
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
      }
  return urlparameter;
}
//
window.onload = loadMain 