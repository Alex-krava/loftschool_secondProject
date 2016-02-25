var contentFilter = (function () {
    var init = function () {
        _setUpListners();
    }

    var _setUpListners = function () {
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
    }

    return {
        init: init
    }
})();

// contentFilter.init();