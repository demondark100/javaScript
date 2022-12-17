const curso = document.querySelectorAll(".cursos_content");
let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    curso.forEach(i=>{
        i.classList.toggle("curso__")
    })
})



function moverElementos(variable1,variable2,nombre) {
    const capitulos_content = document.querySelector("." + variable1);
    const icono = document.querySelector("." + variable2).addEventListener("click",()=>{
        capitulos_content.classList.toggle(nombre);
    })
}

moverElementos("capitulos_content_1","icono_1","moverOpciones");
moverElementos("capitulos_content_2","icono_2","moverOpciones");
moverElementos("capitulos_content_3","icono_3","moverOpciones");