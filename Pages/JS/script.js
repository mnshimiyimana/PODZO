
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);
