export function menuActions(displayBtn, hideBtn, menu){
    displayBtn.addEventListener("click", () => {
        menu.classList.remove("invisible");
        menu.classList.add("visible");
    })
    
    hideBtn.addEventListener("click", () => {
        menu.classList.remove("visible");
        menu.classList.add("invisible");
    })
}