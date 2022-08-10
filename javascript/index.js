const tch = document.querySelector("#tch")

tch.addEventListener("click", function inTouch(){
    window.location = "contact.html"
}); 

const suscription = document.getElementById("suscription");

const email = suscription.elements["email"];

let emailAddress = email.value; 

suscription.addEventListener("submit", (event) =>{
    event.preventDefault();

});
// const suscribeButton = document.querySelector("#suscribeButton")

// suscribeButton.addEventListener("submit", suscription());

// function suscription (){
//    let emailOne = document.querySelector("#emailOne").value;
//    let emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//    if(emailpattern.test(emailOne)) {
//        console.info("hola");
//    } else {
//     console.info("adios");
//      }
//  }
