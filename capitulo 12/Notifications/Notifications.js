"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})





if (!"Notification" in window) {
    console.log("las notificaciones no estan disponibles para este dispositivo.");
} 

Notification.requestPermission(()=>{
    if (Notification.permission == "granted") {
        new Notification("esta es nuestra primera notificacion")
        
        // con esto estamos dando un mensaje al usuario a traves de
        // Notificationes
    }
})
