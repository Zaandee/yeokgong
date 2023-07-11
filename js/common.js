$(document).ready(function() {
    $('.search_box').hide();
    $('.search').click(function(){
        $('.search_box').toggle(

            function(){$('.search_box').addClass('show')}, //클릭하면 show클래스 적용되서 보이기
 
            function(){$('.search_box').addClass('hide')}
        )
        
    });




});