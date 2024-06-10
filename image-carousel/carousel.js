let currentImg = 1;
let intervalId;

export function resetInterval(carousel) {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(autoDisplacement, 5000, carousel, 4);
}

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
        resetInterval(carousel);
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
        resetInterval(carousel);
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
            resetInterval(carousel);
        })
    })
}

function autoDisplacement(carousel, numberOfImages){
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
}

function removeCurrentDot(currentImg){
    document.querySelector(`[img-number="${currentImg}"]`).classList.remove("current-dot");
}

function addCurrentDot(currentImg){
    document.querySelector(`[img-number="${currentImg}"]`).classList.add("current-dot");
}