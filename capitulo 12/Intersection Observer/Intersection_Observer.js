"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})





const caja3 = document.querySelector(".caja_3")
const verificarVisibilidad1 = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}


const observer1 = new IntersectionObserver(verificarVisibilidad1);
observer1.observe(caja3)


const cajas = document.querySelectorAll(".cajas")
const verificarVisibilidad = (entradas) =>{
    for(let entry of entradas){
        if (entry.isIntersecting) {
            console.log(`
                se esta viendo la caja ${entry.target.textContent}
            `)
        }
    }
}

const observer = new IntersectionObserver(verificarVisibilidad);
for(let caja of cajas){
    observer.observe(caja)
}


const cajas_3 = document.querySelector(".cajas_3")

const callback = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}
let option = { 
        rootMargin: '50px',
        threshold: 1.0
}
const observer_2 = new IntersectionObserver(callback,option);
observer_2.observe(cajas_3)