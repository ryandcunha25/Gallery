let imageList = document.querySelector(".image-list");
let arrowButtons = document.querySelectorAll(".slide-btn");
let scrollLimit = imageList.scrollWidth - imageList.clientWidth;
let imageItem = document.getElementsByClassName("image-item");
let mainImage = document.getElementsByClassName("main-image")[0];
let prevBtn = document.getElementById("mainImg-previous");
let nextBtn = document.getElementById("mainImg-next");
let currentIndex = 0

let slider = () => {

    // setting up the first image in sequence as the default image
    let defaultImage = imageItem[0].getAttribute('src');
    mainImage.setAttribute("src", defaultImage);

    // making image display on the main container with a click
    imageList.addEventListener("click", (img) => {
        let selectedImgsource = img.target.getAttribute('src');
        mainImage.setAttribute("src", selectedImgsource)
    });
    
    // setting up the scroll bar
    arrowButtons.forEach(button => {
        button.addEventListener("click", () => {
            let slide = button.id === "previous" ? false : true;
            if (slide)
                var scrolledList = imageList.clientWidth * 1;
            else
                var scrolledList = imageList.clientWidth * -1;
            imageList.scrollBy({ left: scrolledList, behavior: "smooth" });
        });
    })

    // making arrow buttons visible only if there's more images present
    imageList.addEventListener("scroll", () => {
        arrowButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        arrowButtons[1].style.display = Math.round(imageList.scrollLeft) >= scrollLimit ? "none" : "block";
    });

    // displaying the previous image in the sequence on click of previous arrow button
    prevBtn.addEventListener('click', function () {
        currentIndex = currentIndex === 0 ? imageItem.length - 1 : currentIndex - 1;
        let mainImgsource = imageItem[currentIndex].getAttribute('src');
        mainImage.setAttribute("src", mainImgsource)

    });
    // displaying the next image in the sequence on click of next arrow button
    nextBtn.addEventListener('click', function () {
        currentIndex = currentIndex === (imageItem.length - 1) ? 0 : currentIndex + 1;
        let mainImgsource = imageItem[currentIndex].getAttribute('src');
        mainImage.setAttribute("src", mainImgsource)
    })
    
}
window.addEventListener("load", slider);

