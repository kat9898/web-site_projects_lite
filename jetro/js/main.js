$(function () {

    $('.slider__inner').slick({
        arrows: true,
        fade: true,
        asNavFor: '.thumbs'
    });
    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        adapt: function () {
            if (window.screen.width <= 980) {
                this.slidesToScroll = 5;
            }
            if (window.screen.width <= 810) {
                this.slidesToScroll = 4;
            }
        }
    });
    adapt();

    $('.header__menu-btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });

});