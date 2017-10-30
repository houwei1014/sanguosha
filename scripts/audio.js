/**
 * Created by HW on 2017/4/10.
 */
/*音乐播放器*/
var playerBtn=document.querySelector(".audio .playerBtn");
var player=document.querySelector(".audio .player");
var timeTip=document.querySelector(".timeTip");
var dragBtn=document.querySelector(".dragBtn");
var muted=document.querySelector(".muted");
var volBtn=document.querySelector(".volBtn");
var b=true;
//播放和停止按钮
playerBtn.addEventListener("click",function(){
    //为进度条设置最大值，最大值等于音频的长度
    dragBtn.setAttribute("max",parseInt(player.duration));
    if(b){
        player.play();
        b=false;
        this.className="stopBtn";
    }else{
        player.pause();
        b=true;
        this.className="playerBtn"
    }
});
//时间提示
player.currentTime=0;
player.addEventListener("timeupdate",function(){
    timeTip.innerHTML=parseInt(this.currentTime)+"/"+parseInt(this.duration);
    dragBtn.value=parseInt(this.currentTime);
});
//进度条拖动
//静音切换
muted.addEventListener("click",function(){
    if(player.muted==true){
        player.muted=false;
        muted.className="muted";
    }else{
        player.muted=true;
        muted.className="muted2";
    }
    //静音状态音量条为0
    if(player.muted){
        volBtn.value=0;
    }
});
//音量拖动
player.volume=0.6;
volBtn.value=60;
volBtn.addEventListener("mousemove",function(){
    player.volume=this.value/100;
    if(player.volume){
        muted.className="muted";
    }else{
        muted.className="muted2";
    }
});
//音乐下载


