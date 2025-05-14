
let index = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % slides.length;
}
setInterval(showSlides, 3000);
