
$(function(){
    $("#ios").mouseenter(function(){
        $("#erweima1").css({"display" :"block"});
    }).mouseleave(function(){
        $("#erweima1").css({"display" :"none"});
    })
})


$(function(){
    $("#android").mouseenter(function(){
        $("#erweima2").css({"display" :"block"});
    }).mouseleave(function(){
        $("#erweima2").css({"display" :"none"});
    })
})



$(function(){
    $("#erleft").mouseenter(function(){
        $("#bigerleft").css({"display":"block"});
    }).mouseleave(function(){
        $("#bigerleft").css({"display":"none"});
    })
})


$(function(){
    $("#mianTupian").show(5000);
})


// my$("renturnTop").onclick = function(){
//     window.scrollTo(0,0);
// }
$(function(){
    $("#renturnTop").click(function(){
        window.scrollTo(0,0);
    })
})


// my$("renturnTop").onmouseenter = function(){
//     $("#renturnTop_img").attr("src","../images/backtop2.1959f1a.png")
// }
$(function(){
    $("#renturnTop_img").mouseenter(function(){
        $(this).attr("src","../images/backtop2.1959f1a.png")
    })
})

// my$("renturnTop").onmouseleave = function(){
//     $("#renturnTop_img").attr("src","../images/download.png")
// }

$(function(){
    $("#renturnTop_img").mouseleave(function(){
        $(this).attr("src","../images/download.png")
    })
})

window.onscroll = function(e){
    var oev = e|| window.event;
    var scrollTop = getScroll().scrollTop;
    if(scrollTop >750){
        my$("renturnTop").style.display = "block";
    }else{
        my$("renturnTop").style.display = "none";
    }
}


// function MArray() {
//     this.length = MArray.arguments.length;
//     for (var i = 0; i < this.length; i++)
//         this[i+1] = MArray.arguments[i]}
// var fArray = new MArray;
// fArray[0]="全世界的好东西";
// fArray[1]="标记我的生活";
// fArray[2]="明星生活的另一面";
// fArray[3]="吃穿玩乐买的日常";
// var x = 1;
// var y = 0;
// var msg1 = fArray[y];
// function newsSee() {
//     if (x==msg1.length+1) {
//         y+=1;
//         if (y > 3) y=0;
//         document.form1.news2.value=' ';
//         msg1 = fArray[y];
//         x=0;}
//     document.form1.news2.value=msg1.substring(0,x);
//     x+=1;
//     setTimeout("newsSee() ",200);
// }

$(function(){
    //记录当前动画到几
    var index = 0;
    //2.开启定时器
    function startTimer() {
        setInterval(function(){
            $(".allzi").children().eq(index).find(".title").addClass("zoomIn animated");
            $(".allzi").children().eq(index).siblings().find(".title").removeClass("zoomIn animated");

            $(".allzi").children().eq(index).find(".process").animate({"width":280},1000,"linear");
            $(".allzi").children().eq(index).siblings().find(".process").width(0);
            index++;

            if(index == 4){
                index =0 ;
            }
        },3000);


    }
    startTimer();


})
