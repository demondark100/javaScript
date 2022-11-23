"use strict";

let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})





const archivo = document.getElementById("archivo")
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0])
})

const leerArchivo = archivo =>{
    for(let i = 0; i < archivo.leght;i++){
        const reader = new FileReader;
        reader.readAsText(archivo[i]);
        reader.addEventListener("load",(e)=>{
            console.log(e.currentTarget.result)
        });
    }
}




const archivo_3 = document.getElementById("archivo_3");

archivo_3.addEventListener("change",(e)=>{
    leerArchivo_2(archivo_3.file[0])
})

const leerArchivo_2 = archivo => {
    for(let i in archivo){
        const reader_1 = new FileReader();
        reader_1.readAsDataURL(archivo[i]);
        reader_1.addEventListener("load",(E)=>{
            console.log(e.currentTarget.result);
        })
    }
}