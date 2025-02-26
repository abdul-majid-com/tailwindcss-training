// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/alpine.js', 'src/js').setPublicPath('src/js');