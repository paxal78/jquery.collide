(function($) {
    $.extend($.fn, {
        collide: function(selector) {
            var matchs = [];
            var object1 = $(this);
            $(selector).each(function() {
                var object2 = $(this);
                if (object1.offset().left < object2.offset().left + object2.width() && object1.offset().left + object1.width() > object2.offset().left && object1.offset().top < object2.offset().top + object2.height() && object1.offset().top + object1.height() > object2.offset().top) {
                    matchs.push(object2)
                }
            })
            return matchs;
        }
    });
}(jQuery));