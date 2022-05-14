const mobileBtn = document.querySelector("button.navbar-toggle.collapsed");
const menu = document.getElementById("navbar");
mobileBtn.addEventListener("click", e => {
    menu.style.display = menu.style.display === "block" ?  "none" :   "block"; 
});
const dropdownicons = document.querySelectorAll(".nav-link i.bi.bi-caret-down-fill");

 for (const element of dropdownicons) {
    element.addEventListener("click", function(e) {
        e.preventDefault();
        let granny = element?.parentNode?.parentNode;
        let menumobile = granny?.querySelector(".sub-menu");
        menumobile.style.display = menumobile.style.display === "block" ?  "none" :   "block";
     });
 }