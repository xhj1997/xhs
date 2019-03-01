/**
 * Created by student on 2018/10/12.
 */

//点击查看更多会出现遮罩层,验证
$(function(){
    var $link=$("#link");
    var $bg=$("#bg");
    var $login=$("#login");
    $link.click(function(){
        $("img").fadeIn(3000,function(){});
        $bg.css("display","block");
        $login.css("display","block");
    })
})


//导航栏遍历
window.onload = function() {
    var sp = document.getElementsByTagName("span");
    var alli = document.querySelector(".bd").getElementsByTagName("li");
    for(var i = 0; i < sp.length; i++) {
        sp[i].index = i;
        sp[i].onclick = function() {
            for(var j = 0; j <sp.length; j++) {
                sp[j].className = "";
                alli[j].className ="";
            }
            this.className = "current";
            alli[this.index].className = "show";
        }
    }
}
//懒加载
$(function() {
    var $img=$("img");
    $img.lazyload({
        placeholder : "../images/loading.7277f6d.gif",
        effect: "fadeIn",
        threshold:200,
        event:"mouseover",
        container:$(".lazy"),
    });
})


//让所有图片从上往下显示
$(function(){
    $("body").mouseenter(function(){
        $("img").fadeIn(3000,function(){});
    });
})



//鼠标移上图片会出现遮罩层
$(function(){
    var $tdoneone=$(".td1-1");
    var $maskoneone=$(".mask1-1");
    $tdoneone.mouseenter(function(){
        $maskoneone.css('display','block');
    }).mouseleave(function(){
        $maskoneone.css('display','none');
    })
})
$(function(){
    var $tdonetwo=$(".td1-2");
    var $maskonetwo=$(".mask1-2");
    $tdonetwo.mouseenter(function(){
        $maskonetwo.css('display','block');
    }).mouseleave(function(){
        $maskonetwo.css('display','none');
    })
})
$(function(){
    var $tdonethree=$(".td1-3");
    var $maskonethree=$(".mask1-3");
    $tdonethree.mouseenter(function(){
        $maskonethree.css('display','block');
    }).mouseleave(function(){
        $maskonethree.css('display','none');
    })
})
$(function(){
    var $tdonefour=$(".td1-4");
    var $maskonefour=$(".mask1-4");
    $tdonefour.mouseenter(function(){
        $maskonefour.css('display','block');
    }).mouseleave(function(){
        $maskonefour.css('display','none');
    })
})

$(function(){
    var $tdtwoone=$(".td2-1");
    var $masktwoone=$(".mask2-1");
    $tdtwoone.mouseenter(function(){
        $masktwoone.css('display','block');
    }).mouseleave(function(){
        $masktwoone.css('display','none');
    })
})
$(function(){
    var $tdtwotwo=$(".td2-2");
    var $masktwotwo=$(".mask2-2");
    $tdtwotwo.mouseenter(function(){
        $masktwotwo.css('display','block');
    }).mouseleave(function(){
        $masktwotwo.css('display','none');
    })
})
$(function(){
    var $tdtwothree=$(".td2-3");
    var $masktwothree=$(".mask2-3");
    $tdtwothree.mouseenter(function(){
        $masktwothree.css('display','block');
    }).mouseleave(function(){
        $masktwothree.css('display','none');
    })
})
$(function(){
    var $tdtwofour=$(".td2-4");
    var $masktwofour=$(".mask2-4");
    $tdtwofour.mouseenter(function(){
        $masktwofour.css('display','block');
    }).mouseleave(function(){
        $masktwofour.css('display','none');
    })
})
