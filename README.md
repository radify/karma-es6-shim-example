# karma-es6-shim-example

This is simply to show how to use https://github.com/radify/karma-es6-shim to get Karma unit tests working with ES6 code, PhantomJS and Require.

## Installation

```bash
npm install
```

## Running the tests

```bash
gulp
```

## What's what?

* `Gulpfile.js` - automation script using the [Gulp streaming build system](http://gulpjs.com/). This compiles the code to ES5 and also runs the tests.
* `src/Example.js` - a basic object that we can test
* `src/ExampleController.js` - an AngularJS controller that we can test
* `spec/karma.conf.js` - configuration for [the Karma test runner](http://karma-runner.github.io/0.12/index.html)
* `spec/test-main.js` - configuration for Require so that the `import` statements work correctly
* `spec/ExampleSpec.js` - a Jasmine spec that tests `src/Example.js`, which Karma runs
* `spec/ExampleControllerSpec.js` - a Jasmine spec that tests the AngularJS code in `src/ExampleController.js`, which Karma runs using [PhantomJS](http://phantomjs.org/)
