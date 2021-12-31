function createInputTxt(copyText){
  console.log("sads",copyText);
  return new Promise(resolve => {
    console.log(copyText);
    var dummy = document.createElement("input");

    // Add it to the document
    document.body.appendChild(dummy);
    
    // Set its ID
    dummy.setAttribute("id", "dummy_id");
    console.log(dummy);
    // Output the array into it
    document.getElementById("dummy_id").value=copyText;
    document.getElementById("dummy_id").textContent = copyText;
  
    // Copy its contents
    dummy.select();
  });
 
}

function copyClipboard(){
  return new Promise(asd => {
    res = document.execCommand("copy");
  if(res){
    console.log("bien");
    alert("URL copiada");
  }else{
    console.log("Ops! it didn't work");
    document.execCommand("copy");
    alert("Es posible que no se hay hecho el copy");
  }
  });
  
  // Remove it as its not needed anymore
    
  /* Alert the copied text */
 
}

async function createInitials(copyText){
  createInputTxt(copyText);
  copyClipboard();
}

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
    copyText = "https://bit.ly/3eGUOxH?name=" + encodeURIComponent(person);
    
    //console.log(copyText);
    createInitials(copyText);
    
    let inpt = document.getElementById("dummy_id");
    document.body.removeChild(inpt);
    inpt.remove();
    
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