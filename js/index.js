var currentSlide;
var rand;
$(document).ready(function() {
  currentSlide = Math.floor((Math.random() * $('.item').length));
  rand = currentSlide;
  $('#carousel-example-generic').carousel(currentSlide);
  $('#carousel-example-generic').fadeIn(1000);
  setInterval(function(){ 
    while(rand == currentSlide){
      rand = Math.floor((Math.random() * $('.item').length));
    }
    currentSlide = rand;
    $('#carousel-example-generic').carousel(rand);
  },5000);
});