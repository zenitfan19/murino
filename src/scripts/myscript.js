//Переключение табов

$(document).ready(function () {  
    $('.scrollbar-dynamic').scrollbar();    
    $( ".search-page-option select" ).click(function(event) {
        event.preventDefault();      
      });      
    $('.search-page-option select').SumoSelect();
    
      setTimeout(function(){
        $('.road-news-content').each(function (index, element) {
            var el = $('.road-news-content').eq(index);
            el.find('.road-news-right').css('max-height', el.find('.road-news-left').innerHeight());
            console.log(el.find('.road-news-left').find('.road-news-left__title').html());
            console.log(el.find('.road-news-left').height());            
          });
            }, 1000);            
    
          $('.header-menu a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active');
            }
          });   
          
          
          $(document).on('click', '.hamburger', function () {
            $(document).find('.header-mobile-menu').addClass('active fadeInLeft animated');
            if ($(this).hasClass('is-active')) {
                  $(document).find('.header-mobile-menu').removeClass('fadeInLeft');
                  $(document).find('.header-mobile-menu').addClass('fadeOutLeft');
            } else {
                  $(document).find('.header-mobile-menu').removeClass('fadeOutLeft');
            }
            $(this).toggleClass('is-active');
      });
      // $(window).scroll(function () {
      //       if ($(this).scrollTop() > 1) {
      //             $(document).find('.header-mobile-menu').removeClass('fadeInLeft');
      //             $(document).find('.header-mobile-menu').addClass('fadeOutLeft');
      //             $(document).find('.hamburger').removeClass('is-active');
      //       }
      // });
      $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $('.header-mobile-menu'); // тут указываем сласс элемента
            if ($('.hamburger').is(e.target) || $('.hamburger-box').is(e.target) || $('.hamburger-inner').is(e.target)) {
                  return;
            }
            if (!div.is(e.target) && div.has(e.target).length === 0) { // если клик был не по нашему блоку и не по его дочерним элементам
                  div.removeClass('fadeInLeft');
                  div.addClass('fadeOutLeft'); // скрываем его
                  $(document).find('.hamburger').removeClass('is-active'); // меняем значок гамбургера
            }
      });
      $(function () {
            $(window).resize(function () {
                  if (screen.width > 1024) {
                        $(document).find('.hamburger').removeClass('is-active');
                        $(document).find('.header-mobile-menu').removeClass('active');
                        $(document).find('.header-mobile-menu').removeClass('fadeOutLeft');
                        $(document).find('.header-mobile-menu').removeClass('animated');
                  }
                  if (screen.width < 1249) {                    
                    $(document).find('.top-news-content > .main-news-left-block__new').each(function (index, element) {                      
                      var el = $('.top-news-content > .main-news-left-block__new').eq(index);
                      if(index > 2) {
                        el.css('display', 'none');                          
                      }          
                    });                    
              } else {
                $(document).find('.top-news-content > .main-news-left-block__new').each(function (index, element) {
                  var el = $('.top-news-content > .main-news-left-block__new').eq(index);
                  el.css('display', 'block');
                }); 
              }
            });
      });
    
});