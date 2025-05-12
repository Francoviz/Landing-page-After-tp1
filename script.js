document.addEventListener("DOMContentLoaded", function () {
    // Capturar elementos del formulario
    document.getElementById("subscribeForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let nombre = document.getElementById("name").value;
        let mail = document.getElementById("email").value;
        document.getElementById("message").innerText = `¡Gracias por tu mensaje, ${nombre}! Te contactaremos en ${mail}.`;
    });

    // Carrusel funcionalidad
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Muestra el primer slide iniciallll
});



