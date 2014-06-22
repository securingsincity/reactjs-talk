##Using React

* Running within a more complex stack
 * Gulp/Grunt for tasks
 * Browserify with Reactify

Gulpfile.js
```
  gulp.task('scripts', function () {
    return  browserify({
      entries: ['./app/js/main.jsx']
    })
    .bundle({debug:true})
    .pipe(source('app.js'))
    .pipe(gulp.dest('app/js'))
});

```
Package.json
```
  "browserify": {
    "transform": [
      "reactify"
    ]
  },
```
