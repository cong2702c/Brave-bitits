$(document).ready(function(){
    $('.Checkout-slide').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        customPaging: function(slider, index) {
            // this example would render "tabs" with titles
            return '<span class="dot"> <img src="./assets/images/checkout/dot.png" style="opacity: 1; border-radius: 50%;" /><img src="./assets/images/checkout/dot-hover.png" style="opacity: 1; border-radius: 50%; border: 1px solid white; background:transparent;margin-top: 0px"/> </span>';
          },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
