let currentImg = 1;

export function arrowDisplacement(rightArrow, leftArrow, carousel, numberOfImages){
    rightArrow.addEventListener("click", () => {
        carousel.classList.remove(`image-${currentImg}`);
        removeCurrentDot(currentImg);
        if(currentImg + 1 > numberOfImages){
            currentImg = 1;
            carousel.classList.add(`image-${currentImg}`);
            addCurrentDot(currentImg);
        }else{
            currentImg ++;
            carousel.classList.add(`image-${currentImg}`);
            addCurrentDot(currentImg);
        }
    })

    leftArrow.addEventListener("click", () => {
        carousel.classList.remove(`image-${currentImg}`);
        removeCurrentDot(currentImg);
        if(currentImg - 1 < 1){
            currentImg = numberOfImages;
            carousel.classList.add(`image-${currentImg}`);
            addCurrentDot(currentImg);
        }else{
            currentImg --;
            carousel.classList.add(`image-${currentImg}`);
            addCurrentDot(currentImg);
        }
    })
} 

export function dotDisplacement(dots, carousel){
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            carousel.classList.remove(`image-${currentImg}`);
            removeCurrentDot(currentImg);
            currentImg = parseInt(dot.getAttribute("img-number"));
            dot.classList.add("current-dot");
            carousel.classList.add(`image-${currentImg}`);
        })
    })
}

function removeCurrentDot(currentImg){
    document.querySelector(`[img-number="${currentImg}"]`).classList.remove("current-dot");
}

function addCurrentDot(currentImg){
    document.querySelector(`[img-number="${currentImg}"]`).classList.add("current-dot");
}