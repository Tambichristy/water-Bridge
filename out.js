let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

let slide=0;

sslide();

function sslide(){
  let x;
  let show= doccument.getElementsByClassName("agr");
  
  for( x= 0; x < show.length; x++){
    show[x].style.display = "none";
  }
  slide++;
  if (slide > show.length) {slide = 1}  

  show[slide-1].style.display = "block";  

  setTimeout(sslide, 2000); // Change image every 2 seconds
}