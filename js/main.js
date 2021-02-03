jQuery(document).ready(function(){

	$('#videolink').magnificPopup({
		type:'inline',
		midClick:true

	});

});
$('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:5000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:2
              }
          }
      })



// $(function(){
// 	$("#progress-elements").waypoint(function(){
// 		$(".progress-bar").each(function(){
// 			$(this).animate({
// 				width: $(this).attr("aria-valurnow") + "%"
// 			}, 2000);
// 		});
// 		this.distroy();
// 	},{
// 		offset:'bottom-in-view'

// 	}
// 	});

		




// });





$(function(){
	$("#services-tabs").responsiveTabs({
		animatate:'slide'
	});







});