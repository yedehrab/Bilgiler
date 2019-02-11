# Kod Parçaları

## Slider

### JQuery Slick Eklentisi

```js
$('#seri-slider').slick({
    responsive:     true,
    infinite:       true,
    slidesToShow:   4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: false,
    autoplay: true,
    prevArrow: '<i class="icon-arrow-left icon-xlg slider-prev hard-black"></i>',
    nextArrow: '<i class="icon-arrow-right icon-xlg slider-next hard-black"></i>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: false,
                prevArrow: '<i class="icon-arrow-left icon-xlg slider-prev black"></i>',
                nextArrow: '<i class="icon-arrow-right icon-xlg slider-next black"></i>',
            }
        }
    ]
});
```