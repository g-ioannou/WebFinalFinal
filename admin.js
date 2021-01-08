$(document).ready(function(){
    $('.Information-Display').hide(); //hide all the reason text
    $('.Request-Response-Time-Analysis').hide();
    $('.HTTP-Analysis').hide();
    $('.IP-Map').hide();
    $('.InformationDisplay').click(function() {
      $('.Information-Display').show();
      $('.Request-Response-Time-Analysis').hide();
      $('.HTTP-Analysis').hide();
      $('.IP-Map').hide();
    });
    $('.RequestResponse').click(function() {
        $('.Information-Display').hide();
        $('.Request-Response-Time-Analysis').show();
        $('.HTTP-Analysis').hide();
        $('.IP-Map').hide();
      });
      $('.HTTP').click(function() {
        $('.Information-Display').hide();
        $('.Request-Response-Time-Analysis').hide();
        $('.HTTP-Analysis').show();
        $('.IP-Map').hide();
      });
      $('.IP').click(function() {
        $('.Information-Display').hide();
        $('.Request-Response-Time-Analysis').hide();
        $('.HTTP-Analysis').hide();
        $('.IP-Map').show();
      });
    });