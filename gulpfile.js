var obj = {
removeComments: true, //清除 HTML 注释
collapseWhitespace: true, //压缩 HTML
collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==><input checked/>
removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
removeScriptTypeAttributes: true, //删除<script>的 type="text/javascript"
removeStyleLinkTypeAttributes: true, //删除<style>和<link>的 type="text/css"
minifyJS: true, //压缩页面 JS
minifyCSS: true //压缩页面 CSS
}


var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
gulp.task('htmlTask', function(){
gulp.src('dafeiji/*.html')
.pipe(htmlmin(obj))
.pipe(gulp.dest('dest'));
});
var cssmin = require("gulp-minify-css");
gulp.task('cssminTask', function(){
gulp.src('dafeiji/css/*.css')
.pipe(cssmin())
.pipe(gulp.dest('dest/css'));
});
var babel = require("gulp-babel");
var jsmin = require("gulp-uglify");
gulp.task('jsminTask', function(){
gulp.src('dafeiji/js/*.js')
.pipe(babel({presets: ['es2015'] })) 
.pipe(jsmin())

.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['htmlTask','cssminTask','jsminTask']);