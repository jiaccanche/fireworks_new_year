var changeName = function(){
  var name = getUrlParam('name','A todos'); 
  name = decodeURIComponent(name);
  console.log(name);
  document.getElementById("name").innerHTML = name;
  
}

var resizeCanvasCustom = function(){
    console.log(1);
    
}

var loadMain = function(){
  changeName();
  window.addEventListener('resize', resizeCanvasCustom(), false);
  window.addEventListener('orientationchange', resizeCanvasCustom(), false);
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