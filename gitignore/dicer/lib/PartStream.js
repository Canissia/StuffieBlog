var inherits = require('util').inherits,
    ReadableStream = require('stream').Readable;

function PartStream(opts) {
  ReadableStream.call(this, opts);
}
inherits(PartStream, ReadableStream);

PartStream.prototype._read = function(n) {};

module.exports = PartStream;
