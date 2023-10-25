let btnClose = document.querySelector(".window_button");
let modalWindow = document.querySelector(".modal_window");
let btnCloseMenu = document.querySelector(".menu_button");
let btnOpen = document.querySelector(".burger-btn");
let menuWindow = document.querySelector(".mobile_menu");      




const openMenu = () => {
   
    btnOpen.addEventListener("click", () => {
    menuWindow.classList.add("is_open")
      
    })
}

const closeModal = () => {
    btnClose.addEventListener("click", () => {
       modalWindow.classList.remove("is_open")
   })
}

const closeMenu = () => {
   
    btnCloseMenu.addEventListener("click", () => {
    menuWindow.classList.remove("is_open")
      
    })
}
openMenu()
closeModal()
closeMenu()