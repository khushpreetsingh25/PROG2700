$(document).ready(function() {
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $('#prev-slide').on('click', function() {
    plusSlides(-1);
  });

  $('#next-slide').on('click', function() {
    plusSlides(1);
  });

  // Thumbnail image controls
  $('#dot-1').on('click', function() {
    currentSlide(1);
  });

  $('#dot-2').on('click', function() {
    currentSlide(2);
  });

  $('#dot-3').on('click', function() {
    currentSlide(3);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = $('.mySlides');
    var dots = $('.dot');
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
});
