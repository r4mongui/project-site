let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const container = document.querySelector(".slides");

function updateSlide() {
    container.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index++;
    if (index >= totalSlides) index = 0;
    updateSlide();
}

function prevSlide() {
    index--;
    if (index < 0) index = totalSlides - 1;
    updateSlide();
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

/* autoplay */
setInterval(nextSlide, 15000);