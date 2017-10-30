/**
 * Created by HW on 2017/4/10.
 */
/*弹窗广告*/
var time=document.querySelector(".popup>div>p:nth-child(1)");
//动态时间
setInterval(function(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
   time.innerHTML=h+":"+m+":"+s;
},1000);
//弹窗广告10s后自动出现
setInterval(function(){
    $(".popup").animate({"bottom":"0"},2000,function(){
        //30s后自动消失
        setTimeout(function(){
            $(".popup").fadeOut("slow");
        },30000)
    });
},10000);
//点击关闭后消失
$(".popup>span").click(function(){
   $(".popup").animate({"bottom":"-300px"},2000);
});

