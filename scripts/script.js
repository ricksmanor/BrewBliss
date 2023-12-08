// waits until html document is loaded to run this function
window.onload = function() {
    document.location.hash = "";

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // sets all images to not render
            slides[i].classList.remove("fade-in-out"); // remove the fade-in-out class
        }

        if (slideIndex >= slides.length) {
            slideIndex = 0; // loops back to the first image
        }

        let indexSlide = slides[slideIndex];
        indexSlide.style.display = "block"; // displays current image
        indexSlide.classList.add("fade-in-out"); // add the fade-in-out class

        slideIndex++; // updates slide index by 1
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
};




function myFunction() {
    var x = document.getElementById("myNavbar");
    console.log(x)
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
