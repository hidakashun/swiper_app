//アラートを表示してみる
let title = "javascriptが使えました";
alert(title);

//jQueryを使用する_文字の色を変えてみる
$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

//Railsでスライドショーを動かしてみる_スタイルシートを編集する
// Swiperのオプションを定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
    let swiper = new Swiper('.swiper',opt);
});