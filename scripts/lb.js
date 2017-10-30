/**
 * Created by Administrator on 2017/3/22.
 */
var index=0;
var timer;

//轮播图自动播放
showTime();

//触摸
$(".lb>span>div").hover(function(){
    index=$(this).index();
    clearInterval(timer);
    show();
},function(){
    showTime();
});

//轮播函数
function showTime(){
    timer=setInterval(function(){
        show();
        index++;
        if(index==5){
            index=0;
        }
    },1000);
}

//左右切换
$(".span_1").click(function(){
    clearInterval(timer);
    //console.log(index);
    index--;
    if(index==-1){
        index=4
    }
    show();
    showTime();
});
$(".span_2").click(function(){
    clearInterval(timer);
    index++;
    if(index==5){
        index=0
    }
    show();
    showTime();
});

//样式变化函数
function show(){
    $(".lb>span>div").attr("class","");
    $(".lb>span>div").eq(index).attr("class","bs");
    $(".lb>ul>li").eq(index).show();
    $(".lb>ul>li").eq(index).siblings().hide();
}
