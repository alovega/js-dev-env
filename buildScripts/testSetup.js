// This file isn't transpiled, so must use commonJs and Es5.

// register babel to transpile before our tests run.
require('babel-register')();

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){}

