/* global $ */
(function(){
  $(".content-index_header_select").select2({
        minimumResultsForSearch: Infinity
});
})();

contentFilter.init();

accordion.init();

//columnizer
(function () {
    $('.info-text_container').columnize({ columns: 2});
})();

slideshow.init();