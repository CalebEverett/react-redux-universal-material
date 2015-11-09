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

var _utilsTime = require('../../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _hours = require('./hours');

var _hours2 = _interopRequireDefault(_hours);

var _minutes = require('./minutes');

var _minutes2 = _interopRequireDefault(_minutes);

var Clock = (function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock() {
    var _this = this;

    _classCallCheck(this, Clock);

    _get(Object.getPrototypeOf(Clock.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      center: { x: null, y: null },
      radius: 0,
      time: this.props.initialTime
    };

    this.handleHourChange = function (hours) {
      if (_this.state.time.getHours() !== hours) {
        var newTime = _utilsTime2['default'].setHours(_this.state.time, _this.adaptHourToFormat(hours));
        _this.setState({ time: newTime });
        if (_this.props.onChange) _this.props.onChange(newTime);
      }
    };

    this.handleMinuteChange = function (minutes) {
      if (_this.state.time.getMinutes() !== minutes) {
        var newTime = _utilsTime2['default'].setMinutes(_this.state.time, minutes);
        _this.setState({ time: newTime });
        if (_this.props.onChange) _this.props.onChange(newTime);
      }
    };

    this.handleCalculateShape = function () {
      var _refs$wrapper$getBoundingClientRect = _this.refs.wrapper.getBoundingClientRect();

      var top = _refs$wrapper$getBoundingClientRect.top;
      var left = _refs$wrapper$getBoundingClientRect.left;
      var width = _refs$wrapper$getBoundingClientRect.width;

      _this.setState({
        center: { x: left + width / 2, y: top + width / 2 },
        radius: width / 2
      });
    };
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleCalculateShape);
      this.handleCalculateShape();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleCalculateShape);
    }
  }, {
    key: 'toggleTimeMode',
    value: function toggleTimeMode() {
      var newTime = _utilsTime2['default'].toggleTimeMode(this.state.time);
      this.setState({ time: newTime });
      if (this.props.onChange) this.props.onChange(newTime);
    }
  }, {
    key: 'adaptHourToFormat',
    value: function adaptHourToFormat(hour) {
      if (this.props.format === 'ampm') {
        if (_utilsTime2['default'].getTimeMode(this.state.time) === 'pm') {
          return hour < 12 ? hour + 12 : hour;
        } else {
          return hour === 12 ? 0 : hour;
        }
      } else {
        return hour;
      }
    }
  }, {
    key: 'renderHours',
    value: function renderHours() {
      return _react2['default'].createElement(_hours2['default'], {
        center: this.state.center,
        format: this.props.format,
        onChange: this.handleHourChange,
        radius: this.state.radius,
        selected: this.state.time.getHours(),
        spacing: this.state.radius * 0.18
      });
    }
  }, {
    key: 'renderMinutes',
    value: function renderMinutes() {
      return _react2['default'].createElement(_minutes2['default'], {
        center: this.state.center,
        onChange: this.handleMinuteChange,
        radius: this.state.radius,
        selected: this.state.time.getMinutes(),
        spacing: this.state.radius * 0.18
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'clock', className: _style2['default'].root },
        _react2['default'].createElement(
          'div',
          { ref: 'wrapper', className: _style2['default'].wrapper, style: { height: this.state.radius * 2 } },
          this.props.display === 'hours' ? this.renderHours() : '',
          this.props.display === 'minutes' ? this.renderMinutes() : ''
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      display: _react2['default'].PropTypes.oneOf(['hours', 'minutes']),
      format: _react2['default'].PropTypes.oneOf(['24hr', 'ampm']),
      initialTime: _react2['default'].PropTypes.object,
      onChange: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      display: 'hours',
      format: '24hr',
      initialTime: new Date()
    },
    enumerable: true
  }]);

  return Clock;
})(_react2['default'].Component);

exports['default'] = Clock;
module.exports = exports['default'];