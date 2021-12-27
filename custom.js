
var changeName = function(){
  var name = getUrlParam('name','A todos'); 
  name = decodeURIComponent(name);
  console.log(name);
  document.getElementById("name").innerHTML = name;
  
}

var addPerson = function(){
  var person = prompt("Por favor introduce un nombre:","" );
  var copyText = "";
  if (person == null || person == "") {
    copyText = "User cancelled the prompt.";
    alert("Algo salio mal");
  } else {
    copyText = "https://jiaccanche.github.io/fireworks_new_year/index.html?name=" + encodeURIComponent(person);
    
    var dummy = document.createElement("textarea");

    // Add it to the document
    document.body.appendChild(dummy);

    // Set its ID
    dummy.setAttribute("id", "dummy_id");

    // Output the array into it
    document.getElementById("dummy_id").value=copyText;
    document.getElementById("dummy_id").textContent = copyText
    
    // Select it
    dummy.select();
    dummy.setSelectionRange(0, 99999);
    dummy.select();
    // Copy its contents
    var res = document.execCommand('copy');
    console.log(copy,res);
    debugger
    if(res){
      console.log("bien");
    }else{
      console.log("Ops! it didn't work");
      navigator.clipboard.writeText(copyText).then(function() {
        console.log("good");   
      }, function(err) {
        console.log("Ops! it didn't work",err);
      });
      document.execCommand('copy');
    }
    // Remove it as its not needed anymore
      
    /* Alert the copied text */
    alert("URL copiada");
    document.body.removeChild(dummy);
    dummy.remove();
    
  }
}

var loadMain = function(){
  changeName();
  document.getElementById("namebtn").addEventListener("click",addPerson);
 
}

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