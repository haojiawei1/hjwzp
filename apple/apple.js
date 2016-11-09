/**
 * Created by 郝 on 2016/11/8.
 */
$(function(){
//   $(".banner-img div").css({"z-index":0}).eq(0).css({"z-index":1});
//   var num=0;
//   var now=0;
//   var t=setInterval(move,3000)
//   var flag=false;
//   function move(type){
//  if(flag){
//     return
//  }
//
//      flag=true;
//       type=type||"now"
//      if(type=="now"){
//         num++;
//         if(num>=3){
//            num=0
//         }
//      $(".banner-img div").eq(num).css({left:0,"z-index":1});
//      $(".banner-img div").eq(now).css({"z-index":2}).animate({left:1349},1000,function(){
//         $(".banner-img div").eq(num).css({"z-index":2})
//         $(".banner-img div").eq(now).css({"z-index":1})
//         flag=false
//      })
//   }else if(type=="pre"){
//         num--;
//         if(num<0){
//            num=2
//         }
//         $(".banner-img div").eq(num).css({left:0,"z-index":1});
//         $(".banner-img div").eq(now).css({"z-index":2}).animate({left:-1349},1000,function(){
//            $(".banner-img div").eq(num).css({"z-index":2})
//            $(".banner-img div").eq(now).css({"z-index":1})
//            flag=false
//      })
//      }
//      $(".btn .btn1").removeClass("active").eq(num).addClass("active")
//      now=num;
//
//}
//   $(".btn .btn1").click(function(){
//      num=$(this).index();
//      if(num>now){
//         num=$(this).index()-1
//          $(".btn .btn1").removeClass("active").eq(num).addClass("active")
//         move("now")
//      }else if(num<now){
//         num=$(this).index()+1
//          $(".btn .btn1").removeClass("active").eq(num).addClass("active")
//         move("pre")
//      }
//   })
//    $(".banner").hover(function(){
//        clearInterval(t)
//    },function(){
//        t=setInterval(move,2000)
//    })


//    foot动画



        $(".footbot div").click(function(){
            var width=$(window).width();
            if(width>735){
            }else{
                $(this).find($("ul")).slideToggle()
            }
        })

    //nav动画
      $(".nav .ss").click(function(){
          var width1=$(window).width();
          if(width1>735){

          }else{
              $(this).find($(".sm")).slideToggle()
          }
      })



//    正常轮播
    $(".banner-img div").css("left","100%").eq(0).css("left","0")
    var now=0;
    var next=0;
    var currentTime=0;
    var flag=true;
    var t=setInterval(move,3000);
    function move(){


            next++;
            if(next==3){
                next=0;
                flag=false;
            }

        $(".banner-img div").eq(now).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".banner-img div").eq(next).animate({left:"0"},function(){
            $(".banner-img div").eq(now).css({left:"100%",width:"100%",height:"100%"})
            currentTime=0;
            flag=true;
            now=next;
        }).css("zIndex",1)
    }
//btn进度条
var t2=setInterval(move2,44);

      function move2 (){
        currentTime+=50;
        var bili=currentTime/3000;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(now).css({width:bili*100+"%"});
        if(flag==false){
            $(".progress").css({width:0});
        }
      }
    function stop(){
        //点击btn时间停止
        clearInterval(t)
        clearInterval(t2)
    //    按钮变化
        $(".btn .btn1").find(".progress").css("width",0);
        $(".btn .btn1").eq(next).find(".progress").css("width","100%");
    //    轮播图变化
        if(next>now){
            $(".banner-img div").eq(now).animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".banner-img div").eq(next).animate({left:"0"},function(){
                $(".banner-img div").eq(now).css({left:"100%",width:"100%",height:"100%"})
                now=next;
            }).css("zIndex",1)
        }else if(next<now){
            $(".banner-img div").eq(now).animate({left:"100%"}).css("zIndex",1);
            $(".banner-img div").eq(next).css({width:"80%",height:"80%",left:"0"}).animate               ({width:"100%",height:"100%"},function(){
                now=next;
            })
        }
    }
    //页面打开是定时，页面关闭时清除
    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,44)
    });
    $(window).blur(function(){
        clearInterval(t);
        clearInterval(t2);
    })
    //btn 点击效果
    $(".btn .btn1").click(function(){
        next=$(this).index();
        stop();
    })

})