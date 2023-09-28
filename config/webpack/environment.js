const { environment } = require('@rails/webpacker')

//jQueryを使用する
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    //Railsでスライドショーを動かしてみる
    Swiper: 'swiper/swiper-bundle' //この行を追記
  })
)

module.exports = environment
