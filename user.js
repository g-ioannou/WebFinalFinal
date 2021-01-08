
$(document).ready(function(){

$(".round").click(function(){
  
    $(".sidebar").toggleClass('active');
   
   
});

$(".close-btn").click(function(){
  
  
  $(".sidebar").toggleClass('active');
 
});

$(".round").hover(function(){
  $(this).css("padding-left", "yellow");
});
});

