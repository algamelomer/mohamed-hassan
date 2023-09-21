window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    
    loader.style.display = 'none';
});
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    const reorderedSlides = Array.from(slides).map((slide, index) => {
        return slides[(index + currentIndex) % slides.length].cloneNode(true);
    });
    
    slider.innerHTML = '';
    reorderedSlides.forEach(slide => {
        slider.appendChild(slide);
    });
}
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

updateSlider();
