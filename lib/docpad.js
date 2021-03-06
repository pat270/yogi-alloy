/*
* Copyright (c) 2012, Liferay Inc. All rights reserved.
* Code licensed under the BSD License:
* https://github.com/liferay/alloy-ui/blob/master/LICENSE.txt
*
* @author Zeno Rocha <zeno.rocha@liferay.com>
*/

// -- Yogi Alloy Header --------------------------------------------------------
var YOGI_ALLOY_PATH = __dirname + '/../';

var base = require(YOGI_ALLOY_PATH + '/lib/base');

// -- Requires -----------------------------------------------------------------
var async = require('async'),
    file = base.requireAlloy('lib/file'),
    command = require('command'),
    path = require('path'),
    git = base.requireYogi('lib/git'),
    log = require('cli-log').init({ prefix: 'yogi', prefixColor: 'magenta' });

// -- Root ------------------------------------------------------------------
var root = path.resolve(path.join(git.findRoot(), '..'));

// -- Docpad ------------------------------------------------------------------
exports.install = function(callback) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .exec('docpad', ['install'])
        .then(function() {
            callback();
        });
};

exports.run = function(callback) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .exec('docpad', ['run'])
        .then(function() {
            callback();
        });
};

exports.generate = function(callback) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .exec('docpad', ['generate', '--env', 'static'])
        .then(function() {
            callback();
        });
};
