/*
#!/usr/bin/env node

var DEFAULT_CONF_FILE = 'repoman.json',
    DEFAULT_WORKSPACE_DIR = '.',
    fs = require('fs'),
    nomnom = require('nomnom'),
    path = require('path'),
    Repoman = require('../lib/repoman').Repoman,
    _doAction, doInit, doRefresh, doSave, action, conf;

_doAction = function (args, action) {
	var confFile = args.confFile || DEFAULT_CONF_FILE,
	    workspaceDir = args.workspaceDir || DEFAULT_WORKSPACE_DIR,
	    repoman = new Repoman(confFile, workspaceDir),
	    conf = repoman.warmUp();

    if (conf === undefined) {
        process.exit(1);
    }
	repoman.hustle(action, conf);
};
doInit = function (args) { _doAction(args, 'init'); };
doRefresh = function (args) { _doAction(args, 'refresh'); };
doCheck = function (args) { _doAction(args, 'check'); };
doSave = function (args) { _doAction(args, 'save'); };

opts = {
    confFile: {
        string: '-f CONF_FILE',
        help: 'Configuration file, default: ' + DEFAULT_CONF_FILE
    },
    workspaceDir: {
        string: '-d WORKSPACE_DIR',
        help: 'Workspace directory, default: ' + DEFAULT_WORKSPACE_DIR
    },
    version: {
        string: '-v',
        flag: true,
        help: 'Repoman version number',
        callback: function () {
            return JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'))).version;
        }
    }
};

nomnom.scriptName('repoman');
nomnom.globalOpts(opts);
nomnom.command('init').callback(doInit);
nomnom.command('refresh').callback(doRefresh);
nomnom.command('check').callback(doCheck);
nomnom.command('save').callback(doSave);
nomnom.parseArgs();
*/