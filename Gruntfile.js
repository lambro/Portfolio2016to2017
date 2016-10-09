module.exports = function ( grunt ) {
  
  /** 
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  /**
   * Load in our build configuration file.
   */
  var userConfig = require( './build.config.js' );

  /**
   * This is the configuration object Grunt uses to give each plugin its 
   * instructions.
   */
  var taskConfig = {
    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON("package.json"),

    /**
     * The banner is the comment that is placed at the top of our compiled 
     * source files. It is first processed as a Grunt template, where the `<%=`
     * pairs are evaluated based on this very configuration object.
     */
    meta: {
      banner: 
        '/**\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' */\n'
    },

    /**
     * Increments the version number, etc.
     */
    bump: {
      options: {
        files: [
          "package.json", 
          "bower.json"
        ],
        commit: false,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
          "package.json", 
          "client/bower.json"
        ],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'origin'
      }
    },    

    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: [ 
      '<%= build_dir %>', 
      '<%= compile_dir %>'
    ],

    /**
     * `grunt concat` concatenates multiple source files into a single file.
     */
    concat: {
      /**
       * The `build_css` target concatenates compiled CSS and vendor CSS
       * together.
       */
      options: {
        seperator: ';',
        stripBanners: true,
        banner: 
        '/**\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' */\n'
      },
      css: {
        src: ['./vendor/bootstrap.css' , 'style/style.css' ],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      main_js: {
        src: ['./vendor/jquery-3.1.1.min.js', './vendor/bootstrap.min.js'],
        dest: 'dist/js/vendor_<%= pkg.name %>.js'
      },
      },

    connect: {
      server: {
        options: {
          livereload: true,
          base: './',
          port: 3000,
          hostname: 'localhost',
          open: true
        },
        livereload: {
          options: {
            open: {
              target: 'http://localhost:3000'
            },
            base: [
            './'
            ]
          }
        }
      }
    },

    /**
     * Minify the sources!
     */
    uglify: {
      compile: {
        options: {
          sourceMap: true,
          sourceMapIncludeSources: true,
          sourceMapIn: '<%= src_dir %>/js/<%= pkg.js %>.js.map' // input sourcemap from a previous compilation
        },
        files: {
          '<%= src_dir %>/js/<%= pkg.js %>.min.js': ['<%= build_dir %>/js/<%= pkg.js %>.js']
        }
      }
    },

    /**
     * `grunt-contrib-less` handles our LESS compilation and uglification automatically.
     * Only our `main.less` file is included in compilation; all other files
     * must be imported from this file.
     */

    less: {
        development: {
            options: {
                paths: ["./style"]
            },
            files: {"./style/style.css": "./style/style.less"}
        },
        production: {
            options: {
                paths: ["./style"],
                cleancss: true
            },
            files: {"./style/style.css": "./style/style.less"}
        }
    },

    /**
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `options`. But we can also
     * specify exclusionary patterns by prefixing them with an exclamation
     * point (!); this is useful when code comes from a third party but is
     * nonetheless inside `src/`.
     */

    jshint: {
      files: {
        src: 'js/script.js'
      },
      // test: [
      //   '<%= app_files.jsunit %>'
      // ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true,
        reporterOutput: ""
      },
      globals: {}
    },

    /**
     * And for rapid development, we have a watch set up that checks to see if
     * any of the files listed below change, and then to execute the listed 
     * tasks when they do. This just saves us from having to type "grunt" into
     * the command-line every time we want to see what we're working on; we can
     * instead just leave "grunt watch" running in a background terminal. Set it
     * and forget it, as Ron Popeil used to tell us.
     *
     * But we don't need the same thing to happen for all the files. 
     */
     
    delta: {
      /**
       * By default, we want the Live Reload to work for all tasks; this is
       * overridden in some tasks (like this file) where browser resources are
       * unaffected. It runs by default on port 35729, which your browser
       * plugin should auto-detect.
       */
      options: {
        livereload: true
      },
      /**
       * When the Gruntfile changes, we just want to lint it. In fact, when
       * your Gruntfile changes, it will automatically be reloaded!
       */
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: [ 'jshint:gruntfile' ],
        options: {
          livereload: false
        }
      },

      /**
       * When our JavaScript source files change, we want to run lint them and
       * run our unit tests.
       */
      jssrc: {
        files: [ 
          '<%= app_files.js %>'
        ],
        tasks: [ 'jshint:src' ]
      },

      /**
       * When the CSS files change, we need to compile and minify them.
       */
      less: {
        files: [ 'style/*.less' ],
        tasks: [ 'less', 'concat' ],
      },

      html: {
        files: [ 'index.html' ],
        tasks: ['less'],
      },

      livereload: {
        options: {
            livereload: true
        },
        files: [
            'style/*',
            'index.html',
            'templates/*.html',
        ]
      },

      /**
       * When a JavaScript unit test file changes, we only want to lint it and
       * run the unit tests. We don't want to do any live reloading.
       */
      // jsunit: {
      //   files: [
      //     '<%= app_files.jsunit %>'
      //   ],
      //   tasks: [ 'jshint:test' ],
      //   options: {
      //     livereload: false
      //   }
      // }
    }
  }; 

  grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

  /**
   * In order to make it safe to just compile or copy *only* what was changed,
   * we need to ensure we are starting from a clean, fresh build. So we rename
   * the `watch` task to `delta` (that's why the configuration var above is
   * `delta`) and then add a new task called `watch` that does a clean build
   * before watching for changes.
   */
  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', [ 'build', 'compile', 'concat', 'connect',  'delta' ] );

  /**
   * The default task is to build and compile.
   */
  grunt.registerTask( 'default', [ 'build', 'compile', 'concat' ] );

  /**
   * The `build` task gets your app ready to run for development and testing.
   */
  grunt.registerTask( 'build', [
    'clean', 'jshint', 'less',
  ]); 

  /**
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'compile', [
    'less',
    'uglify',
  ]);
};
