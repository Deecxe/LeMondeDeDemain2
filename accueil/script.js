let lsDef = document.querySelectorAll(".definition");

let defIndex = 0;

lsDef.forEach(def => {
    def.style.display = "none";
});
lsDef[defIndex].style.display = "block";

setInterval(() => {
    lsDef[defIndex].style.display = "none";

    defIndex++;
    if (defIndex == lsDef.length) defIndex = 0;

    lsDef[defIndex].style.display = "block";
}, 5000);


// Caroussel Rond
$(document).ready(function() {
  $("#news-slider").owlCarousel({
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true,
      responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });
});