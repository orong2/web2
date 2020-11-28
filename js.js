$(".menu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});

$(".menu>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});



start();
var now=0;
var imgs=2;

function start(){
    $("#slide>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval(function(){slide();},2000);
};

function slide(){
    if(now==imgs){
        now=0;
    }
    else{
        now=now+1;
    }
    $("#slide>img").eq(now-1).css({"margin-left":"-2000px"});
    $("#slide>img").eq(now).css({"margin-left":"0"});
};



function pop_win(){
    $(".pop").show();
}


$(".btn").click(function(){
    $(".pop").hide();
});