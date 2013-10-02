# generator-flex-module [![Build Status](https://secure.travis-ci.org/impressiver/generator-flex-module.png?branch=master)](https://travis-ci.org/impressiver/generator-flex-module)

A generator for [Yeoman](http://yeoman.io) that lets you write JavaScript modules like any other [Node.js](http://nodejs.org/) [module](http://nodejs.org/api/modules.html), [transpile](http://en.wikipedia.org/wiki/Source-to-source_compiler) into every permutation you (or anyone else) might need.

# Write modules in Node.js, get them in the browser for free #

The purpose of this generator is *not* to end up with a complete web application, but rather the modular components that you might use in various parts and stages of your web application.

**WORK IN PROGRESS:** *I'm still experimenting a bit and things might change. I welcome feedback and suggestions; I'd like this to be genuinely useful in the end.*

A complete skeleton for developing in Node.js, testing with [Karma](http://karma-runner.github.io/), optimizing, versioning, and transpiling to any of the internet's favorite module formats. You end up with a publishable [npm](https://npmjs.org/) module for serverside use, [AMD](http://en.wikipedia.org/wiki/Asynchronous_module_definition) ([RequireJS](http://requirejs.org/docs/whyamd.html)), [CommonJS](http://en.wikipedia.org/wiki/CommonJS) ([Browserify](http://browserify.org/)), [UMD](https://github.com/umdjs/umd), and/or a standalone script to use in the browser.

The transpile process is a source-to-source translation, generating a separate directory for each module flavor. This intermediary step is useful not only for debugging in the browser, but also for reducing bloat by defering to the web application for bundling/minifying. This way only the parts needed by the app will be bundled into the final build.

Of course, you also get a standalone optimized build of the module too.

Bits and Pieces:
  -  [npm](https://npmjs.org/):                     Package manager/registry
  -  [Bower](http://bower.io/):                     Browser package manger/registry
  -  [Yeoman](http://yeoman.io):                    Makes web dev easy
  -  [Grunt](http://gruntjs.com/):                  Build/task runner
  -  [Jasmine](http://pivotal.github.io/jasmine/):  Behavior-driven (BDD) tests
  -  [Karma](http://karma-runner.github.io/):       Test runner
  -  [PhantomJS](http://phantomjs.org/):            Headless browser (for test)
  -  [Browserify](http://requirejs.org/):           CJS optimizer/loader
  -  [RequireJS](http://requirejs.org/):            AMD optimizer/loader
  -  [uRequire](http://urequire.org/):              Transpiler/converter


## Getting Started

### Requirements
  -  npm (comes with Node.js)


### Setup Yeoman

Make sure you have Yeoman installed:
```
$ npm install -g yo
...
```

Install this generator (like a plug-in for Yeoman) from npm:
```
$ npm install -g generator-flex-module
```


### Generate a new flex-module

Create a directory for the project, and cd into it:
```
$ mkdir ~/dev/fancy-new-module && cd $_
```

Finally, initiate the generator:
```
$ yo flex-module
```


### Generator Options

The generator will prompt you for several config settings before generating the project files. Where possible, all settings are saved in the project's `package.json` under the `config` hash, and any time an npm lifecycle script or Grunt task is run it will look there first for config values. So you'll be able to make changes to the config if you change your mind later.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
