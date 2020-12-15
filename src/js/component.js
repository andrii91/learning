$(document).ready(function() { 
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  
    $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(0);
      $('header, main,footer').toggleClass('blur');
      $('body').toggleClass('overflow-hidden')

  });

});