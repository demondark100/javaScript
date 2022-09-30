let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})










const content_1 = document.querySelector(".content_1");
const content_2 = document.querySelector(".content_2");
const boton = document.querySelector(".boton");
content_1.addEventListener("click",()=>{
    alert("content_1")
});
content_2.addEventListener("click",()=>{
    alert("content_2")
});
boton.addEventListener("click",()=>{
    alert("click")
});



const content_3 = document.querySelector(".content_3");
const content_4 = document.querySelector(".content_4");
const boton_2 = document.querySelector(".boton_2");
content_3.addEventListener("click",()=>{
    alert("content_1")
});
content_4.addEventListener("click",()=>{
    alert("content_2")
},true);
boton_2.addEventListener("click",()=>{
    alert("click")
});


const content_5 = document.querySelector(".content_5");
const content_6 = document.querySelector(".content_6");
const boton_3 = document.querySelector(".boton_3");
content_5.addEventListener("click",()=>{
    alert("content_1")
});
content_6.addEventListener("click",()=>{
    alert("content_2")
});
boton_3.addEventListener("click",(e)=>{
    alert("click")
    e.stopPropagation()
});

