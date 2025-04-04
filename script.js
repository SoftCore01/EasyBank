let bugerButton = document.querySelector(".burger")
let popUp = document.querySelector(".popup");

bugerButton.addEventListener("click", (e) => {
    e.stopPropagation()
    if (popUp.style.display != "block" ) {
        popUp.style.display = "block";
        popUp.focus()
    } else if (popUp.style.display == "block") {
        popUp.style.display = "none";   
    }
})

window.addEventListener("click", (e) => {
    /* Remove popup when clicking outside */
    if (!popUp.contains(e.target)) popUp.style.display = "none"
})
