// This javascript file initiates slick using slick.min.js.
// To customize the pagination style, read Slick's documentation: http://kenwheeler.github.io/slick/

$(document).ready(function(){
  var prevButton = $('.js-button-prev');
  var nextButton = $('.js-button-next');
  // Initialize slick
  $('.slick-container').slick({
    infinite: false,
    edgeFriction: 0,
    prevArrow: prevButton,
    nextArrow: nextButton,
    dots: false
  });

  var slideNumber = $('.js-slide')

  prevButton.hide();

  // This event listener changes the footer buttons.  When the modal reaches the last slide,
  // it hides the "SKIP" and "NEXT" buttons and displays the "GOT IT!" button
  $('.slick-container').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var lastSlide = slick.slideCount - 1;
    slideNumber.html(nextSlide + 1)
    if (nextSlide === 0) {
      prevButton.hide();
      nextButton.show();
      return
    }
    if (nextSlide === lastSlide) {
      prevButton.show();
      nextButton.hide();
      return
    }
    prevButton.show();
    nextButton.show();
    return
  });
});
