const javaScript = document.querySelector(".javaScript")

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    javaScript.classList.toggle("javaScript__")
})



const capitulos_content = document.querySelector(".capitulos_content")
const icono = document.querySelector(".icono").addEventListener("click",()=>{
    capitulos_content.classList.toggle("moverOpciones");
})
