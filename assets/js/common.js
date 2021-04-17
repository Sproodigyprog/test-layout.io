$(document).ready(function() {

  // Calc header height and set the indent at the top of the page **************
  // for a fixed header ********************************************************

  // let headerHeight = $('.header').innerHeight()
  // $('body').css('padding-top', headerHeight)

  // Actions on the header *****************************************************

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) $('.header').addClass('shadow')
    else $('.header').removeClass('shadow')
  })

  // Replace header__info ******************************************************

  if ($(window).width() < 1150) {
    $('.header__info').insertAfter($('.header__actions'))
  }

  // Main nav top position *****************************************************

  if ($(window).width() < 991.98) {
    $('.header__nav-wrp').insertAfter($('.cart-wrp'))

    headerHeight = $('.header').innerHeight()
    $('.main-nav').css('top', headerHeight + 1 + 'px')
  }

  // Video play ****************************************************************

  $('.video__play').click(function() {
    let video = $(this).parents('.video').find('.video__data').get(0)
    $(video).trigger( $(video).prop('paused') ? 'play' : 'pause')
  })

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

  // let burgerWidth = $('.burger').innerWidth()
  // $('.nav').css('width', `calc(100% - ${burgerWidth + 30}px)`)

  // Burger ********************************************************************

  $('.burger').click(function() {
    $(this).toggleClass('burger_active')
    // $('body').toggleClass('no-overflow')
    $('.nav').toggleClass('nav_active')
    // $('.nav').slideToggle(300)
  })

  // Scroll up button **********************************************************

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) $('.scroll-up').addClass('scroll-up_show')
    else $('.scroll-up').removeClass('scroll-up_show')

    if ($(window).width() < 768 && $(window).scrollTop() > 0) {
      $('.header__row_info').hide()
    } else {
      $('.header__row_info').show()
    }
    // headerHeight = $('.header').innerHeight()
    // $('body').css('padding-top', headerHeight)
    // $('.main-nav').css('top', headerHeight + 1 + 'px')
  })

  $('.scroll-up').click(function() {
    $(window).scrollTop(0)
  })

  // Slider init ***************************************************************

  // $('.review-slider').slick({
  //   infinite: true,
  //   arrows: true,
  //   prevArrow: '<button type="button" class="slick-prev slick-arrow" role="button" aria-pressed="true" aria-label="Предыдущая новость"><img src="/assets/img/icons/icon-slider-arrow-left.svg" alt="стрелка влево"></button>',
  //   nextArrow: '<button type="button" class="slick-next slick-arrow" role="button" aria-pressed="true" aria-label="Слудующая новость"><img src="/assets/img/icons/icon-slider-arrow-right.svg" alt="стрелка вправо"></button>',
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         infinite: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  $('.table-price__select, .choose-filler__select').on('change', function() {
    var priceDop = +$(this).find('option:selected').attr('data-price');
    var prod = $(this).parents('.prod');
    if (prod.find('.prod__price').text()) {
      var price = +prod.find('.prod__price').attr('data-price');
      prod.find('.prod__price').text(price + priceDop);
    }
  });

  // Сentering horizontal menu *************************************************

  // Version 1 -----------------------------------------------------------------

  $('.big-menu__link').click(function() {
    $(window).off('scroll')
    sliderHeight = $('.main-slider').outerHeight(true)
    let id = $(this).attr('data-id')
    let menuWidth = $('.big-menu').outerWidth(true)
    $(this).addClass('big-menu__link_active').siblings().removeClass('big-menu__link_active')
    $('.category-' + id).show().siblings().hide()
    window.scrollTo(0, sliderHeight)
    this.scrollIntoView({inline: "center", behavior: "smooth"})
  });

  // Version 2 -------------------------------------------------------------------

  if (window.location.href === 'https://hinkali.abmi63.ru/' || window.location.href === 'http://hinkali.abmi63.ru/') {
    $('.menu__link.first').addClass('menu__link_active')
  } else {
    if ($('.menu__link_active').length > 0) {
      let s = setTimeout(function scrollWindow() {
        $(window).scrollTop($('.main-window').innerHeight() - 70)
        s = setTimeout(scrollWindow, 2000)
        clearInterval(s)
      }, 2000)
      let w = setTimeout(function scrollMenu() {
        let windowWidth = $(window).innerWidth()
        let activeLink = $('.menu__link_active')
        let activeLinkOffsetLeft = activeLink.offset().left
        let activeLinkWidth = activeLink.innerWidth()
        let left = activeLinkOffsetLeft - (windowWidth / 2) + (activeLinkWidth / 2)
        $('.menu__list').animate({
          scrollLeft: left
        }, 400)
        w = setTimeout(scrollMenu, 2500)
        clearInterval(w)
      }, 2500)
    }

    // Horizontal tabs

    let tabsHeader = $('.tabs__header')
    let tabsItem = $('.tabs__item')
    let tabsHeaderLength = tabsHeader.length
    let tabWidth = 100 / tabsHeaderLength

    $.each(tabsHeader, function(ind, header) {
      $(header).css('width', tabWidth + '%').attr('data-header-id', ind)
    })

    $.each(tabsItem, function(ind, item) {
      $(item).attr('data-item-id', ind)
    })

    $('.underline').css('width', tabWidth + '%')

    tabsHeader.click(function() {
      let headerID = $(this).attr('data-header-id')
      let underlineOffset = (+headerID * tabWidth) + '%'

      $.each($('.tabs__header'), function(ind, val) {
        $(val).removeClass('tabs__header_active')
      })
      $(this).addClass('tabs__header_active')
      $('.underline').animate({left: underlineOffset}, 600)

      $.each(tabsItem, function(ind, tab) {
        $(tab).css('display', 'none')
        if (headerID === $(tab).attr('data-item-id')) {
          $(tab).fadeIn(600)
        }
      })
    })
  }

  // Online store ****************************************************************

  $('.add-to-cart').click(function() {
    var parent = $(this).parents('.prod');
    var id = $(this).attr('data-id');
    var count = parent.find('.prod__count').text();
    var sostav = 0;

    if (parent.find('.prod__sostav').length > 0) {
      switch(parent.find('.prod__sostav option:selected').val()) {
        case 'granit': sostav = 2; break;
        case 'graviy': sostav = 1; break;
      }
    }

    $.ajax({
      method: "POST",
      data:{id: id, count: count, sostav: sostav, type: 'add'},
      dataType: 'json',
      url:"/ajax-cart.html",
      success: function(jsondata){
        $('.cart-wrp__cart-count ').text(jsondata.count_total);
        $('.cart-wrp__cart-count').removeClass('cart-wrp__cart-count_hidden');
      }
    });

  });

  $('.cart_minus').click(function() {
    var parent = $(this).parents('.prod');
    var id = parent.attr('data-id');
    var sostav = parent.attr('data-sostav');

    $.ajax({
      method: "POST",
      data:{id: id, sostav: sostav, type: 'minus'},
      dataType: 'json',
      url:"/ajax-cart.html",
      success: function(jsondata){
        location.reload();
      }
    });
  });

  $('.cart_plus').click(function() {
    var parent = $(this).parents('.prod');
    var id = parent.attr('data-id');
    var sostav = parent.attr('data-sostav');

    $.ajax({
      method: "POST",
      data:{id: id, sostav: sostav, type: 'plus'},
      dataType: 'json',
      url:"/ajax-cart.html",
      success: function(jsondata){
        location.reload();
      }
    });
  });

  $('.cart_del').click(function() {
    var parent = $(this).parents('.prod');
    var id = parent.attr('data-id');
    var sostav = parent.attr('data-sostav');

    $.ajax({
      method: "POST",
      data:{id: id, sostav: sostav, type: 'del'},
      dataType: 'json',
      url:"/ajax-cart.html",
      success: function(jsondata){
        location.reload();
      }
    });
  });

  $('.change-count__item_plus').click(function() {
  	let count = $(this).siblings('.change-count__item_count').text()
    count = parseInt(count)
    count++
    $(this).siblings('.change-count__item_count').text(count)
    // console.log(count)
  });

  $('.change-count__item_minus').click(function() {
  	let count = $(this).siblings('.change-count__item_count').text()
    count = parseInt(count)

    if (count === 1) {
      count = 1
    } else {
      count--
    }

    $(this).siblings('.change-count__item_count').text(count)
  })
});

