$(document).ready(function () {
$( ".main_mv div.navi a img" ).each(function() {
$(this).hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "_on.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("_on.png", ".png");
    });
});
});

});


$(document).ready(function () {
  menufixed();
  $(window).scroll(function() {
    menufixed();
  });
  function menufixed(){
    var loc = $(this).scrollTop();
    var menuoffset = $(".main_mv div.navi").offset().top;
    $(".main_mv div.navi ul.stay").addClass("off");
    $(".main_mv div.navi ul.stay").removeClass("on");
    $(".main_mv div.navi ul.scroll").addClass("on");
    $(".main_mv div.navi ul.scroll").removeClass("off");
    if(loc >= menuoffset){
      $(".main_mv div.navi ul").css({
          "position":"fixed",
          "top":"0",
          "left":"0",
          "right":"0",
          "margin":"auto",
          "z-index":"999"
        });
    }
    else {
      $(".main_mv div.navi ul").removeAttr("style");
    $(".main_mv div.navi ul.stay").addClass("on");
    $(".main_mv div.navi ul.stay").removeClass("off");
    $(".main_mv div.navi ul.scroll").addClass("off");
    $(".main_mv div.navi ul.scroll").removeClass("on");
    }
  }
});