'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utilsEvents = require('../utils/events');

var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _this = this;

    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);

    this.handleMouseDown = function (event) {
      _utilsEvents2['default'].pauseEvent(event);
      _this.refs.ripple.start(event);
      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
    };
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var className = _style2['default'][this.props.kind];
      var _props = this.props;
      var label = _props.label;
      var icon = _props.icon;
      var loading = _props.loading;
      var ripple = _props.ripple;
      var primary = _props.primary;
      var accent = _props.accent;
      var mini = _props.mini;
      var kind = _props.kind;
      var tooltip = _props.tooltip;

      var others = _objectWithoutProperties(_props, ['label', 'icon', 'loading', 'ripple', 'primary', 'accent', 'mini', 'kind', 'tooltip']);

      if (this.props.className) className += ' ' + this.props.className;
      if (!primary && !accent) className += ' ' + _style2['default'].primary;
      if (primary) className += ' ' + _style2['default'].primary;
      if (accent) className += ' ' + _style2['default'].accent;
      if (mini) className += ' ' + _style2['default'].mini;

      return _react2['default'].createElement(
        'button',
        _extends({
          'data-react-toolbox': 'button'
        }, others, {
          className: className,
          onMouseDown: this.handleMouseDown,
          disabled: this.props.disabled || this.props.loading
        }),
        ripple ? _react2['default'].createElement(_ripple2['default'], { ref: 'ripple', loading: loading }) : null,
        icon ? _react2['default'].createElement(_font_icon2['default'], { className: _style2['default'].icon, value: icon }) : null,
        label ? _react2['default'].createElement(
          'abbr',
          { className: _style2['default'].label },
          label
        ) : null,
        tooltip ? _react2['default'].createElement(_tooltip2['default'], { label: tooltip }) : null
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      accent: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      icon: _react2['default'].PropTypes.string,
      kind: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.string,
      loading: _react2['default'].PropTypes.bool,
      mini: _react2['default'].PropTypes.bool,
      primary: _react2['default'].PropTypes.bool,
      ripple: _react2['default'].PropTypes.bool,
      tooltip: _react2['default'].PropTypes.string,
      type: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      accent: false,
      className: '',
      kind: 'flat',
      loading: false,
      mini: false,
      primary: false,
      ripple: true
    },
    enumerable: true
  }]);

  return Button;
})(_react2['default'].Component);

exports['default'] = Button;
module.exports = exports['default'];