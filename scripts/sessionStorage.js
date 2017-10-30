/**
 * Created by HW on 2017/4/12.
 */
/*离线储存*/
var dl=document.querySelector(".login_left li:nth-child(2)");
var ul=document.querySelector(".login_body2");
var div=document.querySelector(".login_body");
var dl2=document.querySelector(".login_body button");
var zh=document.querySelector(".login_zh input");
var pwd=document.querySelector(".login_pwd input");
var zt=document.querySelector(".login_left");
var zt2=document.querySelector(".login_left2");
var zt2_k=document.querySelector(".login_left2 li:nth-child(1)");
var zx=document.querySelector(".login_left2 li:nth-child(2)");
var close=document.querySelector(".login_body>span");
//点击登录按钮出现登录框
dl.addEventListener("click",function(){
        ul.style.display="none";
        div.style.display="block";
});
//点击登录框中的登录按钮
dl2.addEventListener("click",function(){
    if($.trim(zh.value).length==0){
        return false;
    }
    if((pwd.value).length==0){
        return false;
    }
    sessionStorage.setItem("username",zh.value);
    sessionStorage.setItem("password",pwd.value);
    //点击事件发生后样式回归正常，离线存储需要刷新一次在显示，所以先赋值zh.value
    div.style.display="";
    ul.style.display="";
    zt.style.display="none";
    zt2.style.display="block";
    zt2_k.innerHTML=zh.value;
});
//刷新页面后点击事件不发生，样式是默认样式，把获得的值赋进去，所以可以一直刷新不会消失
if(sessionStorage.getItem("username")){
    zt.style.display="none";
    zt2.style.display="block";
    zt2_k.innerHTML=sessionStorage.getItem("username");
}else{
    zt.style.display="";
    zt2.style.display="";
}
//点击注销按钮恢复初始状态
zx.addEventListener("click",function(){
    sessionStorage.removeItem("username");
    zt2_k.innerHTML="";
    zt2.style.display="";
    zt.style.display="";
});
//点击X关闭登录框
close.addEventListener("click",function(){
    div.style.display="";
    ul.style.display="";
});



