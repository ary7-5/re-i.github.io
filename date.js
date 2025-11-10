 window.onload =  function clockthing() {
// yet another first
document.getElementById("currentdate").innerText = "calculating...";    
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '.' + dd + '.' + yyyy;

document.getElementById("currentdate").innerText = today

    }
    /////////////////////////////
