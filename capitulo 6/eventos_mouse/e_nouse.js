let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})








const boton = document.querySelector(".boton");
boton.addEventListener("click",()=>{
    alert("hola mundo");
});


const boton_2 = document.querySelector(".boton_2");
boton_2.addEventListener("dblclick",()=>{
    alert("hola mundo");
});


const boton_3 = document.querySelector(".boton_3");
boton_3.addEventListener("mouseover",()=>{
    alert("hola mundo");
});

const boton_4 = document.querySelector(".boton_4");
boton_4.addEventListener("mouseout",()=>{
    alert("hola mundo");
});

const boton_5 = document.querySelector(".boton_5");
boton_5.addEventListener("contextmenu",()=>{
    alert("hola mundo");
});


const boton_6 = document.querySelector(".boton_6");
boton_6.addEventListener("mouseup",()=>{
    alert("hola mundo");
});

const boton_7 = document.querySelector(".boton_7");
boton_7.addEventListener("mousemove",()=>{
    alert("hola mundo");
});