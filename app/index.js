'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var helpers = require('./lib/helpers');

var AmdModuleGenerator = module.exports = function AmdModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AmdModuleGenerator, yeoman.generators.Base);

AmdModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var youInsist = false;
  var prompts = [
    {
      name: 'packageName',
      message: 'What do you want to name this package? (alpha-numeric, dashes are OK):',
      default: function (answers) {
        return youInsist || answers.packageName;
      },
      validate: function (packageName) {
        var requireRe = /^([a-z0-9])([a-z0-9_\-])+$/i,
            rejectRe = /(?:^|\W)(node|js)(?:\W|$)/i,  // See: https://npmjs.org/doc/json.html#name
            bypass = (packageName.length && youInsist === packageName);

        if( bypass ) {
          // The user insisted on using this module name.
          return true;
        }

        if( !packageName.length ) {
          youInsist = false;
          return "Your baby AMD module needs a name."
        }

        if( rejectRe.test(packageName) ) {
          youInsist = packageName;
          return "Using 'node' or 'js' in the name is discouraged in the npm registry. But if you insist, I won't argue."
        }

        if( !requireRe.test(packageName) ) {
          youInsist = packageName;
          return "If you plan to publish this module to the npm registry, please pick a url-friendly name."
        }

        youInsist = false;
        return true;
      }
    },
    {
      name: 'moduleName',
      message: 'What do you want the module classname to be?:',
      default: function (answers) {
        var moduleName = youInsist || answers.moduleName || helpers.camelize(answers.packageName);
        return moduleName;
      },
      validate: function (moduleName) {
        var cameled = helpers.camelize(moduleName),
            bypass = (moduleName.length && youInsist === moduleName);

        if( bypass ) {
          // The user insisted on using this module name.
          return true;
        }

        if( moduleName !== cameled ) {
          youInsist = moduleName;
          return "What about '" + cameled + "' instead? If you insist, I won't argue.";
        }

        youInsist = false;
        return true;
      }
    },
    {
      name: 'description',
      message: 'What makes this module special? (listed in npm searches):'
    }
  ];

  this.prompt(prompts, function (props) {
    this.packageName  = props.packageName;
    this.moduleName   = props.moduleName;
    this.distName     = this.moduleName.toLowerCase();

    cb();
  }.bind(this));
};

AmdModuleGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.template('_main.js', 'src/main.js')
  this.template('_module.js', 'src/' + this.distName + '.js');

  this.mkdir('test');
  this.mkdir('test/lib');
  this.mkdir('test/spec');
  this.template('_test-main.js', 'test/test-main.js');
  this.template('_appSpec.js', 'test/spec/appSpec.js');

  this.mkdir('lib');
  this.copy('console-lite.js', 'lib/console-lite.js')
};

AmdModuleGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('karma.conf.js', 'karma.conf.js');

  this.copy('editorconfig', '.editorconfig');

  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
  this.template('_package.json', 'package.json');
};

AmdModuleGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
  this.copy('jshintrc', '.jshintrc');
};
