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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Dialog = (function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    _get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: this.props.active
    };
  }

  _createClass(Dialog, [{
    key: 'renderActions',
    value: function renderActions() {
      return this.props.actions.map(function (action, idx) {
        var className = _style2['default'].button;
        if (action.className) className += ' ' + action.className;
        return _react2['default'].createElement(_button2['default'], _extends({ key: idx }, action, { className: className }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root + ' ' + _style2['default'][this.props.type];
      if (this.state.active) className += ' ' + _style2['default'].active;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'dialog', className: className },
        _react2['default'].createElement('div', { role: 'overlay', className: _style2['default'].overlay }),
        _react2['default'].createElement(
          'div',
          { role: 'content', className: _style2['default'].content },
          _react2['default'].createElement(
            'section',
            { role: 'body', className: _style2['default'].body },
            this.props.title ? _react2['default'].createElement(
              'h6',
              { className: _style2['default'].title },
              this.props.title
            ) : null,
            this.props.children
          ),
          _react2['default'].createElement(
            'nav',
            { role: 'navigation', className: _style2['default'].navigation },
            this.renderActions()
          )
        )
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
      this.setState({ active: true });
    }
  }], [{
    key: 'propTypes',
    value: {
      actions: _react2['default'].PropTypes.array,
      active: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      title: _react2['default'].PropTypes.string,
      type: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      actions: [],
      active: false,
      type: 'normal'
    },
    enumerable: true
  }]);

  return Dialog;
})(_react2['default'].Component);

exports['default'] = Dialog;
module.exports = exports['default'];