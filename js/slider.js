/**
 * Created by Anton on 07.09.2015.
 */

(function($){
    $(document).ready(function(){
        $( ".menu-toggle" ).click(function() {
            $(".nav").slideToggle( "fast" );
        });

        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            pager: false
        });
        $('.slider1').bxSlider({
            slideWidth: 200,
            minSlides: 2,
            maxSlides: 4,
            slideMargin: 10,
            pager: false
        });
    });
})(jQuery);



