document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.arrow_left');
    const nextButton = document.querySelector('.arrow_right');
    const bannerImage = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
    const dotsContainer = document.querySelector('.dots');

    // const "slides" de script.js
    let currentIndex = 0;

    // MaJ
    function updateCarousel() {
        const currentSlide = slides[currentIndex];
        bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;
        bannerImage.alt = currentSlide.tagLine;
        bannerText.innerHTML = currentSlide.tagLine;

        // MaJ dots
        updateDots();
    }

    // Fonction MaJ dots
    function updateDots() {
        dotsContainer.innerHTML = ''; // Réinit les dots
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === currentIndex) {
                dot.classList.add('dot_selected');
            }
            dotsContainer.appendChild(dot);

            // "click" pour chaque dot
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
    }

    // Bouton précédent
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    // Bouton suivant
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Initialisation carrousel
    updateCarousel();
});
