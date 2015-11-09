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

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var ListItem = (function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    var _this = this;

    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), 'constructor', this).apply(this, arguments);

    this.handleClick = function (event) {
      if (_this.props.onClick && !_this.props.disabled) {
        _this.props.onClick(event);
      }
    };

    this.handleMouseDown = function (event) {
      if (_this.refs.ripple && !_this.props.disabled) {
        _this.refs.ripple.start(event);
      }
    };
  }

  _createClass(ListItem, [{
    key: 'renderContent',
    value: function renderContent() {
      var className = _style2['default'].item;
      if (this.props.legend) className += ' ' + _style2['default']['with-legend'];
      if (this.props.disabled) className += ' ' + _style2['default'].disabled;
      if (this.props.className) className += ' ' + this.props.className;
      if (this.props.selectable) className += ' ' + _style2['default'].selectable;

      return _react2['default'].createElement(
        'span',
        { className: className },
        this.props.leftIcon ? _react2['default'].createElement(_font_icon2['default'], { className: _style2['default'].icon + ' ' + _style2['default'].left, value: this.props.leftIcon }) : null,
        this.props.avatar ? _react2['default'].createElement('img', { className: _style2['default'].avatar, src: this.props.avatar }) : null,
        _react2['default'].createElement(_content2['default'], { caption: this.props.caption, legend: this.props.legend }),
        this.props.ripple ? _react2['default'].createElement(_ripple2['default'], { ref: 'ripple', className: _style2['default'].ripple, spread: 2 }) : null,
        this.props.rightIcon ? _react2['default'].createElement(_font_icon2['default'], { className: _style2['default'].icon + ' ' + _style2['default'].right, value: this.props.rightIcon }) : null
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'li',
        { className: _style2['default']['list-item'], onClick: this.handleClick, onMouseDown: this.handleMouseDown },
        this.props.to ? _react2['default'].createElement(
          'a',
          { href: this.props.to },
          this.renderContent()
        ) : this.renderContent()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      avatar: _react2['default'].PropTypes.string,
      caption: _react2['default'].PropTypes.string.isRequired,
      disabled: _react2['default'].PropTypes.bool,
      leftIcon: _react2['default'].PropTypes.string,
      legend: _react2['default'].PropTypes.string,
      rightIcon: _react2['default'].PropTypes.string,
      ripple: _react2['default'].PropTypes.bool,
      selectable: _react2['default'].PropTypes.bool,
      to: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      disabled: false,
      ripple: false,
      selectable: false
    },
    enumerable: true
  }]);

  return ListItem;
})(_react2['default'].Component);

exports['default'] = ListItem;
module.exports = exports['default'];