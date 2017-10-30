/**
 * Created by HW on 2017/4/6.
 */
////////////////////////////////手机注册/////////////////////////////////////////////
var button=document.querySelector(".center_two>p");
var checkbox=document.querySelector(".center_two input");
var tel=document.querySelector(".first_one input");
var p1=document.querySelector(".first_one p");
var yzm=document.querySelector(".first_two input");
var p2=document.querySelector(".first_two p");
var dx=document.querySelector(".first_three input");
var p3=document.querySelector(".first_three>p");
var btn=document.querySelector(".first_three ul li p");
var pwd=document.querySelector(".first_four input");
var p4=document.querySelector(".first_four p");
var pattern=/^1[0-9]{10}$/;
var pattern2=/^5z3sHd$/i;
var pattern3=/^[0-9]{6}$/;
var pattern4=/^[A-Za-z0-9]{6,30}$/;
//手机注册手机号码验证
tel.addEventListener("focus",function(){
    p1.className="one";
    p1.innerHTML="请输入11位数字的中国大陆手机号码";
});
tel.addEventListener("blur",function(){
    if(!pattern.test(this.value)){
        if($.trim(this.value).length==0){
            p1.className="three";
            p1.innerHTML="注册手机号码未填写";
            return false;
        }
        p1.className="two";
        p1.innerHTML="注册手机号码填写不正确";
        return false;
    }
    p1.className="";
    p1.innerHTML="";
    return true;
});
/*手机注册图片验证码验证*/
yzm.addEventListener("focus",function(){
    p2.className="one";
    p2.innerHTML="图片内字符，不分大小写";
});
yzm.addEventListener("blur",function(){
    if(!pattern2.test(this.value)){
        if($.trim(this.value).length==0){
            p2.className="three";
            p2.innerHTML="验证码不能为空";
            return false;
        }
        p2.className="two";
        p2.innerHTML="验证码错误";
        return false;
    }
    p2.className="";
    p2.innerHTML="";
});
/*手机注册短信验证码验证*/
btn.addEventListener("click",function(){
    btn.innerHTML="60s后重新获取...";
});
dx.addEventListener("focus",function(){
    p3.className="one";
    p3.innerHTML="请填写短信中的6位数字，收不到请重试";
});
dx.addEventListener("blur",function(){
    if(!pattern3.test(this.value)){
        if($.trim(this.value).length==0){
            p3.className="three";
            p3.innerHTML="验证码未填写";
            return false;
        }
        p3.className="two";
        p3.innerHTML="验证码错误";
        return false;
    }
    p3.className="";
    p3.innerHTML="";
});
/*手机注册静态密码验证*/
pwd.addEventListener("focus",function(){
    p4.className="one";
    p4.innerHTML="6~30位字母和数字，字母区分大小写";
});
pwd.addEventListener("blur",function(){
    if(!pattern4.test(this.value)){
        if($.trim(this.value).length==0){
            p4.className="three";
            p4.innerHTML="密码未填写";
            return false;
        }
        if($.trim(this.value).length<6){
            p4.className="two";
            p4.innerHTML="密码过短，至少6位字母和数字";
            return false;
        }
        if($.trim(this.value).length>30){
            p4.className="two";
            p4.innerHTML="密码过长，最多30位字母或数字";
            return false;
        }
    }
    switch(pwd_validate(this.value)){
        case 2:
            p4.innerHTML="密码强度弱";
            p4.className="four";
            break;
        case 1:
            p4.innerHTML="密码强度中";
            p4.className="four";
            break;
        case 0:
            p4.innerHTML="密码强度强";
            p4.className="four";
            break;
    }
    return true;
    p4.className="";
    p4.innerHTML="";
});
/*点击接受协议并注册按钮之后*/
button.addEventListener("click",function(){
    if($.trim(tel.value).length==0){
        p1.className="three";
        p1.innerHTML="注册手机号码未填写";
        return false;
    }
    if($.trim(yzm.value).length==0){
        p2.className="three";
        p2.innerHTML="验证码不能为空";
        return false;
    }
    if($.trim(dx.value).length==0){
        p3.className="three";
        p3.innerHTML="验证码未填写";
        return false;
    }
    if($.trim(pwd.value).length==0){
        p4.className="three";
        p4.innerHTML="密码未填写";
        return false;
    }
    if(checkbox.checked){
        return true;
    }else{
        return false;
    }
});
/*封装密码验证函数*/
function pwd_validate(content){
    var num=0;
    if(!/[\d]/.test(content)){
        num+=1;
    }
    if(!/[a-z]/.test(content)){
        num+=1;
    }
    if(!/[A-Z]/.test(content)){
        num+=1;
    }
    return num;
}
////////////////////////////////////邮箱注册////////////////////////////////////////
var yx=document.querySelector(".second_one input");
var p5=document.querySelector(".second_one p");
var pwd2=document.querySelector(".second_two input");
var p6=document.querySelector(".second_two p");
var pattern5=/^([A-Za-z0-9]+)@([A-Za-z0-9]+)\.(com|net|cn|org)$/i;
var yzm2=document.querySelector(".second_three input");
var p7=document.querySelector(".second_three p");
var pattern6=/^bd5xh6$/i;
/*邮箱注册邮箱验证*/
yx.addEventListener("focus",function(){
    p5.className="one";
    p5.innerHTML="目前只支持.com .net .cn .org后缀的邮箱"
});
yx.addEventListener("blur",function(){
    if(!pattern5.test(this.value)){
        if($.trim(this.value).length==0){
            p5.className="three";
            p5.innerHTML="注册邮箱未填写";
            return false;
        }
        p5.className="two";
        p5.innerHTML="邮箱填写错误，请更正";
        return false;
    }
    p5.className="";
    p5.innerHTML="";
    return true;
});
/*邮箱注册密码验证*/
pwd2.addEventListener("focus",function(){
    p6.className="one";
    p6.innerHTML="6~30位字母和数字，字母区分大小写";
});
pwd2.addEventListener("blur",function(){
    if(!pattern4.test(this.value)){
        if($.trim(this.value).length==0){
            p6.className="three";
            p6.innerHTML="密码未填写";
            return false;
        }
        if($.trim(this.value).length<6){
            p6.className="two";
            p6.innerHTML="密码过短，至少6位字母和数字";
            return false;
        }
        if($.trim(this.value).length>30){
            p6.className="two";
            p6.innerHTML="密码过长，最多30位字母或数字";
            return false;
        }
    }
    switch(pwd_validate(this.value)){
        case 2:
            p6.innerHTML="密码强度弱";
            p6.className="four";
            break;
        case 1:
            p6.innerHTML="密码强度中";
            p6.className="four";
            break;
        case 0:
            p6.innerHTML="密码强度强";
            p6.className="four";
            break;
    }
    return true;
    p6.className="";
    p6.innerHTML="";
});
/*邮箱验证验证码验证*/
yzm2.addEventListener("focus",function(){
    p7.className="one";
    p7.innerHTML="图片内字符，不分大小写";
});
yzm2.addEventListener("blur",function(){
    if(!pattern6.test(this.value)){
        if($.trim(this.value).length==0){
            p7.className="three";
            p7.innerHTML="验证码不能为空";
            return false;
        }
        p7.className="two";
        p7.innerHTML="验证码错误";
        return false;
    }
    p7.className="";
    p7.innerHTML="";
});
/*点击接受协议并注册按钮之后*/
button.addEventListener("click",function(){
    if($.trim(yx.value).length==0){
        p5.className="three";
        p5.innerHTML="注册邮箱未填写";
        return false;
    }
    if($.trim(pwd2.value).length==0){
        p6.className="three";
        p6.innerHTML="密码未填写";
        return false;
    }
    if($.trim(yzm2.value).length==0){
        p7.className="three";
        p7.innerHTML="验证码不能为空";
        return false;
    }
    if(checkbox.checked){
        return true;
    }else{
        return false;
    }
});
//////////////////////////////////////////个性验证/////////////////////////////////////
var sc=document.querySelector(".third_one input");
var p8=document.querySelector(".third_one p");
var img=document.createElement("img");
var gx=document.querySelector(".third_two input");
var p9=document.querySelector(".third_two p");
var pwd3=document.querySelector(".third_three input");
var p10=document.querySelector(".third_three p");
var pattern7=/^[A-Za-z][A-Za-z0-9]{3,15}$/;
/*上传图像预览*/
sc.addEventListener("change",function(){
    var fr=new FileReader();
    fr.readAsDataURL(sc.files[0]);
    fr.addEventListener("loadend",function(){
        img.src=this.result;
        img.style.width="150px";
        img.style.height="150px";
        img.style.borderRadius="50%";
    });
    p8.appendChild(img);
});
/*个性注册个性名验证*/
gx.addEventListener("focus",function(){
    p9.className="one";
    p9.innerHTML="4~16位字母或数字，首位为字母";
});
gx.addEventListener("blur",function(){
    if(!pattern7.test(this.value)){
        if($.trim(this.value).length==0){
            p9.className="three";
            p9.innerHTML="个性账号未填写";
            return false;
        }
        if($.trim(this.value).length<4){
            p9.className="two";
            p9.innerHTML="密码过短，至少4位字母和数字";
            return false;
        }
        if($.trim(this.value).length>16){
            p9.className="two";
            p9.innerHTML="密码过长，最多16位字母或数字";
            return false;
        }
        p9.className="two";
        p9.innerHTML="账号已注册!建议您更换或找回密码";
        return false;
    }
    p9.className="";
    p9.innerHTML="";
});
/*个性注册密码验证*/
pwd3.addEventListener("focus",function(){
    p10.className="one";
    p10.innerHTML="6~30位字母和数字，字母区分大小写";
});
pwd3.addEventListener("blur",function(){
    if(!pattern4.test(this.value)){
        if($.trim(this.value).length==0){
            p10.className="three";
            p10.innerHTML="密码未填写";
            return false;
        }
        if($.trim(this.value).length<6){
            p10.className="two";
            p10.innerHTML="密码过短，至少6位字母和数字";
            return false;
        }
        if($.trim(this.value).length>30){
            p10.className="two";
            p10.innerHTML="密码过长，最多30位字母或数字";
            return false;
        }
    }
    switch(pwd_validate(this.value)){
        case 2:
            p10.innerHTML="密码强度弱";
            p10.className="four";
            break;
        case 1:
            p10.innerHTML="密码强度中";
            p10.className="four";
            break;
        case 0:
            p10.innerHTML="密码强度强";
            p10.className="four";
            break;
    }
    return true;
    p10.className="";
    p10.innerHTML="";
});
/*点击接受协议并注册按钮之后*/
button.addEventListener("click",function(){
    if($.trim(gx.value).length==0){
        p9.className="three";
        p9.innerHTML="个性账号未填写";
        return false;
    }
    if($.trim(pwd3.value).length==0){
        p10.className="three";
        p10.innerHTML="密码未填写";
        return false;
    }
    if(checkbox.checked){
        return true;
    }else{
        return false;
    }
});
//////////////////////////////三种注册方式tab页/////////////////////////////////////////////////////
$(".center_one>ul li").each(function(index){
    $(this).click(function(){
        $(".center_one>ul li").removeClass("bs");
        $(this).addClass("bs");
        $(".center_one>div>div").removeClass("cx");
        $(".center_one>div>div").eq(index).addClass("cx");
    })
});
//////////////////////////////蒙板和提示页/////////////////////////////////////////////////////////////////////
//var mb=document.querySelector(".mb");
var ts=document.querySelector(".ts");
var ds=document.querySelector(".pic_2");
var close=document.querySelector(".ts span");
//点击图片
ds.addEventListener("click",function(){
    //蒙板出现
    $(".mb").css({
        "width":$(document).width(),
        "height":$(document).height()
    });
    //提示页出现
    ts.style.display="block";
    center(ts);
});
//点击X关闭提示页和蒙板
close.addEventListener("click",function(){
    ts.style.display="";
    $(".mb").css({
        "width":"",
        "height":""
    });
});