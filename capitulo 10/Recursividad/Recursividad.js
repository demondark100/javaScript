"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})




const validarEdad = (err) => {
    let edad;
    try {
        if (err) edad = prompt("pon una edad valida");
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if(isNaN(edad)) throw "introduce tu edad";
        if(edad > 18) console.log("eres mayor de edad")
        else console.log("no eres mayor de edad")
    } catch (error) {
        validarEdad(error)
    }
}
validarEdad()
