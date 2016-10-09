/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'dist',
  compile_dir: 'bin',
  src_dir: 'src',
  vendor_files: {
    js: [
      /* add any vendor js */
      '/vendor/bootstrap/js/bootstrap.min.js'
    ],
    css: [
      /* add any vendor css */
      '/vendor/bootstrap/css/bootstrap.min.css'
    ],
    assets: [
    /* images or fonts go here */
    ]
  },
  
  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/js/*.js'],
    map: ['src/**/*.js.map'],
    html: [ 'src/index.html' ],
    sass: 'src/style/main.sass', 
  },
  build_files: {
    js: [ 'dist/js/*.js' ],
  }
};