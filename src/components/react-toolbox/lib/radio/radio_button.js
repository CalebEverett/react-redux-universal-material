'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsEvents = require('../utils/events');

var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

var RadioButton = (function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _this = this;

    _classCallCheck(this, RadioButton);

    _get(Object.getPrototypeOf(RadioButton.prototype), 'constructor', this).apply(this, arguments);

    this.handleChange = function (event) {
      if (!_this.props.checked && _this.props.onChange) {
        _this.props.onChange(event, _this);
      }
    };

    this.handleClick = function (event) {
      _utilsEvents2['default'].pauseEvent(event);
      if (!_this.props.disabled) _this.handleChange(event);
    };

    this.handleInputClick = function (event) {
      _utilsEvents2['default'].pauseEvent(event);
    };

    this.handleMouseDown = function (event) {
      if (!_this.props.disabled) _this.refs.ripple.start(event);
    };
  }

  _createClass(RadioButton, [{
    key: 'render',
    value: function render() {
      var labelClassName = _style2['default'][this.props.disabled ? 'disabled' : 'field'];
      var radioClassName = _style2['default'][this.props.checked ? 'radio-checked' : 'radio'];
      if (this.props.className) labelClassName += ' ' + this.props.className;

      return _react2['default'].createElement(
        'label',
        { className: labelClassName, onClick: this.handleClick },
        _react2['default'].createElement('input', _extends({}, this.props, {
          ref: 'input',
          className: _style2['default'].input,
          onChange: this.handleChange,
          onClick: this.handleInputClick,
          type: 'radio'
        })),
        _react2['default'].createElement(
          'span',
          { role: 'radio', className: radioClassName, onMouseDown: this.handleMouseDown },
          _react2['default'].createElement(_ripple2['default'], { ref: 'ripple', role: 'ripple', className: _style2['default'].ripple, spread: 3, centered: true })
        ),
        this.props.label ? _react2['default'].createElement(
          'span',
          { className: _style2['default'].text },
          this.props.label
        ) : null
      );
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.refs.input.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.input.focus();
    }
  }], [{
    key: 'propTypes',
    value: {
      checked: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      label: _react2['default'].PropTypes.string,
      name: _react2['default'].PropTypes.string,
      onBlur: _react2['default'].PropTypes.func,
      onChange: _react2['default'].PropTypes.func,
      onFocus: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      checked: false,
      className: '',
      disabled: false
    },
    enumerable: true
  }]);

  return RadioButton;
})(_react2['default'].Component);

exports['default'] = RadioButton;
module.exports = exports['default'];