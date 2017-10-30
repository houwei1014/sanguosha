/**
 * Created by HW on 2017/3/28.
 */
/*回到顶部*/
var backTop=document.querySelector(".backTop");
backTop.addEventListener("click",function(){
    window.scrollTo(0,0);
});
/*导航栏悬浮*/
window.addEventListener("scroll",function(){
    var scrollTop=getScrollSize().top;
    var nav=document.querySelector(".nav");
    var xf=document.querySelector(".xf");
    if(scrollTop>=140){
        nav.style.display="none";
        xf.style.display="block";
        backTop.style.display="block";
    }else{
        nav.style.display="block";
        xf.style.display="none";
        backTop.style.display="none";
    }
});
