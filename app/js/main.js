/* global $ */
if($(".content-index_header_select").length){
    (function(){
        $(".content-index_header_select").select2({
            minimumResultsForSearch: Infinity
        });
    })();
}

if($(".catalogs-buttons_first").length){
    contentFilter.init();
}

if($(".availability_title").length || $(".brands_title".length || $(".price-filter_title").length || $(".color_title").length || $(".os_title").length)){
    accordion.init();
}


//columnizer
if($('.info-text_container').length){
    $('.info-text_container').columnize({ columns: 2});
}

if($(".content-index_photo-small--link").length){
    slideshow.init();
}