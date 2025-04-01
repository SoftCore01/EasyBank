let bugerButton = document.querySelector(".burger")
let popUp = document.querySelector(".popup");

bugerButton.addEventListener("click", () => {
    if (popUp.style.display != "block" ) {
        popUp.style.display = "block";
        popUp.focus()
    } else if (popUp.style.display == "block") {
        popUp.style.display = "none";   
    }
})

