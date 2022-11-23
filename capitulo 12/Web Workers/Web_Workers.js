"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})




const ejecutarBucle = () =>{
    let i = 0;
    while(i < 5000){
        i++;
        console.log(1);
    }
}
const button = document.querySelector(".button").addEventListener("click",()=>ejecutarBucle())


const worker = new Worker("worker.js");

const button_1 = document.querySelector(".button_1")
button_1.addEventListener("click",()=>{
    worker.postMessage(true)
})
