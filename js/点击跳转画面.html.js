/**
 * Created by student on 2018/10/15.
 */

//作者信息条的固定
$(function(){
    //添加滚动事件
    $(document).scroll(function () {
        var stop = $(window).scrollTop();
        if(stop > ($(".card-note").height())-1100){
            $(".bottom-fixed").css({
                "display":"none"
            });
        }
        else{
            $(".bottom-fixed").css("display","block");
        }
    });
})

//相关笔记的固定
$(document).scroll(function () {
    var stop = $(window).scrollTop();
    if(stop > 200){
        $(".bottom").css({
            "position":"fixed",
            "top":80
        });
    }
    else{
        $(".bottom").css({
            "position":"relative",
            "top":10
        });
    }
});

//轮播图的实现
$(document).ready(function() {
    $('#view').setZoomPicture({
        thumbsContainer: '#pics-thumbs',
        prevContainer: '#nav-left-thumbs',
        nextContainer: '#nav-right-thumbs',
        zoomContainer: '#zoom',
        zoomLevel: 2,
        loadMsg: 'Chargement...'
    });
});



/*
window.onscroll = function(e){
    var oev = e|| window.event;
    var scrollTop = getScroll().scrollTop;
    /!*var height=document.getElementById("card-note").offsetHeight;*!/
    if(scrollTop > 200){
        my$("bottom").style.position = "fixed";
        my$("bottom").style.top = "80px";
    }else{
        my$("bottom").style.position = "relative";
        my$("bottom").style.top = "10px";
    }
}
*/

/*//鼠标移入显示二维码
var smallewm=document.querySelectorAll(".smallewm")[0];
var bigewm=document.querySelectorAll(".bigewm")[0];
smallewm.onmouseenter=function (){
    bigewm.style.display="block"
}
smallewm.onmouseleave=function () {
    bigewm.style.display="none"
}

//回到顶部
var header=document.querySelectorAll(".header")[0];
var backtop=document.querySelectorAll(".backtop")[0];
header.className="header"
window.onscroll=function (e) {
    var oev=e||window.event;
    var scrollTop=getScroll().scrollTop;
    if(scrollTop>10){
        header.className="header";
        backtop.style.display="block"
        backtop.onmouseover=function () {
            backtop.className="scrolltop"
        }
        backtop.onmouseleave=function (){
            backtop.className="backtop"
        }
    }
    else{
        header.className="header"
        backtop.style.display="none"
    }
}
backtop.onclick=function () {
    var timer=setInterval(function () {
        var currentScrollTop=getScroll().scrollTop;
        var targetScrollTop=0;
        var step=-20;
        if(Math.abs(currentScrollTop-targetScrollTop)<Math.abs(step)){
            document.body.scrollTop=targetScrollTop;
            document.documentElement.scrollTop=targetScrollTop;
            clearInterval(timer);
            return
        }
        currentScrollTop+=step;
        document.body.scrollTop=currentScrollTop;
        document.documentElement.scrollTop=currentScrollTop;
    },1)
}*/



