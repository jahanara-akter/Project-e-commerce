$(".banner_slider").slick({
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots: true,
});

$(".product_slide").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right right"></i>',
});
$(".preview_slider_part").slick({
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.preview_btn_slider',
});
$(".preview_btn_slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right right"></i>',
    asNavFor: '.preview_slider_part',
});
let regular_heart = document.querySelector(".regular_heart");
let solid_heart = document.querySelector(".solid_heart");

regular_heart.addEventListener("click", ()=>{
    solid_heart.style.display = "block";
    regular_heart.style.display = "none";
})
solid_heart.addEventListener("click", ()=>{
    solid_heart.style.display = "none";
    regular_heart.style.display = "block";
});