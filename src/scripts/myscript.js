//Переключение табов

$(document).ready(function () {  
    $('.scrollbar-dynamic').scrollbar();
    
      setTimeout(function(){
        $('.road-news-content').each(function (index, element) {
            var el = $('.road-news-content').eq(index);
            el.find('.road-news-right').css('max-height', el.find('.road-news-left').innerHeight());
            console.log(el.find('.road-news-left').find('.road-news-left__title').html());
            console.log(el.find('.road-news-left').height());            
          });
            }, 1000);  
});