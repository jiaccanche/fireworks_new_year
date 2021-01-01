
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
    var selection = document.getSelection();
    var range = document.createRange();

    range.selectNode(dummy);
    selection.removeAllRanges();
    selection.addRange(range);
    
    // Select it
    //dummy.select();
    //dummy.setSelectionRange(0, 99999);
    // Copy its contents
    var res = document.execCommand('copy');
    console.log(copy,res);
    debugger
    if(res){
      console.log("bien");
      selection.removeAllRanges();
    }else{
      console.log("Ops! it didn't work");
      const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
      const permissionStatus = await navigator.permissions.query(queryOpts);
      // Will be 'granted', 'denied' or 'prompt':
      console.log(permissionStatus.state);
    
      // Listen for changes to the permission state
      permissionStatus.onchange = () => {
        console.log(permissionStatus.state);
      };
      
      try {
        await navigator.clipboard.writeText(copyText);
        console.log('Page URL copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
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