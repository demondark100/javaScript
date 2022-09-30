let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})









const mostrar_1 = document.querySelector(".mostrar_1")
const resultado_1 = document.querySelector(".resultado_1")
mostrar_1.addEventListener("click",()=>{
    setTimeout(() => {
        resultado_1.textContent = "hola mundo"
    }, 2000);
})



const mostrar_2 = document.querySelector(".mostrar_2")
const resultado_2 = document.querySelector(".resultado_2")
mostrar_2.addEventListener("click",()=>{
    setTimeout(() => {
        resultado_2.textContent = "hola mundo"
    }, 2000);
})


