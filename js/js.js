// JavaScript Document

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#cloud1').css('top',(0-(scrolled*.25))+'px');
    $('#cloud2').css('top',(0-(scrolled*.5))+'px');
    $('#cloud3').css('top',(0-(scrolled*.75))+'px');
	$('#cloud4').css('top',(0-(scrolled*.25))+'px');
    $('#cloud5').css('top',(0-(scrolled*.5))+'px');
    $('#cloud6').css('top',(0-(scrolled*.75))+'px');
	$('#cloud7').css('top',(0-(scrolled*.75))+'px');
}

window.addEventListener("scroll", function() {

  var mySound = document.getElementById("myaudio");
  var lyd = document.getElementById("lyd");
  console.log("Er div #lyd synlig? " + elFllVsbl(lyd)); 

  if (elFllVsbl(lyd)) { 
    if (!(mySound.curentTime > 0)) {
      mySound.play(); 
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0; 
  }
})

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

var slideIndex = [1,1];
var slideId = ["slides"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

