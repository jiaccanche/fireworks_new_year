function copyClipboard(normal){
  return new Promise(asd => {
    let text = document.getElementById("dummy_id");
    console.log(text);   
    text.focus();
    text.select();
    let res = document.execCommand("copy");
    //res = document.execCommand("copy");
  if(res){
    console.log("bien");
    alert("URL copiada");
  }else{
    console.log("Ops! it didn't work");
    document.execCommand("copy");
    alert("Ops! it didn't work");
  }
  });
  
  // Remove it as its not needed anymore
    
  /* Alert the copied text */
 
}

function createInputTxt(copyText){
  console.log("sads",copyText);
  return new Promise(resolve => {
    console.log(copyText);
    var dummy = document.createElement("textarea");

    // Add it to the document
    document.body.appendChild(dummy);
    
    // Set its ID
    dummy.setAttribute("id", "dummy_id");
    console.log(dummy);
    // Output the array into it
    dummy.value=copyText;
    dummy.textContent = copyText;
    console.log(dummy);
    let bton = document.createElement("button");
    document.body.appendChild(bton);
    bton.addEventListener('click', copyClipboard);
    bton.click();
    document.body.removeChild(bton);
    bton.remove();


  });
 
}



async function createInitials(copyText){
  await createInputTxt(copyText);
  //copyClipboard(copyText);
}

var changeName = function(){
  var name = getUrlParam('name','Sobreviviente'); 
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
    copyText = "https://bit.ly/3eGUOxH?name=" + encodeURIComponent(person.length > 15 ? person.substring(0,14) : person );
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
  console.log(parameter,defaultvalue );
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
      }
  return urlparameter;
}


//
window.onload = loadMain 