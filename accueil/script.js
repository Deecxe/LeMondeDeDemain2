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
      items : 5,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true
  });
});