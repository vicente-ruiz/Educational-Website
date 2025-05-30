let slideIndex = 0;

function showSlides(n) 
{
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) 
    {
        slideIndex = 0;
    } 
    else if (n < 0) 
    {
        slideIndex = slides.length - 1;
    } 
    else 
    {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function changeSlide(n) 
{
    showSlides(slideIndex + n);
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
