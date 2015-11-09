'use strict';

module.exports = {

  angleFromPositions: function angleFromPositions(cx, cy, ex, ey) {
    var theta = Math.atan2(ey - cy, ex - cx) + Math.PI / 2;
    return theta * 180 / Math.PI;
  },

  angle360FromPositions: function angle360FromPositions(cx, cy, ex, ey) {
    var angle = this.angleFromPositions(cx, cy, ex, ey);
    return angle < 0 ? 360 + angle : angle;
  },

  range: function range() {
    var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var stop = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
    var _start = 0;
    var _stop = start;

    if (stop !== null) {
      _start = start;
      _stop = stop;
    }
    var length = Math.max(Math.ceil((_stop - _start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, _start += step) {
      range[idx] = _start;
    }

    return range;
  },

  round: function round(number, decimals) {
    if (!isNaN(parseFloat(number)) && isFinite(number)) {
      var decimalPower = Math.pow(10, decimals);
      return Math.round(parseFloat(number) * decimalPower) / decimalPower;
    }
    return NaN;
  },

  getViewport: function getViewport() {
    return {
      height: window.innerHeight || document.documentElement.offsetHeight,
      width: window.innerWidth || document.documentElement.offsetWidth
    };
  },

  cloneObject: function cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
  },

  events: require('./events'),
  prefixer: require('./prefixer'),
  time: require('./time'),
  testing: require('./testing')
};