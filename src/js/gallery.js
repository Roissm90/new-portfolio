function initializeSlick() {
    if ($(window).width() <= 768) {
        if (!$('.gallery-container').hasClass('slick-initialized')) {
            $('.gallery-container').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true
            });
        }
    } else {
        if ($('.gallery-container').hasClass('slick-initialized')) {
            $('.gallery-container').slick('unslick');
        }
    }
}

$(document).ready(function() {
    initializeSlick();
    $(window).resize(function() {
        initializeSlick();
    });
});
