let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})






const seleccion = document.querySelector(".seleccion");
const mostrar = document.querySelector(".mostrar");

seleccion.addEventListener("select",(e)=>{
    let posision_1 = e.target.selectionStart;
    let posision_2 = e.target.selectionEnd;
    let seleccionado = seleccion.value.substring(posision_1,posision_2)
    mostrar.textContent = seleccionado
})

