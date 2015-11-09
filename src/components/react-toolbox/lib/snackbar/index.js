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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var Snackbar = (function (_React$Component) {
  _inherits(Snackbar, _React$Component);

  function Snackbar() {
    var _this = this;

    _classCallCheck(this, Snackbar);

    _get(Object.getPrototypeOf(Snackbar.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: false
    };

    this.handleClick = function (event) {
      _this.setState({ active: false });
      if (_this.props.onClick) {
        _this.props.onClick(event, _this);
      }
    };
  }

  _createClass(Snackbar, [{
    key: 'renderButton',
    value: function renderButton() {
      if (this.props.action) {
        return _react2['default'].createElement(_button2['default'], {
          className: _style2['default'].button,
          kind: 'flat',
          label: this.props.action,
          onClick: this.handleClick
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root + ' ' + _style2['default'][this.props.type];
      if (this.state.active) className += ' ' + _style2['default'].active;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'snackbar', className: className },
        this.props.icon ? _react2['default'].createElement(_font_icon2['default'], { value: this.props.icon, className: _style2['default'].icon }) : null,
        _react2['default'].createElement(
          'span',
          { className: _style2['default'].label },
          this.props.label
        ),
        this.renderButton()
      );
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ active: false });
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      this.setState({ active: true });
      if (this.props.timeout) {
        setTimeout(function () {
          _this2.setState({ active: false });
        }, this.props.timeout * 1000);
      }
    }
  }], [{
    key: 'propTypes',
    value: {
      action: _react2['default'].PropTypes.string,
      className: _react2['default'].PropTypes.string,
      icon: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.string.isRequired,
      onClick: _react2['default'].PropTypes.func,
      timeout: _react2['default'].PropTypes.number,
      type: _react2['default'].PropTypes.string
    },
    enumerable: true
  }]);

  return Snackbar;
})(_react2['default'].Component);

exports['default'] = Snackbar;
module.exports = exports['default'];