"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})


const cambiarTamaño = tamaño =>{
    document.querySelector(".texto").style.fontSize = `${tamaño}px`
    //esta funcion recibe un parametro para cambiar el tamaño de un texto.
    }
    document.querySelector(".t10").addEventListener("click",()=>cambiarTamaño(10));
    document.querySelector(".t15").addEventListener("click",()=>cambiarTamaño(15));
    document.querySelector(".t20").addEventListener("click",()=>cambiarTamaño(20));