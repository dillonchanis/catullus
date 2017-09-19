let mix = require('laravel-mix');
const path = require('path');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve('resources/assets/sass')
      }
    }
  });
