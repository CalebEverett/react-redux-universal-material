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

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _styleMenu_item = require('./style.menu_item');

var _styleMenu_item2 = _interopRequireDefault(_styleMenu_item);

var MenuItem = (function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _this = this;

    _classCallCheck(this, MenuItem);

    _get(Object.getPrototypeOf(MenuItem.prototype), 'constructor', this).apply(this, arguments);

    this.handleClick = function (event) {
      if (_this.props.onClick && !_this.props.disabled) {
        _this.props.onClick(event, _this);
      }
    };

    this.handleMouseDown = function (event) {
      if (_this.props.ripple && !_this.props.disabled) {
        _this.refs.ripple.start(event);
      }
    };
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var className = _styleMenu_item2['default'].root;
      if (this.props.selected) className += ' ' + _styleMenu_item2['default'].selected;
      if (this.props.disabled) className += ' ' + _styleMenu_item2['default'].disabled;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'li',
        {
          'data-react-toolbox': 'menu-item',
          className: className,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown
        },
        this.props.icon ? _react2['default'].createElement(_font_icon2['default'], { value: this.props.icon, className: _styleMenu_item2['default'].icon }) : null,
        _react2['default'].createElement(
          'span',
          { className: _styleMenu_item2['default'].caption },
          this.props.caption
        ),
        this.props.shortcut ? _react2['default'].createElement(
          'small',
          { className: _styleMenu_item2['default'].shortcut },
          this.props.shortcut
        ) : null,
        this.props.ripple ? _react2['default'].createElement(_ripple2['default'], { ref: 'ripple', className: _styleMenu_item2['default'].ripple, spread: 2.5 }) : null
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      caption: _react2['default'].PropTypes.string.isRequired,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      icon: _react2['default'].PropTypes.string,
      ripple: _react2['default'].PropTypes.bool,
      shortcut: _react2['default'].PropTypes.string,
      selected: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      disabled: false,
      ripple: false,
      selected: false
    },
    enumerable: true
  }]);

  return MenuItem;
})(_react2['default'].Component);

exports['default'] = MenuItem;
module.exports = exports['default'];