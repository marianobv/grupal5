// var currentSlide;
// var rand;
// $(document).ready(function() {
//   currentSlide = Math.floor((Math.random() * $('.item').length));
//   rand = currentSlide;
//   $('#carouselExampleInterval').carousel(currentSlide);
//   $('#ccarouselExampleInterval').fadeIn(1000);
//   setInterval(function(){ 
//     while(rand == currentSlide){
//       rand = Math.floor((Math.random() * $('.item').length));
//     }
//     currentSlide = rand;
//     $('#ccarouselExampleInterval').carousel(rand);
//   },2000);
// });

let lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."

let lorem_2 = lorem.split(".")

console.log(lorem_2)
console.log(Math.floor(Math.random(lorem_2)))



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  
}




let pos_aleatorio = getRandomInt(0,lorem_2.length);
console.log(pos_aleatorio)
let linea_aleatorio = lorem_2[pos_aleatorio];
console.log(linea_aleatorio)




let htmlcontenttoAppend = ""

htmlcontenttoAppend +=
`
<center>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <div>
      
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div>
      
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  
</div>
</center>
`

document.getElementById("container_carrousel").innerHTML = htmlcontenttoAppend

// document.addEventListener("DOMContentLoaded", function() {
// random()
// });



