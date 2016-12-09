FastClick.attach(document.body);

!function(){
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW/650*100+"px";
}();
var s = new Swiper(".swiper-container",{
    name:"个人简介",
    loop:true,
    direction:"vertical",//纵向轮播
    pagination: ".swiper-pagination",
    //speed: 600,
    //autoplay: 3000,//自动轮播
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    onSlidePrevEnd:changeEnd,
    onSlideNextEnd:changeEnd
});
function changeEnd(swiper){
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry,function(slide,index){
        if(n == index){
            slide.id = (n == 1||n == 7)?"bg1":"slide1";
            return;
        }
        slide.id = null;
    });
}

var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);