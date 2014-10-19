##Using React

* Running within a more complex stack
 * Gulp/Grunt for tasks
 * Browserify with Reactify, webpack or RequireJS

Gulpfile.js
```javascript
gulp.task('scripts', function() {
  var output = browserify({
    entries: ['./app/js/main.jsx']
  })
  .bundle({debug:true})
  .pipe(source('app.js'))
  .pipe(gulp.dest('app/js'));

  return output;
});

```
Package.json
```json
  "browserify": {
    "transform": [
      "reactify"
    ]
  },
```
