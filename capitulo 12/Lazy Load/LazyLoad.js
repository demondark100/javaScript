"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})



const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name,content) => {
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("P")
    const btnEnviar = document.createElement("INPUT");
    const btnComentario = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");
    btnEnviar.type = "submit";

    btnComentario.setAttribute("placeholder","Introduce un comentario.");
    nombre.textContent = name;
    contenido.textContent = content;
    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}


const cargarMasPublis = entry =>{
    if (entry[0].isIntersecting) {
        cargarPublicaciones(4)
    }
}
const observer = new IntersectionObserver(cargarMasPublis)

const cargarPublicaciones = async num =>{
    const request = await fetch("LazyLoad.txt");
    const content = await request.json();
    let arr = content.contenedor;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
        if (arr[contador] != undefined) {
            const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].content)
            fragment.appendChild(newPublicacion)
            contador++;
            if (i = num - 1) {
                observer.observe(newPublicacion)
            }   
        } else{
            let noMore = document.createElement("H3");
            noMore.textContent = "no hay mas publicaciones";
            fragment.appendChild(noMore)
            publicaciones.appendChild(fragment)
            break;
        }
    }
    publicaciones.appendChild(fragment)
}
cargarPublicaciones(5)