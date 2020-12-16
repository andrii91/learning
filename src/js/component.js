$(document).ready(function() { 
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  
    $('#nav-icon').click(function () {
      $('.hamburger').toggleClass('is-active')
    $('.nav').toggleClass('menu-open')
      
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(0);
      $('header, main,footer').toggleClass('blur');
      $('body').toggleClass('overflow-hidden')

  });

  
  
  
  function hamburger() {
/*    if ($('.hamburger').hasClass('is-active') && !$('modal').is(':visible')) {
        $('body').removeClass('noScroll')
    } else $('body').addClass('noScroll')
    if (!$('.header').hasClass('header_fixed')) {
        $('.main').height($('.main').height())
        $('.nav').addClass('nav_fixed')
    }
    if ( $('.nav').hasClass('menu-open') && $(window).scrollTop() <= 27) {
        $('.nav').removeClass('nav_fixed')
    }*/
//    $('.hamburger').toggleClass('is-active')
//    $('.nav').toggleClass('menu-open')
//    $('.content').toggleClass('blur')
}

      $('.hamburger').click(hamburger)

    $('.header__item').click(function (e) {
        if ($(window).width() <= 1023) hamburger()
    })
  
  
});