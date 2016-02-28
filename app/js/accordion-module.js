var accordion = (function () {
    var init = function () {
        _setUpListners();
    }

    var _setUpListners = function () {
        $(".availability_title").on("click", function(){
            $(".availability").toggleClass("accordion-height");
            $(".availability_title").toggleClass("accordion-cursor");
    });
        $(".brands_title").on("click", function(){
            $(".brands").toggleClass("accordion-height");
            $(".brands_title").toggleClass("accordion-cursor");
    });
        $(".price-filter_title").on("click", function(){
            $(".price-filter_form").toggleClass("accordion-height");
            $(".price-filter_title").toggleClass("accordion-cursor");
    });
        $(".color_title").on("click", function(){
            $(".color").toggleClass("accordion-height");
            $(".color_title").toggleClass("accordion-cursor");
    });
        $(".os_title").on("click", function(){
            $(".os").toggleClass("accordion-height");
            $(".os_title").toggleClass("accordion-cursor");
    });
    }

    return {
        init: init
    }
})();

// accordion.init();