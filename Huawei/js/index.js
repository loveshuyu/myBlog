~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();
var s = new Swiper(".swiper-container1", {
    direction: "horizontal",
    loop: true,
    pagination: ".swiper-pagination",
    paginationClickble:true,
    prevButton:'.swiper-p1',
    nextButton:'.swiper-p2',
    slidesPerView:1,
    spaceBetween:0,
    speed: 500,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
var s3 = new Swiper(".swiper-container3", {
    direction: "horizontal",
    loop: true,
    pagination: ".swiper-pagination",
    paginationClickble:true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    slidesPerView:1,
    spaceBetween:0,
    speed: 500,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
var s2 = new Swiper('.swiper-container2',{
    direction: "vertical",
    loop: true,
    slidesPerView:1,
    spaceBetween:0,
    speed: 500,
    autoplay: 2000,
    autoplayDisableOnInteraction: false
});



