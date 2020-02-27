$(function(){
  //トップのフェードイン
    $('.top-left').fadeIn(3000);
    
    setTimeout(function(){
      $('.top-center').fadeIn(3000);
    },1500);
  
    setTimeout(function(){
      $('.top-right').fadeIn(3000);
    },3000);
  
    //メインのトランジション
    $('.effect div, .effect img').css("opacity","0");
    $(window).scroll(function (){
      $(".effect").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $("img, div",this).css("opacity","1" );
          $("img",this).css({ 
            "font-size": "100px",
            "padding": "0 20px 40px"
          });
        } else {
          $("img, div",this).css("opacity","0" );
          $("img",this).css({ 
            "font-size": "20px",
            "padding": "20px"
          });
        }
      });
    });

    //トップボタン
    $(".top-btn").click(function(){
      $("html,body").animate({
        "scrollTop":0
      },"slow");
    });

    //ナビゲーション
    $(".nav a").click(function(){
      var id = $(this).attr("href");
      var position = $(id).offset().top;
      $("html,body").animate({
        "scrollTop":position
      },"slow");
      return false;
    });

  });

     

      


