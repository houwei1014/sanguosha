/**
 * Created by Administrator on 2017/2/24.
 */
/*小于10的函数*/
function addZero(num){
    if(typeof num!="number"){
        num="addZero参数类型错误";
    }else{
        num=num<10?"0"+num:num;
    }
    return num;
}

function MyId(id){
    var element=document.getElementById(id);
    if(element){
        return element
    }else{
        return "元素为空"
    }
}

function getWindowSize(){
    return{
        "width":document.documentElement.clientWidth||window.innerWidth,
        "height":document.documentElement.clientHeight||window.innerHeight
    }
}

function getScrollSize(){
    return{
        "top":document.documentElement.scrollTop||document.body.scrollTop,
        "left":document.documentElement.scrollLeft||document.body.scrollLeft
    }
}

function getElementcenter(element){
    if(element){
        return element.style.left=((getWindowSize().width-element.offsetWidth)/2+getScrollSize().left)+"px",
               element.style.top=((getWindowSize().height-element.offsetHeight)/2+getScrollSize().top)+"px";
   }else{
        return "元素不存在"
    }
}

//事件对象的兼容性处理
function handleEvent(_evt){
    //return _evt=_evt||window.event;

    //window.event：为真，ie下
   if(window.event){
       return window.event
   }else{
       return _evt
   }

}

/*跨浏览器的阻止默认动作*/
function Msg(a){
    if(window.event){
        //ie下的阻止默认动作
        window.event.returnValue=false;
    }else{
        //其它浏览器下的阻止默认动作
        a.preventDefault();
    }
}

/*跨浏览器阻止事件冒泡*/
function Stop(_evt){
    if(window.event){
        window.event.cancelBubble=true;
    }else{
        _evt.stopPropagation();
    }
}

/*获取鼠标选择的文本*/
function getSelectionTxt(){
    var txt=null;
    if(window.Selection){
        txt=window.getSelection();
    }else if(document.selection){
        txt=document.selection.createRange().text;
    }else if(document.getSelection()){
        txt=document.getSelection();
    }
    return txt;
}


function fade(element,flag){
    if(flag=="in"){
        var num=0;
        var timer=setInterval(function(){
            num+=0.001;
            //标准浏览器
            if(typeof element.style.opacity=='string'){
                element.style.opacity=num;
            }else{
                element.style.filter="alpha(opacity="+num*100+")";
            }
            if(num>=1){
                clearInterval(timer);
            }
            //console.log(num);
        },10);
    }else if(flag=="out"){
        var num=1;
        var timer=setInterval(function(){
            num-=0.001;
            //标准浏览器
            if(typeof element.style.opacity=='string'){
                element.style.opacity=num;
            }else{
                element.style.filter="alpha(opacity="+num*100+")";
            }
            if(num<=0){
                clearInterval(timer);
            }
            //console.log(num);
        },10);
    }
}

function redirect(_msg,flag){
    var redirect=document.querySelector(".redirect");
    var countdown=document.querySelector("#countdown");
    var msg=document.querySelector("#msg");
    //类名称为percent的div
    var percent=document.querySelector(".percent");
    //获取进度条div
    var progress_bar=document.querySelector(".progress_bar");
    //把用户的信息显示在header上
    if(flag==1){
        msg.innerHTML=_msg;
        msg.style.color="green";
    }else if(flag==0){
        msg.innerHTML=_msg;
        msg.style.color="red";
    }
    var duration=t;
    var p=0;
    var timer=setInterval(function(){
        duration--;
        if(duration==0){
            clearInterval(timer);
            redirect.style.display="none";
            if(flag==1){
                //跳转
                location.href="http://www.baidu.com"
            }
        }
        //countdown.innerHTML=num;
        p++;
        percent.innerHTML=parseInt((1/duration)*p*100)+"%";
        progress_bar.style.width=parseInt(1/(duration)*P*100)+"%";
        //console.log(num);
    },100)
}

/*创建ajax对象*/
function  createXMLHttpRequest(){
    var xmlHttp;
    if(window.ActiveXObject){
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }else {
        xmlHttp=new XMLHttpRequest();
    }
    return xmlHttp;
}
/*使元素居中*/
function center(username){
    username.style.left=((getWindowSize().width-username.offsetWidth)/2+getScrollSize().left)+"px";
    username.style.top=((getWindowSize().height-username.offsetHeight)/2+getScrollSize().top)+"px";
}
/**
 * 修剪数据左面和右面的空格
 * @param content
 * @returns {string|XML|void|*}
 */

function trim(content){
    //空格 内容  空格
    var pattern=/^\s*(.+?)\s*$/g;
    content=content.replace(pattern,"$1");
    return content;
}
/**
 * 邮箱验证
 * @param content
 * @returns {boolean}
 */
function email_validate(content) {
    var pattern=/^[a-z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][a-z0-9]+)?\.[a-z]{2,5}(\.[a-z]{2,5})?$/i;
    if(content){
        if(!pattern.test(content)){
            return false;
        }
    }
    return true;
}
/*
 * 验证密码
 * 4:密码为空 3：低2：中 1：较高 0：高
 * */
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
    if(!/[\W]/.test(content)){
        num+=1;
    }
    return num;
}
/**
 * localStorage
 * 设置key,value
 * @param key
 * @param value
 */
function set(key,value){
    //时间戳
    var curTime=new Date().getTime();
    try{
        //JSON.stringify：把对象转换为字符串；
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}))
    }catch(e){
        localStorage.clear();
    }
}
/**
 * localStorage
 * 获取key的值
 * @param key
 * @param expires:存储的时间，毫秒
 */
function get(key,expires){
    //获取可以的值，类型是字符串
    var data=localStorage.getItem(key);
    //如果获取到了存储的值
    if(data){
        //把字符串转换为对象
        var dataObj=JSON.parse(data);
        if(dataObj.time){
            //console.log(dataObj);
            //当前的时间戳减去以前存储的时间戳，
            //如果过期了就清除这个key，没过期就读取出来
            if(new Date().getTime()-dataObj.time>expires){
                localStorage.removeItem(key);
                console.log("过期了");
            }else{
                return JSON.stringify(dataObj.data)
            }
        }
    }
}
/*设置cookie
 * @param name:cookie名
 * @param value：cookie值
 * @param expires:终止日期
 * @param path
 * @param domain
 * @param secure*/
function setCookie(name,value,expires,path,domain,secure){
    var cookieText=name+"="+encodeURI(value);
    if(expires instanceof Date){
        cookieText+=";expires="+expires;
    }
    //如果路径参数为真
    if(path){
        cookieText+=";path="+path;
    }
    //如果主机名参数为真
    if(domain){
        cookieText+=";domain="+domain;
    }
    //如果安全参数为真
    if(secure){
        cookieText+=";secure";
    }
    document.cookie=cookieText;
}
/*获取cookie
 * @param name
 * @param returns*/
function getCookie(name){
    name+="=";
    var str=document.cookie;
    var strStart=str.indexOf(name);
    var strEnd=str.indexOf(";",strStart);
    if(strEnd==-1){
        strEnd=str.length;
    }
    return decodeURI(str.substring(strStart+name.length,strEnd));
}
/*移除cookie*/
function removeCookie(name){
    document.cookie=name+"=;expires="+new Date(0);
}