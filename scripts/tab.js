/**
 * Created by Administrator on 2017/3/23.
 */
/*tab页*/
$(".tab .tab_ul1 li").each(function(index){
    $(this).mouseover(function(){
        $(".tab .tab_ul1 li").removeClass("zx");
        $(this).addClass("zx");
        $(".tab div ul").removeClass("xs");
        $(".tab div ul").eq(index).addClass("xs");
    })
});