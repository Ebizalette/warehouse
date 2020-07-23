var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("nav").css({"background": "lightgrey" , "color": "#000"});
	  }

	  else{
		  $("nav").css("background" , "transparent");  	
	  }
  })
})