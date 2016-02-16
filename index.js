var path = require('path'),
    fastLsofBinary = path.join(__dirname, './vendor/fast_lsof'),
    EventEmitter = require('events'),
    util = require('util'),
    child = require("child_process");


module.exports = lsofMacFast;

function lsofMacFast(files, cb) {
    if (process.platform !== 'darwin') {
	cb('Unuspported platform. Only Mac OS is supported.', null, null);
	return null;
    } else {
	child.execFile(fastLsofBinary, files, {maxBuffer: 4*1024*1024}, cb);
    }
}
