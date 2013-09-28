# generator-amd-module [![Build Status](https://secure.travis-ci.org/impressiver/generator-amd-module.png?branch=master)](https://travis-ci.org/impressiver/generator-amd-module)

A generator for [Yeoman](http://yeoman.io) based on the [Grunt-AMD boilerplate](https://github.com/impressiver/Grunt-AMD-Boilerplate).

###
Skeleton project structure for developing and publishing JavaScript
[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules, for both client
([Require.js](http://requirejs.org/)) and server ([Node.js](http://nodejs.org/)).
###

The purpose of this generator is *not* to render a complete web application, but
rather the modular components that you might use in various web applications. In
other words, this template makes it easy to build [npm](https://npmjs.org/)
modules.

It is configured so that you can develop components with a structured, organized
codebase and then compile everything down to a single file when you are ready to
publish to the npm registry (or elsewhere).

Bits and Pieces:
  -  [npm](https://npmjs.org/):                     Well... it's a Node.js package manager
  -  [Yeoman](http://yeoman.io):                    Tools that make generating things like this 
  -  [Grunt](http://gruntjs.com/):                  Automates common tasks: test, build, clean
  -  [Bower](http://bower.io/):                     Package manager for browser dependencies
  -  [Jasmine](http://pivotal.github.io/jasmine/):  Behavior-driven test framework
  -  [Karma](http://karma-runner.github.io/):       Javascript test runner
  -  [PhantomJS](http://phantomjs.org/):            Headless browser for running tests
  -  [RequireJS](http://requirejs.org/):            AMD loader optimized for the browser


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-amd-module from npm, run:

```
$ npm install -g generator-amd-module
```

Finally, initiate the generator:

```
$ yo amd-module
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
