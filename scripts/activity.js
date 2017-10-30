/**
 * Created by HW on 2017/4/26.
 */
$(".bottom li").each(function(index){
    $(this).click(function(){
        $(".bottom li").removeClass("color");
        $(this).addClass("color");
        if(index>0){
            $(".previous").css({"display":"block"});
        }
        $(".bottom_s li:nth-child(3) input").val(index+1);
        $(".center>ul").removeClass("display");
        $(".center>ul").eq(index).addClass("display");
    });
});