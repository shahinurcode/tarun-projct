// strict just to keep concept of bootstrap
+function ($) {
  'use strict';


// spy and scroll menu boogey
$("#main-menu ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault()

   // store hash
   var hash = this.hash

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top -150
     }, 700, function(){
       window.location.hash = hash -500
     })

})

}(jQuery);