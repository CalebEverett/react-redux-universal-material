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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Ripple = (function (_React$Component) {
  _inherits(Ripple, _React$Component);

  function Ripple() {
    var _this = this;

    _classCallCheck(this, Ripple);

    _get(Object.getPrototypeOf(Ripple.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: false,
      left: null,
      restarting: false,
      top: null,
      width: null
    };

    this.handleEnd = function () {
      document.removeEventListener('mouseup', _this.handleEnd);
      _this.setState({ active: false });
    };

    this.start = function (_ref) {
      var pageX = _ref.pageX;
      var pageY = _ref.pageY;

      document.addEventListener('mouseup', _this.handleEnd);

      var _getDescriptor2 = _this._getDescriptor(pageX, pageY);

      var top = _getDescriptor2.top;
      var left = _getDescriptor2.left;
      var width = _getDescriptor2.width;

      _this.setState({ active: false, restarting: true, width: 0 }, function () {
        _this.refs.ripple.offsetWidth; //eslint-disable-line no-unused-expressions
        _this.setState({ active: true, restarting: false, top: top, left: left, width: width });
      });
    };
  }

  _createClass(Ripple, [{
    key: '_getDescriptor',
    value: function _getDescriptor(pageX, pageY) {
      var _ReactDOM$findDOMNode$getBoundingClientRect = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();

      var left = _ReactDOM$findDOMNode$getBoundingClientRect.left;
      var top = _ReactDOM$findDOMNode$getBoundingClientRect.top;
      var height = _ReactDOM$findDOMNode$getBoundingClientRect.height;
      var width = _ReactDOM$findDOMNode$getBoundingClientRect.width;

      return {
        left: this.props.centered ? width / 2 : pageX - left,
        top: this.props.centered ? height / 2 : pageY - top,
        width: width * this.props.spread
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var left = _state.left;
      var top = _state.top;
      var width = _state.width;

      var rippleStyle = { left: left, top: top, width: width, height: width };
      var className = _style2['default'][this.props.loading ? 'loading' : 'normal'];
      if (this.state.active) className += ' ' + _style2['default'].active;
      if (this.state.restarting) className += ' ' + _style2['default'].restarting;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'span',
        { 'data-react-toolbox': 'ripple', className: _style2['default'].wrapper },
        _react2['default'].createElement('span', { ref: 'ripple', role: 'ripple', className: className, style: rippleStyle })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      centered: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      loading: _react2['default'].PropTypes.bool,
      spread: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      centered: false,
      className: '',
      loading: false,
      spread: 2
    },
    enumerable: true
  }]);

  return Ripple;
})(_react2['default'].Component);

exports['default'] = Ripple;
module.exports = exports['default'];