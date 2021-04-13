// Arrow in nav **************************************************************

let mainNavItems = $('.nav__item')

$.each(mainNavItems, function(ind, item) {
  if ($(item).children().length >= 2) {
    $(item).addClass('nav__item_parent')
  }
})

if ($(window).width() < 768) {
  $('.nav__item_parent').append('<span class="nav__arrow"></span>')
}

$('.nav__arrow').click(function() {
$(this).toggleClass('nav__arrow_active')
       .siblings('.nav__sublist')
       .slideToggle(300)
})

let burgerWidth = $('.burger').innerWidth()
$('.nav').css('width', `calc(100% - ${burgerWidth + 30}px)`)

// Burger ********************************************************************

$('.burger').click(function() {
  $(this).toggleClass('burger_active')
  // $('body').toggleClass('no-overflow')
  $('.nav').toggleClass('nav_active')
  // $('.nav').slideToggle(300)
})
