// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

var helpers = {
  slugify: function (str) {
    return str.trim().replace(/[^a-z0-9_\-]/ig, '-');
  },
  camelize: function (str) {
    return str.trim().replace(/(?:^|[-_\s]+)(.)?/g, function(match, c){ return c.toUpperCase(); });
  }
};

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json'),
      moduleName = helpers.slugify(process.env.npm_package_config_moduleName || pkg.config.moduleName || pkg.name),
      config = {
        moduleName: helpers.camelize(moduleName),
        distName: helpers.camelize(moduleName).toLowerCase()
      };

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: pkg,
    config: config,
    banner: '/*! <%%= config.moduleName %> - v<%%= pkg.version %> ' +
      '(<%%= grunt.template.today("yyyy-mm-dd") %>)\n\n' +
      '<%%= pkg.name %>\n' + (new Array(pkg.name.length + 1).join('=')) + '\n' +
      '<%%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      'Copyright <%%= grunt.template.today("yyyy") %> <%%= pkg.author.name %> <<%%= pkg.author.email %>>;\n' +
      'Licensed <%%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    bannerMin: '/*! <%%= config.moduleName %> - v<%%= pkg.version %> ' +
      '(<%%= grunt.template.today("yyyy-mm-dd") %>), ' +
      '<%%= pkg.author.name %> <<%%= pkg.author.email %>> ' +
      '<%%= pkg.homepage ? "* " + pkg.homepage : "" %>; ' +
      'Licensed <%%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    clean: {
      files: ['dist', 'build']
    },
    concat: {
      options: {
        banner: '<%%= banner %>',
        stripBanners: false
      },
      dist: {
        src: ['src/**/*'],
        dest: 'dist/<%%= config.distName %>.js'
      },
    },
    uglify: {
      options: {
        banner: '<%%= banner %>'
      },
      dist: {
        src: '<%%= concat.dist.dest %>',
        dest: 'dist/<%%= config.distName %>.min.js'
      },
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    jshint: {
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['src/**/*.js']
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            '*.{md}'
          ]
        }]
      },
      main: {
        files: [{
          src: ['dist/<%%= config.distName %>.js'],
          dest: './<%%= config.distName %>.js'
        }]
      }
    },
    // requirejs: {
    //   build: {
    //     options: {
    //       baseUrl: 'src',
    //       dir: 'build/amd',
    //       useStrict: true,
    //       optimize: 'none',
    //       shim: {
    //         console: {
    //           exports: 'console'
    //         }
    //       }
    //     }
    //   }
    // },
    urequire: {
      umd: {
        template: 'UMD',
        dstPath: 'build/umd',
        resources: [
          [
            '!banner:<%%= config.distName %>.js',
            'concat/add banner to <%%= config.distName %>.js',
            ['<%%= config.distName %>.js'],
            function(r) {
              return [grunt.config.get('banner'), r.converted].join('\n');
            }
          ]
        ]
      },
      amd: {
        template: 'AMD',
        dstPath: 'build/amd',
        resources: [
          [
            '!banner:<%%= config.distName %>.js',
            'concat/add banner to <%%= config.distName %>.js',
            ['<%%= config.distName %>.js'],
            function(r) {
              return [grunt.config.get('banner'), r.converted].join('\n');
            }
          ]
        ]
      },
      combined: {
        template: 'combined',
        path: 'src/',
        dstPath: 'build/<%%= config.distName %>.combined.js',
        main: '<%%= config.distName %>'
      },
      _defaults: {
        path: 'src/',
        scanAllow: true,
        allNodeRequires: false,
        noRootExports: false,
        verbose: true
      }
    },
    connect: {
      test: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              connect.static(require('path').resolve('test')),
              connect.static(require('path').resolve('build/amd'))
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'urequire',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean',
    'urequire',
    'copy:dist',
    'concat',
    'uglify',
    'copy:main'
  ]);

  // Default task
  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};
