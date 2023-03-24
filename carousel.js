const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
let currentItem = 0;

function showItem(index) {
    if (index < 0) {
        index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        index = 0;
    }
    carousel.style.transform = `translateX(${-index * 100}%)`;
    currentItem = index;
}

prevButton.addEventListener('click', () => {
    showItem(currentItem - 1);
});

nextButton.addEventListener('click', () => {
    showItem(currentItem + 1);
});

showItem(currentItem);
