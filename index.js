var path = require('path'),
    fastLsofBinary = path.join(__dirname, './vendor/fast_lsof'),
    EventEmitter = require('events'),
    util = require('util'),
    child = require("child_process");



exports.lsof = function(files, cb) {
    files = files || [];
    cb = cb || function(err, stdout, stderr) {};
    if (process.platform !== 'darwin') {
	cb('Unuspported platform. Only Mac OS is supported.', null, null);
	return null;
    } else {
	child.execFile(fastLsofBinary, files, {maxBuffer: 4*1024*1024}, cb);
	return null;
    }
}
