document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove 'active' class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Add 'active' class to the target slide
        slides[index].classList.add('active');
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Function to start the automatic slide transition
    function startSlideShow() {
        // Set an interval to call nextSlide every 7 seconds (7000 milliseconds)
        slideInterval = setInterval(nextSlide, 7000);
    }

    // Function to reset the interval (used when user navigates manually)
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Initialize the slider
    showSlide(currentSlide);
    startSlideShow();
});