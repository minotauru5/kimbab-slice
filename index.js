function downloadMenu(){
    window.open('assets/Menu.pdf');
}

// Carousel Javascript. I used code from this website to make the carousel: https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/.
// I have provided comments below explaining what each function/line does to display that I understand the code and cited it to avoid plagiarism.

let slideIndex = 1; // sets the current slide index to be 1 initially
let slides = document.getElementsByClassName('carouselSlides'); // gets all the images from index.html with class name 'carouselSlides'
let totalSlides = slides.length; // variable for the total number of slides

displaySlides(slideIndex);
// subtracts 1 to the current slide index and calls displaySlides. If slide index is less than or equal to 1, it sets it to the last slide.
function previousSlide() {
    if(slideIndex <= 1) {
        slideIndex = totalSlides;
        displaySlides(slideIndex);
    } else {
        displaySlides(slideIndex -= 1);
    }
}

// adds 1 to the cuurent slide index and calls displaySlides. If slide index is greater than the total slide, it sets it to the first slide.
function nextSlide() {  
    if(slideIndex >= totalSlides) {
        slideIndex = 1;
        displaySlides(slideIndex);
    } else {
        displaySlides(slideIndex += 1); 
    }
}

function displaySlides(slideIndex) {  
    
    /* this conditonal sets the slide index to be 1 if the current slide index is greater than the total number of slides.
       Basically, if the carousel reaches the last slide, it will go back to the first slide.
    */
    if(slideIndex > totalSlides){
        slideIndex = 1;
    }  
    
    /* this conditonal sets the slide index to be the last slide if the current slide index is less than 1.
       Basically, if the carousel is on the first slide, it will go backwards to the last slide.
    */
    if(slideIndex < 1){
        slideIndex = slides.length;
    }

    // loops through and changes the dispay for each slide to 'none' which basically hides it from view
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = 'none';  
    }

    // this displays the slide at the current index
    slides[slideIndex - 1].style.display = 'block'; 
}
// this sets the autoscroll function. Code from: https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(function(){nextSlide()}, 3000);

document.getElementById('left').addEventListener('click', previousSlide);
document.getElementById('right').addEventListener('click', nextSlide);
document.addEventListener('DOMContentLoaded', displaySlides(slideIndex));