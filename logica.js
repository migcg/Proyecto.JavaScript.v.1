

//LOGICA DE LOS FORMULARIOS 

function ir () {

    var c= 234;
    var u= "Mali";

    if(document.form.password.value==c && document.form.login.value==u) {
    alert ("Binvdenida Mali");
    window.location="mali2.html";}

    else {
    alert("Intenta de nuevo porfavor")}

}

function go () {

    var c= 234;
    var u= "Gera";

    if(document.form.password.value==c && document.form.login.value==u) {
    alert ("Binvdenido Gera");
    window.location="gera2.html";}

    else {
    alert("Intenta de nuevo porfavor")}

}

function gehe () {

    var c= 234;
    var u= "Maui";

    if(document.form.password.value==c && document.form.login.value==u) {
    alert ("Binvdenida Maui");
    window.location="maui2.html";}

    else {
    alert("Intenta de nuevo porfavor")}

}

"use strict"

//SELECCIONAMOS LOS NODOS DE NUESTRO HTML CON JS 
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close-modal")
const btnOpen = document.querySelector(".show-modal")



//LOGICA DEL MODAL DE CUENTAS
function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return
}


function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
    return
}


btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

//CERRAR EL MODAL, PRESIONANDO LA TECLA "ESCAPE".
document.addEventListener ("keydown", function (event) {
    if (event.key === "Escape")  {closeModal()}
})


//LOGICA DE DEPOSITAR & RETIRAR

function  Pluss() {
    var Number1=parseInt(document.getElementById("Num1").value);
    var Number2=parseInt(document.getElementById("Num2").value);
    document.getElementById("Num1").value=(Number1+Number2);
    if ( Number1 > 990 )
    { alert ("No puedes depositar esta cantidad")}

}
    

function Resta() {
   // var Number3=parseInt(document.getElementById("Num3").value);
   var Number1=parseInt(document.getElementById("Num1").value);
   var Number4=parseInt(document.getElementById("Num4").value); 
    document.getElementById("Num1").value=(Number1-Number4);
    if (Number1 < 10 )
    { alert ("No puedes retirar esta cantidad")}
}

