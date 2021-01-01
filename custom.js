
var changeName = function(){
  var name = getUrlParam('name','A todos'); 
  name = decodeURIComponent(name);
  console.log(name);
  document.getElementById("name").innerHTML = name;
  
}

var addPerson = function(){
  var person = prompt("Por favor introduce un nombre:","Ejemplo Persona" );
  var copyText = "";
  if (person == null || person == "") {
    copyText = "User cancelled the prompt.";
    alert("Algo salio mal");
  } else {
    copyText = "https://jiaccanche.github.io/fireworks_new_year/index.html?name=" + encodeURIComponent(person);
    
    var dummy = document.createElement("input");

    // Add it to the document
    document.body.appendChild(dummy);

    // Set its ID
    dummy.setAttribute("id", "dummy_id");

    // Output the array into it
    document.getElementById("dummy_id").value=copyText;

    // Select it
    dummy.select();
    dummy.setSelectionRange(0, 99999); /* For mobile devices */
    // Copy its contents
    document.execCommand("copy");

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
    dummy.remove();
      
    /* Alert the copied text */
    alert("URL copiada");
  }
}

var resizeCanvasCustom = function(){
    console.log(1);
    
}

var loadMain = function(){
  changeName();
  window.addEventListener('resize', resizeCanvasCustom(), false);
  window.addEventListener('orientationchange', resizeCanvasCustom(), false);
  document.getElementById("namebtn").addEventListener("click",addPerson);
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