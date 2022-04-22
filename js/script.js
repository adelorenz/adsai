const mobileBtn = document.querySelector("button.navbar-toggle.collapsed");
const menu = document.getElementById("navbar");
mobileBtn.addEventListener("click", e => {
    menu.style.display == "block" ? menu.style.display = "none" :  menu.style.display = "block"; 
});