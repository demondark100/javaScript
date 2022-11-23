"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})





const arraster_1 = document.querySelector(".arraster_1");
const desplazamiento_1 = document.querySelector(".desplazamiento_1");
const final_1 = document.querySelector(".final_1");
const circulo = document.querySelector(".circulo");
circulo.addEventListener("dragstart",()=>arraster_1.textContent = 1)
circulo.addEventListener("drag",()=>desplazamiento_1.textContent = 2)
circulo.addEventListener("dragend",()=>final_1.textContent = 3)




const cuadrado_2 = document.querySelector(".cuadrado_2")
cuadrado_2.addEventListener("dragenter",()=>console.log("ne desplazaron dentro del rectangulo"))
cuadrado_2.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log("me estoy moviendo dentro del rectangulo")
})
cuadrado_2.addEventListener("drop",()=>console.log("me soltaste dentro del rectangulo"))
cuadrado_2.addEventListener("dragleave",()=>console.log("me sali del rectangulo"))





const circulo_3 = document.querySelector(".circulo_3");
circulo_3.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("xlass",e.target.className)
    let mostrar = e.dataTransfer.getData("class")
    console.log(mostrar)
})