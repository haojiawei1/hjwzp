/**
 * Created by 郝 on 2016/11/7.
 */
$(function(){
    var timer=null;
    var num=0;
    $(".enter").click(function(){
      $(".wel").animate({height:"0px"},"fast")
        $(".btn").css("display","block")
        $('.content .one').removeClass('out')
        $(document).mousewheel(function(e,d){
            clearTimeout(timer);
            timer=setTimeout(function(){
                num-=d;
                if(num>3){num=3}
                if(num<0){num=0}
                $(".btn li").eq(num).addClass   ('btn-active').siblings().removeClass('btn-active');
                $(".nav li").eq(num).addClass('active').siblings().removeClass('active')
                //$('.gps li').eq(num).addClass('current').siblings().removeClass();
                //$('.gps li').eq(num).addClass('show').siblings().removeClass();
                $('.content').stop().animate({top:-100*num+'%'},1000)
                $(".content>div").eq(num).removeClass('out').siblings().addClass('out')

            },300)
        })
    })


    $(".welcome img").animate({height:"100%",width:"100%"},2000)
    $(".picture").animate({marginTop:"-170px"},2000);
    $(".zuoyoum").hide().delay(1200).fadeIn().animate({top:"80px"},2000)
    $(".title2").addClass('chang');
    $(".title3").delay(3000).animate({marginTop:"110px"},800)
    $(".title4").delay(3500).animate({marginTop:"150px"},800)
    $(".title5").delay(4000).animate({marginTop:"190px"},800)


    $(".nav li").click(function(){
        var index=$(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $(".content").animate({top:-index*100+'%'})
        num=index;
        $(".btn li").eq(num).addClass('btn-active').siblings().removeClass('btn-active');
        $(".content>div").eq(num).removeClass('out').siblings().addClass('out')
    })
    $(".btn li").click(function(){
        var index=$(this).index();

        $(this).addClass('btn-active').siblings().removeClass('btn-active');
        $(".content").animate({top:-index*100+'%'})
        num=index;
        $(".nav li").eq(num).addClass('active').siblings().removeClass('active')
        $(".content>div").eq(num).removeClass('out').siblings().addClass('out')
    })


    $(".kuan").hover(function(){
        $(".four span:nth-child(1)").css({opacity:"0",top:"30px"})
        $(".four p").css({opacity:"0",top:"180px"});
        $(".four .conn").css({opacity:"1",top:"40px"})
    },function(){
        $(".four span:nth-child(1)").css({opacity:"1",top:"50px"})
        $(".four p").css({opacity:"1",top:"200px"});
        $(".four .conn").css({opacity:"0",top:"300px"})
    })

     $(".picture img").mouseover(function(){
         $(this).eq(0).animate({opacity:"0"},600)
     })
    $(".picture img").mouseout(function(){
        $(this).eq(0).animate({opacity:"1"},600)
    })


})