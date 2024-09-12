let containerMenu = document.querySelector(".encabezado__navegacion--lista");
let menu = document.querySelector("#encabezado__menu--icon");


menu.addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    containerMenu.classList.toggle('open')
})

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    containerMenu.classList.remove('open');
}