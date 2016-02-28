var slideshow = (function () {
    var init = function () {
        _setUpListners();
    }

    var _setUpListners = function () {
        $(".content-index_photo-small--link").on("click", function(e){
            e.preventDefault();
        
            var $this = $(this),
                item = $this.closest(".content-index_photo-small"),
                container = $this.closest(".content-index_photo"),
                display = container.find(".content-index_photo-big"),
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
    }

    return {
        init: init
    }
})();

// slideshow.init();