# lsof-mac-fast

is tiny nodejs wrapper around altered version of `lsof` binary included in Mac OS X. This binary will only analyze regular files and is much faster than the original bundled with the os. More information can be found in the [mac-lsof-regular-files-only](https://github.com/zuzkins/mac-lsof-regular-files-only) repository. This library works only on Mac OS X.

#Usage

`npm install lsof-mac-fast`

Then you can use it like this:

```
var lsof = require('lsof-mac-fast');
var filesToCheck = ['/tmp/doc.docx', '/tmp/sheet.xlsx']; // or [] to analyze all file descriptors currently open
lsof(filesToCheck, function(err, stdout, stderr) { ... do something useful with the result ... })
```
