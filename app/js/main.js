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
    });
    $(".catalogs-buttons_second").on("click", function(){
        $(".content-index_content")
            .removeClass()
            .addClass("content-index_content--second");
        
        $(".content-index_content-list")
            .removeClass("content-index_content-list--first")
            .removeClass("content-index_content-list--third")
            .addClass("content-index_content-list--second");
    });
    $(".catalogs-buttons_third").on("click", function(){
        $(".content-index_content--second")
            .removeClass()
            .addClass("content-index_content");
        
        $(".content-index_content-list")
            .removeClass("content-index_content-list--second")
            .removeClass("content-index_content-list--first")
            .addClass("content-index_content-list--third");
    });
})();