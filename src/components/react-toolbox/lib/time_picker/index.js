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

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsEvents = require('../utils/events');

var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var TimePicker = (function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker() {
    var _this = this;

    _classCallCheck(this, TimePicker);

    _get(Object.getPrototypeOf(TimePicker.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      value: this.props.value
    };

    this.onTimeSelected = function (newTime) {
      _this.refs.input.setValue(_utilsTime2['default'].formatTime(newTime, _this.props.format));
      _this.setState({ value: newTime });
    };

    this.openTimeDialog = function (event) {
      _utilsEvents2['default'].pauseEvent(event);
      _this.refs.dialog.show();
    };
  }

  _createClass(TimePicker, [{
    key: 'formatTime',
    value: function formatTime() {
      if (this.state.value) {
        return _utilsTime2['default'].formatTime(this.state.value, this.props.format);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'time-picker' },
        _react2['default'].createElement(_input2['default'], {
          ref: 'input',
          className: _style2['default'].input,
          onMouseDown: this.openTimeDialog,
          placeholder: 'Pick up time',
          readOnly: true,
          type: 'text',
          value: this.formatTime()
        }),
        _react2['default'].createElement(_dialog2['default'], {
          ref: 'dialog',
          format: this.props.format,
          initialTime: this.state.value,
          onTimeSelected: this.onTimeSelected
        })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }], [{
    key: 'propTypes',
    value: {
      format: _react2['default'].PropTypes.oneOf(['24hr', 'ampm']),
      value: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      format: '24hr'
    },
    enumerable: true
  }]);

  return TimePicker;
})(_react2['default'].Component);

exports['default'] = TimePicker;
module.exports = exports['default'];