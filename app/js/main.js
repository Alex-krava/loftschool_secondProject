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
    $( "#amount-first" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-second" ).val($( "#slider-range" ).slider( "values", 1 ));
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