// yet another first
const currentDate = document.querySelector(".currentDate")

function currentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + yyyy
currentDate = today

}
