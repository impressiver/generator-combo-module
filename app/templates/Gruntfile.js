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
    banner: '/*! <%%= config.moduleName %> - v<%%= pkg.version %> - ' +
      '<%%= grunt.template.today("yyyy-mm-dd") %>\n\n' +
      '<%%= pkg.name %>\n' + (new Array(pkg.name.length + 1).join('=')) + '\n' +
      '<%%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%%= grunt.template.today("yyyy") %> <%%= pkg.author.name %>;' +
      ' Licensed <%%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%%= banner %>',
        stripBanners: false
      },
      dist: {
        src: ['dist/<%%= config.distName %>.js'],
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
    requirejs: {
      compile: {
        options: {
          name: 'main',
          mainConfigFile: 'src/main.js',
          out: 'dist/<%%= config.distName %>.js',
          optimize: 'none'
          // generateSourceMaps: true,
        }
      }
    },
    connect: {
      test: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              connect.static(require('path').resolve('test')),
              connect.static(require('path').resolve('src'))
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy:dist',
    'requirejs',
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