// Online store ****************************************************************

function addToCart(id, count){
	$.ajax({
		method: "POST",
		data:{id_add: id, count: count},
		dataType: 'json',
		url:"/assets/php/cart.php",
		success: function(jsondata){
      // Something here
		}
	})
}

function changeFromCart(id_ch, val){
	$.ajax({
		method: "POST",
		data:{id_ch: id_ch, val: val},
		dataType: 'json',
		url:"/assets/tpl/php/lib.php",
		success: function(jsondata){
      // Something here
		}
	})
}

function deleteFromCart(id_del) {
	$.ajax({
		method: "POST",
		data:{id_del: id_del},
		dataType: 'json',
		url:"/assets/tpl/php/lib.php",
		success: function(jsondata) {
      // Something here
    }
	})
}

function productCartPlus(id_plus){
	$.ajax({
		method: "POST",
		data:{id_plus: id_plus},
		dataType: 'json',
		url:"/assets/tpl/php/lib.php",
    success: function(jsondata) {
      // Something here
    }
	})
}

function productCartMinus(id_minus){
	$.ajax({
		method: "POST",
		data:{id_minus: id_minus},
		dataType: 'json',
		url:"/assets/tpl/php/lib.php",
    success: function(jsondata) {
      // Something here
    }
	})
}
