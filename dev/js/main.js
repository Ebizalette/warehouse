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
	    $("#menu").css("background" , "white");
	  }

	  else{
		  $("#menu").css("background" , "transparent");  	
	  }
  })
})