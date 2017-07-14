// script一定要等网页加载完毕后再执行

$(function(){

  $('.like').click(function(){
    if($(this).text() === "加关注"){
      $(this).text('已关注').css("background","#33a3dc ");
    }else{
      $(this).text('加关注').css("background","#fff");
    }
  });

for (let i = 0, j = $('.tag').length; i < j; i++) {
  $('.tag').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn(2000);
  },function() {
    $('.chuank').eq(i).stop().fadeOut(300);
  });

  $('.chuank').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn();
  }, function() {
    $('.chuank').eq(i).stop().fadeOut();
  });
}


// console.log();

});
