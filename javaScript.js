let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})



let li_nav_4 = document.querySelector(".li_nav-4")
li_nav_4.addEventListener("click",()=>{
    let hacking = document.querySelector(".hacking")
    hacking.classList.add("hacking_style")
    hacking.textContent = "aprendiendo"
}) 



