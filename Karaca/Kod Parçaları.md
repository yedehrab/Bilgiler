# Kod Parçaları <!-- omit in toc -->

## İçerik <!-- omit in toc -->

- [Slider](#slider)
  - [JQuery Slick Eklentisi](#jquery-slick-eklentisi)
- [Product Yapısı](#product-yap%C4%B1s%C4%B1)

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

## Product Yapısı

```html
<div class="row products">
    <div>
        <?php if ($products): ?>
            <?php foreach ($products as $product) { ?>
                <div class="item col-xs-6 col-sm-<?php echo $list_column; ?> <?php if($product['special_item']){ echo 'special-item'; } ?>">
                    <a href="<?php echo $product['href']; ?>">
                        <?php if ($product['discount']) { ?>
                            <div class="discount discount-skin"><span
                                    class="percent">%<?php echo $product['discount']; ?></span> İNDİRİM</div>
                        <?php } ?>
                        <?php if ($product['speed_delivery']) { ?>
                        <div class="discount discount-skin <?php if ($product['discount']) { ?>mt40<?php } ?> speed-delivery">AYNI GÜN KARGO</div>
                        <?php } ?>
                        <?php if ($product['tv_product']) { ?>
                            <div class="tv-product hidden-xs"></div>
                        <?php } ?>
                        <div class="text-center">
                            <div class="circle-wrapper">
                                <div class="circle"></div>
                            </div>
                            <img data-src="<?php echo $product['thumb']; ?>" class="img-responsive lazy">
                        </div>
                        <div class="caption">
                        <h3><?php echo $product['manufacturer']; ?></h3>
                        <h4><?php echo trim(str_replace($product['manufacturer'], '', $product['name'])); ?></h4>
                        </div>
                        <?php if (!$product['special']) { ?>
                            <div class="price-old"></div>
                            <div class="price"><?php echo $product['price']; ?></div>
                        <?php } else { ?>
                            <div class="price-old"><?php echo $product['price']; ?></div>
                            <div class="price"><?php echo $product['special']; ?></div>
                        <?php } ?>
                        <div style="height: 20px;">
                            <?php if(isset($product['attributes'][10]['attribute'][53])) {
                            $badge_start = $product['attributes'][10]['attribute'][53]['date_start'];
                            $badge_end = $product['attributes'][10]['attribute'][53]['date_end'];
                            if(($badge_start == 0 || (strtotime($badge_start) <= time())) && ($badge_end == 0 || (strtotime($badge_end) >= time()))) { ?>
                            <span class="badge mt10" style="font-size: 13px; background-color: #b3e2e2; color: #444d4b;"><?php echo $product['attributes'][10]['attribute'][53]['text']; ?></span>
                            <?php } } ?>
                        </div>
                    </a>
                </div>
            <?php } ?>
        <?php else: ?>
            <div style="text-align: center; margin: 20px 0; font-size: 20px;">Ürün bulunamadı.</div>
        <?php endif; ?>
    </div>
        <div class="col-xs-12 hidden"><?php echo $pagination; ?></div>
</div>
```