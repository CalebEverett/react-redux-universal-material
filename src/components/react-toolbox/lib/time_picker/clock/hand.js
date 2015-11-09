'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var Hand = (function (_React$Component) {
  _inherits(Hand, _React$Component);

  function Hand() {
    var _this = this;

    _classCallCheck(this, Hand);

    _get(Object.getPrototypeOf(Hand.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      knobWidth: 0
    };

    this.handleMouseMove = function (event) {
      _this.move(_utils2['default'].events.getMousePosition(event));
    };

    this.handleTouchMove = function (event) {
      _this.move(_utils2['default'].events.getTouchPosition(event));
    };

    this.handleMouseUp = function () {
      _this.end(_this.getMouseEventMap());
    };

    this.handleTouchEnd = function () {
      _this.end(_this.getTouchEventMap());
    };
  }

  _createClass(Hand, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ knobWidth: this.refs.knob.offsetWidth });
    }
  }, {
    key: 'getMouseEventMap',
    value: function getMouseEventMap() {
      return {
        mousemove: this.handleMouseMove,
        mouseup: this.handleMouseUp
      };
    }
  }, {
    key: 'getTouchEventMap',
    value: function getTouchEventMap() {
      return {
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      };
    }
  }, {
    key: 'mouseStart',
    value: function mouseStart(event) {
      _utils2['default'].events.addEventsToDocument(this.getMouseEventMap());
      this.move(_utils2['default'].events.getMousePosition(event));
    }
  }, {
    key: 'touchStart',
    value: function touchStart(event) {
      _utils2['default'].events.addEventsToDocument(this.getTouchEventMap());
      this.move(_utils2['default'].events.getTouchPosition(event));
      _utils2['default'].events.pauseEvent(event);
    }
  }, {
    key: 'getPositionRadius',
    value: function getPositionRadius(position) {
      var x = this.props.origin.x - position.x;
      var y = this.props.origin.y - position.y;
      return Math.sqrt(x * x + y * y);
    }
  }, {
    key: 'trimAngleToValue',
    value: function trimAngleToValue(angle) {
      return this.props.step * Math.round(angle / this.props.step);
    }
  }, {
    key: 'positionToAngle',
    value: function positionToAngle(position) {
      return _utils2['default'].angle360FromPositions(this.props.origin.x, this.props.origin.y, position.x, position.y);
    }
  }, {
    key: 'end',
    value: function end(events) {
      if (this.props.onMoved) this.props.onMoved();
      _utils2['default'].events.removeEventsFromDocument(events);
    }
  }, {
    key: 'move',
    value: function move(position) {
      var degrees = this.trimAngleToValue(this.positionToAngle(position));
      var radius = this.getPositionRadius(position);
      if (this.props.onMove) this.props.onMove(degrees === 360 ? 0 : degrees, radius);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].hand + ' ' + this.props.className;
      var handStyle = _utils2['default'].prefixer({
        height: this.props.length - this.state.knobWidth / 2,
        transform: 'rotate(' + this.props.angle + 'deg)'
      });

      return _react2['default'].createElement(
        'div',
        { className: className, style: handStyle },
        _react2['default'].createElement('div', { ref: 'knob', className: _style2['default'].knob })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      angle: _react2['default'].PropTypes.number,
      onMove: _react2['default'].PropTypes.func,
      onMoved: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      angle: 0,
      length: 0,
      origin: {}
    },
    enumerable: true
  }]);

  return Hand;
})(_react2['default'].Component);

exports['default'] = Hand;
module.exports = exports['default'];