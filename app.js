

// // div slider
// const slides = document.querySelectorAll(".slides .inclusive")
// let slideIndex=0;
// let intervalId=null;

// // initializeslider
// document.addEventListener("DOMContentLoaded",initializeSlider);

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide,5000)
//     }
// }
// function showSlide(index){
//     if(index >= slideIndex.length){
//         slideIndex=0;
//     }
//     else if(index<0){
//         slideIndex = slide.length - 1;
//     }
//     slides.forEach(slide => {
//         slide.classList.remove("dislaySlide")
//     });
//     slides[slideIndex].classList.add("dislaySlide");
// }
// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex)
// }
// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}