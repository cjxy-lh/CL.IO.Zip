// Generated by CoffeeScript 1.7.1
var Buffer, create;

Buffer = require('buffer').Buffer;

create = require('./create');

module.exports = create(function(buf, previous) {
  var accum, byte, crc, _i, _len;
  if (!Buffer.isBuffer(buf)) {
    buf = Buffer(buf);
  }
  crc = ~~previous;
  accum = 0;
  for (_i = 0, _len = buf.length; _i < _len; _i++) {
    byte = buf[_i];
    accum += byte;
  }
  crc += accum % 256;
  return crc % 256;
});
