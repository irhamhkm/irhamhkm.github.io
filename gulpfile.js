var { series, watch, src, dest } = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
function compileSass() {
  return src('src/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('src/'));
};

function reload(cb) {
  browserSync.reload();
  cb();
}

exports.dev = function() {
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  });
  watch('src/*.scss', series(compileSass, reload));
  watch('src/main.js', reload);
  watch('src/index.html', reload);
};

exports.build = function() {
  // do build tasks
  console.log('build task wip');
}

exports.prod = function() {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    }
  });
}
