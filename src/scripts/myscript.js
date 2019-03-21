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
            
    //   $(document).on('click', '.header-menu a:not(active)', function(){
    //     var page_number = $(this).index();                
    //     $(this).addClass('active').siblings('.header-menu a').removeClass('active');        
    // });
          $('.header-menu a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active');
            }
          });        
    
});