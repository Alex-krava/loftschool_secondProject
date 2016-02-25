var accordion = (function () {
    var init = function () {
        _setUpListners();
    }

    var _setUpListners = function () {
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
    }

    return {
        init: init
    }
})();

// accordion.init();