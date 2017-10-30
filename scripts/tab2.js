/**
 * Created by HW on 2017/3/25.
 */
/*tab页2*/
$(".zl_two>ul li").each(function(index){
    $(this).mouseover(function(){
       $(".zl_two>ul li").removeClass("bs2");
       $(this).addClass("bs2");
        $(".zl_two>div>ul").removeClass("cx2");
       $(".zl_two>div>ul").eq(index).addClass("cx2");
    });
});