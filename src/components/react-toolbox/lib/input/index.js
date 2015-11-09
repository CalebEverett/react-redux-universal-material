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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var Input = (function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _this = this;

    _classCallCheck(this, Input);

    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      value: this.props.value
    };

    this.onChange = function (event) {
      _this.setState({ value: event.target.value }, function () {
        if (_this.props.onChange) _this.props.onChange(event, _this);
      });
    };
  }

  _createClass(Input, [{
    key: 'renderInput',
    value: function renderInput() {
      var className = _style2['default'].input;
      if (this.state.value && this.state.value.length > 0) className += ' ' + _style2['default'].filled;

      if (this.props.multiline) {
        return _react2['default'].createElement('textarea', _extends({
          role: 'input'
        }, this.props, {
          ref: 'input',
          className: className,
          onChange: this.onChange,
          value: this.state.value
        }));
      } else {
        return _react2['default'].createElement('input', _extends({
          role: 'input'
        }, this.props, {
          ref: 'input',
          className: className,
          onChange: this.onChange,
          value: this.state.value
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root;
      var labelClassName = _style2['default'].label;
      if (this.props.error) className += ' ' + _style2['default'].errored;
      if (this.props.disabled) className += ' ' + _style2['default'].disabled;
      if (this.props.className) className += ' ' + this.props.className;
      if (this.props.type === 'hidden') className += ' ' + _style2['default'].hidden;
      if (this.props.icon) className += ' ' + _style2['default']['with-icon'];
      if (!this.props.floating) labelClassName += ' ' + _style2['default'].fixed;

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'input', className: className },
        this.renderInput(),
        this.props.icon ? _react2['default'].createElement(_font_icon2['default'], { className: _style2['default'].icon, value: this.props.icon }) : null,
        _react2['default'].createElement('span', { className: _style2['default'].bar }),
        this.props.label ? _react2['default'].createElement(
          'label',
          { className: labelClassName },
          this.props.label
        ) : null,
        this.props.error ? _react2['default'].createElement(
          'span',
          { className: _style2['default'].error },
          this.props.error
        ) : null,
        this.props.tooltip ? _react2['default'].createElement(_tooltip2['default'], { label: this.props.tooltip }) : null
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
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      error: _react2['default'].PropTypes.string,
      floating: _react2['default'].PropTypes.bool,
      icon: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.string,
      multiline: _react2['default'].PropTypes.bool,
      onBlur: _react2['default'].PropTypes.func,
      onChange: _react2['default'].PropTypes.func,
      onFocus: _react2['default'].PropTypes.func,
      onKeyPress: _react2['default'].PropTypes.func,
      required: _react2['default'].PropTypes.bool,
      type: _react2['default'].PropTypes.string,
      value: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      disabled: false,
      floating: true,
      multiline: false,
      required: false,
      type: 'text'
    },
    enumerable: true
  }]);

  return Input;
})(_react2['default'].Component);

exports['default'] = Input;
module.exports = exports['default'];