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

var Tab = (function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Tab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.active(this.props.active);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next_props) {
      if (next_props.active) this.active(next_props.active);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].tab + ' ' + this.props.className;
      if (this.props.active) className += ' ' + _style2['default'].active;
      if (this.props.disabled) className += ' ' + _style2['default'].disabled;
      if (this.props.hidden) className += ' ' + _style2['default'].hidden;

      return _react2['default'].createElement(
        'section',
        {
          'data-react-toolbox': 'tab',
          className: className,
          tabIndex: this.props.tabIndex
        },
        this.props.children
      );
    }
  }, {
    key: 'active',
    value: function active(value) {
      this.setState({ active: value });
      if (this.props.onActive && value) {
        this.props.onActive(this);
      }
    }
  }], [{
    key: 'propTypes',
    value: {
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      hidden: _react2['default'].PropTypes.bool,
      label: _react2['default'].PropTypes.string.isRequired,
      onActive: _react2['default'].PropTypes.func,
      tabIndex: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: ''
    },
    enumerable: true
  }]);

  return Tab;
})(_react2['default'].Component);

exports['default'] = Tab;
module.exports = exports['default'];