let slideIndex = 0;
let slides = document.querySelectorAll(".slideshow-slide");
showSlides(slideIndex);
// const interval = setInterval(()=>{plusSlides(1)}, 6000);
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
    if (n < 0)
    {
        slideIndex = slides.length - 1;
    }
    else if (n >= slides.length)
    {
        slideIndex = 0;
    }
    else
    {
        slideIndex = n;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "flex";
}

