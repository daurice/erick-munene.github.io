$(document).foundation() 



// var sections = $("section"),
// 	navigation_links = $("#nav a");	

// 	sections.waypoint( {

//        handler: function(direction) {

// 		   var active_section;

// 			active_section = $('section#' + this.element.id);

// 			if (direction === "up") active_section = active_section.prev();

// 			var active_link = $('#nav a[href="#' + active_section.attr("id") + '"]');			

//          navigation_links.parent().removeClass("current");
// 			active_link.parent().addClass("current");

// 		}, 

// 		offset: '25%'

// 	});







//$(document).ready(function(){
//    $(".button-nav a").click(function(){
//        $(".overlay").fadeToggle(200);
//       $(this).toggleClass('btn-open').toggleClass('btn-close');
//    });
//});
//$('.overlay').on('click', function(){
////    $(".overlay").fadeToggle(200);   
//    $(".button-nav a").toggleClass('btn-open').toggleClass('btn-close');
//    open = false;
//});


 /*---
====================================================================
                      FORM SCRIPT
===================================================================
-- */

// var form = $('#contact'),
//     submit = form.find('[name="submit"]');

// form.on('submit', function(e) {
//   e.preventDefault();
  
//   // avoid spamming buttons
//   if (submit.attr('value') !== 'Send')
//     return;
  
//   var valid = true;
//   form.find('input, textarea').removeClass('invalid').each(function() {
//     if (!this.value) {
//       $(this).addClass('invalid');
//       valid = false;
//     }
//   });
  
//   if (!valid) {
//     form.animate({left: '-3em'},  50)
//         .animate({left:  '3em'}, 100)
//         .animate({left:    '0'},  50);
//   } else {
//     submit.attr('value', 'Sending...')
//           .css({boxShadow: '0 0 200em 200em rgba(225, 225, 225, 0.6)',
//                 backgroundColor: '#000000'});
//     // simulate AJAX response
//     setTimeout(function() {
//       // step 1: slide labels and inputs
//       // when AJAX responds with success
//       // no animation for AJAX failure yet
//       form.find('label')
//           .animate({left: '100%'}, 500)
//           .animate({opacity: '0'}, 500);
//     }, 1000);
//     setTimeout(function() {
//       // step 2: show thank you message after step 1
//       submit.attr('value', 'Thank you :)')
//             .css({boxShadow: 'none'});
//     }, 2000);
//     setTimeout(function() {
//       // step 3: reset
//       form.find('input, textarea').val('');
//       form.find('label')
//           .css({left: '0'})
//           .animate({opacity: '1'}, 500);
//       submit.attr('value', 'Send')
//             .css({backgroundColor: ''});
//     }, 4000);
//   }
// });





