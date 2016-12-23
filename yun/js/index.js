////var topH = document.documentElement.scrollTop||document.body.scrollTop;
////var mb = document.getElementById("mb"),
////    logo = document.getElementById("logo"),
////    color = document.getElementById("color").getElementsByTagName("a");
////if(topH  > 50){
////    mb.className = "bg";
////    logo.style.background.url = "../img/logo.png"
////}else{
////    mb.className = "mb";
////    //logo
////}
////window.onscroll = function(){
////
////};
//
//
var s = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    pagination: ".swiper-pagination",
    paginationClickble:true,
    slidesPerView:1,
    spaceBetween:0,
    speed: 500,
    autoplay: 3500,
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});

//homeBanner
/*~function(){
    var oInner = document.getElementById("inner"),
        first = oInner.getElementsByTagName("li")[0],
        btnA = document.getElementById("btn").getElementsByTagName("a");
    var oDivClone = first.cloneNode(true);
    oInner.appendChild(oDivClone);
    oInner.style.width = oInner.clientWidth + first.clientWidth+"px";
    var step = 0;
    var autoTimer = null;
    var conW = oInner.style.width/5;

    for(var i=0; i<btnA.length;i++){
        btnA[i].su = i;
        btnA[i].onclick = function(){
            window.clearInterval(autoTimer);
            var index = this.su;
            animate(oInner,{"left":"-"+conW*step},600,1);
            selectCur(index);
            step = index;
            autoTimer = window.setInterval(autoLeft,2000);
        }
    }
    function autoLeft(){
        step++;
        if(step>4){
            oInner.style.left = 0;
            step = 1;
        }
        animate(oInner,{"left":"-"+conW*step},600,1);
        if(step == 4){
            selectCur(0);
        }else{
            selectCur(step);
        }
    }
    autoTimer = window.setInterval(autoLeft,2000);
    function selectCur(n){
        for(var i= 0; i<btnA.length;i++){
            btnA[n].className = " ";
        }
        btnA[n].className = "aHover";
    }
}();*/


