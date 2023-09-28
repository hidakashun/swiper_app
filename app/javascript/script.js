//アラートを表示してみる
let title = "javascriptが使えました";
alert(title);

//jQueryを使用する_文字の色を変えてみる
$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});