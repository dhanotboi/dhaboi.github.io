document.addEventListener("DOMContentLoaded", function() {
  showSlides(1);
});

function changeNav(){
  if (document.getElementById("mySidenav").style.width == "300px"){
    document.getElementById("mySidenav").style.width = "75px";
  } else {
    document.getElementById("mySidenav").style.width = "300px";
  }
  var invtext = document.getElementsByClassName("invisible");
  if (typeof(invtext.style.dispaly) != "undefined"){
    invtext.style.display = "inline-block";
  }
  if (invtext.style.display == "none") {
    invtext.style.display = "inline-block";
  } else {
    invtext.style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}