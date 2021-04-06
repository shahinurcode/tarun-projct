 $(document).ready(function() {
     $('#slider_one').carousel({
         pause: 'hover'
     });

     $('#slider_two').carousel({
         pause: 'hover',
         interval: 4000
     });
     $(function() {
         $.scrollUp({
             scrollText: '<i class="fa fa-chevron-up"></i>'
         });
     });


 });
