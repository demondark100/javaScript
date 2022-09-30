let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})






const input_tecla = document.querySelector(".input_tecla")
input_tecla.addEventListener("keydown",()=>{
    alert("xd")
})

const input_tecla_2 = document.querySelector(".input_tecla_2")
input_tecla_2.addEventListener("keypress",()=>{
    alert("xd")
})

const input_tecla_3 = document.querySelector(".input_tecla_3")
input_tecla_3.addEventListener("keyup",()=>{
    alert("xd")
})