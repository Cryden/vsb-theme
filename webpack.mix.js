const { mix } = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/main.js', 'js/main.js')
   .sass('resources/sass/style.scss', 'css/style.css')
   .options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
   processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: true, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
  })
   .sass();