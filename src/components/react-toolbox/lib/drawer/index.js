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

var Drawer = (function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer() {
    var _this = this;

    _classCallCheck(this, Drawer);

    _get(Object.getPrototypeOf(Drawer.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: this.props.active
    };

    this.handleOverlayClick = function () {
      if (_this.props.hideable) {
        _this.setState({ active: false });
      }
    };
  }

  _createClass(Drawer, [{
    key: 'render',
    value: function render() {
      var className = _style2['default'].drawer + ' ' + _style2['default'][this.props.type];
      if (this.state.active) className += ' ' + _style2['default'].active;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'drawer', className: className },
        _react2['default'].createElement('div', { className: _style2['default'].overlay, onClick: this.handleOverlayClick }),
        _react2['default'].createElement(
          'aside',
          { className: _style2['default'].content },
          this.props.children
        )
      );
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({ active: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ active: false });
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      hideable: _react2['default'].PropTypes.bool,
      type: _react2['default'].PropTypes.oneOf(['left', 'right'])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      hideable: true,
      type: 'left'
    },
    enumerable: true
  }]);

  return Drawer;
})(_react2['default'].Component);

exports['default'] = Drawer;
module.exports = exports['default'];