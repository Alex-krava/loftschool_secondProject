/* global $ */
(function(){
  $(".content-index_header_select").select2({
        minimumResultsForSearch: Infinity
});
})();

//======================================
//Filter contacts
//======================================
(function(){
    $(".catalogs-buttons_first").on("click", function(){
        $(".content-index_content--second")
            .removeClass()
            .addClass("content-index_content");
            
        $(".content-index_content-list")
            .removeClass("content-index_content-list--second")
            .removeClass("content-index_content-list--third")
            .addClass("content-index_content-list--first");
        
        clear();
        $(".catalogs-buttons_first")
            .removeClass("catalogs-buttons_first")
            .addClass("catalogs-buttons_first--active");
    });
    
    $(".catalogs-buttons_second--active").on("click", function(){
        $(".content-index_content")
            .removeClass()
            .addClass("content-index_content--second");
        
        $(".content-index_content-list")
            .removeClass("content-index_content-list--first")
            .removeClass("content-index_content-list--third")
            .addClass("content-index_content-list--second");
            
        clear();
        $(".catalogs-buttons_second")
            .removeClass("catalogs-buttons_second")
            .addClass("catalogs-buttons_second--active");
    });
    
    $(".catalogs-buttons_third").on("click", function(){
        $(".content-index_content--second")
            .removeClass()
            .addClass("content-index_content");
        
        $(".content-index_content-list")
            .removeClass("content-index_content-list--second")
            .removeClass("content-index_content-list--first")
            .addClass("content-index_content-list--third");
    
        clear();
        $(".catalogs-buttons_third")
            .removeClass("catalogs-buttons_third")
            .addClass("catalogs-buttons_third--active");
    });
    
    function clear(){
        $(".catalogs-buttons_first--active").removeClass("catalogs-buttons_first--active").addClass("catalogs-buttons_first");
        $(".catalogs-buttons_second--active").removeClass("catalogs-buttons_second--active").addClass("catalogs-buttons_second");
        $(".catalogs-buttons_third--active").removeClass("catalogs-buttons_third--active").addClass("catalogs-buttons_third");
    }
    
})();
//SLIDER JQUERY UI
(function () {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 100, 13000 ],
      slide: function( event, ui ) {
        $( "#amount-first" ).val(ui.values[0]);
        $( "#amount-second" ).val(ui.values[1]);
      }
    });
    
    $( "#amount-first" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-second" ).val($( "#slider-range" ).slider( "values", 1 ));
    
    $("input#amount-first").change(function () {
        var value1 = $("input#amount-first").val();
        var value2 = $("input#amount-second").val();
            
            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#amount-first").val(value1);
            }
            $("#slider-range").slider("values", 0, value1);
    });
    $("input#amount-second").change(function () {
        var value1 = $("input#amount-first").val();
        var value2 = $("input#amount-second").val();
            
            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#amount-second").val(value2);                
            }
            $("#slider-range").slider("values", 1, value2);
    });
})();

//ACCORDION
(function(){
    
    $(".sidebar_accordion_availability_title").on("click", function(){
            $(".sidebar_accordion_availability").toggleClass("accordion-height");
            $(".sidebar_accordion_availability_title").toggleClass("accordion-cursor");
    });
    $(".sidebar_accordion_brands_title").on("click", function(){
            $(".sidebar_accordion_brands").toggleClass("accordion-height");
            $(".sidebar_accordion_brands_title").toggleClass("accordion-cursor");
    });
    $(".sidebar_accordion_price_title").on("click", function(){
            $(".sidebar_accordion_price").toggleClass("accordion-height");
            $(".sidebar_accordion_price_title").toggleClass("accordion-cursor");
    });
    $(".sidebar_accordion_color_title").on("click", function(){
            $(".sidebar_accordion_color").toggleClass("accordion-height");
            $(".sidebar_accordion_color_title").toggleClass("accordion-cursor");
    });
    $(".sidebar_accordion_form_title").on("click", function(){
            $(".sidebar_accordion_os").toggleClass("accordion-height");
            $(".sidebar_accordion_form_title").toggleClass("accordion-cursor");
    });
    
})();

//columnizer
(function () {
    $('.info-text_container').columnize({ columns: 2});
})();

//slideshow
(function () {
    $(".content-index_content-item_photo_small_link").on("click", function(e){
        e.preventDefault();
        
        var $this = $(this),
            item = $this.closest(".content-index_content-item_photo_small"),
            container = $this.closest(".content-index_content-item_photo"),
            display = container.find(".content-index_content-item_photo_big"),
            path = item.find('img').attr('src'),
            duration = 300;
        
        path = path.substr(0, path.length - 5) + "b.png";
        
        if(!item.hasClass("active")){
            item.addClass('active').siblings().removeClass("active");
            
            display.find('img').fadeOut(duration, function(){
                $(this).attr('src', path).fadeIn(duration);
            });
        }
    });
})();