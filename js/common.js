//함수실행
$(function(){

///a 이벤트 방지
$(document).on('click', 'a[href="#"]', function(e) {
	e.preventDefault();
});

// 상단메뉴
gnbUI();

function gnbUI() {
    $(' nav > ul > li > a').on('mouseenter', function() {
        $('nav > ul > li').removeClass('open');
        $(this).parent().addClass('open');
   });
    $('nav > ul > li').on('focusin', function() {
        $(this).addClass('open');
    }).on('focusout', function() {
        $(this).removeClass('open');
    });
    $('header').on('mouseleave', function() {
        $(' nav > ul > li').removeClass('open');
    });
}
	
///topbtn
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
        $('.topbtn').fadeIn();
	    $('a.contact').fadeIn();
  } else {
        $('.topbtn').fadeOut();
	    $('a.contact').fadeOut();
  }
});
 $(".topbtn").click(function () {
    $('html, body').animate({scrollTop: 0}, 400);
      return false;
});
	
/// fixheader
var currentScrollTop = 0;
 window.onload = function () {
    $(window).scroll(function () { scrollController(); });
}
function scrollController() {
    currentScrollTop = $(window).scrollTop();
     if (currentScrollTop > 75) {
        $('header').addClass(' mhfixed');
        $('.gnb_box div').addClass('mhfixed');
		$('h1').addClass('mhfixed');
    } else {
      $('header').removeClass('mhfixed');
      $('.gnb_box div').removeClass('mhfixed');
	  $('h1').removeClass('mhfixed');
    }
}
///mobile menu
$(' a.menu').on('click', function(){
      $(this).toggleClass('on');
      $('div.mobile_menu').toggleClass('on')
});
	
///moblie slider
 var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
       navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
	   autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      }
});
	
	
///new_product
$('.panels').each(function () {
    var $article = $(this);
    var $indicator = $article.find('div.color_pick a');
    var $img = $article.find('.new_img');
    var lastAnchor;
    var lastPanel;

    // 탭부분 표시 
    $indicator.show();

    //활성화되어있는 패널 요소 확인 
    lastAnchor = $indicator.filter('.active');
    lastPanel = $(lastAnchor.attr('href'));

    $img.hide();
    lastPanel.show();

    // a요소의 기본동작을 모두 비활성화
    $indicator.click(function (event) {
        event.preventDefault();
        //  클릭했던 a요소에 맞는 패널 확인
        var currentAnchor = $(this);
        var currentPanel = $(currentAnchor.attr('href'));

        lastPanel.hide();
        currentPanel.fadeIn();
 	
        lastAnchor = currentAnchor;
        lastPanel = currentPanel;
    });

});
	
///realreview
$('.hover').on('mouseleave','focusout', function(){ 
	$(this).removeClass('hover');
});

	
}); // end of function