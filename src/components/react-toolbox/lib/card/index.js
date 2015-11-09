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

var _navigation = require('../navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Card = (function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _this = this;

    _classCallCheck(this, Card);

    _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).apply(this, arguments);

    this.handleMouseDown = function (event) {
      if (_this.props.onClick) {
        event.preventDefault();
        _this.refs.ripple.start(event);
        _this.props.onClick(event, _this);
      }
    };
  }

  _createClass(Card, [{
    key: 'renderActions',
    value: function renderActions() {
      if (this.props.actions) {
        return _react2['default'].createElement(_navigation2['default'], { 'data-role': 'actions', className: _style2['default'].navigation, actions: this.props.actions });
      }
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      var styleFigure = {};
      var styleOverflow = {};
      if (this.props.image) styleFigure.backgroundImage = 'url(' + this.props.image + ')';
      if (this.props.color) {
        styleFigure.backgroundColor = this.props.color;
        styleOverflow.backgroundColor = this.props.color;
      }

      if (this.props.title || this.props.image) {
        return _react2['default'].createElement(
          'figure',
          { className: _style2['default'].figure, style: styleFigure },
          this.props.title ? _react2['default'].createElement(
            'h5',
            { 'data-role': 'title' },
            this.props.title
          ) : null,
          this.props.subtitle ? _react2['default'].createElement(
            'small',
            { 'data-role': 'subtitle' },
            this.props.subtitle
          ) : null,
          this.props.color ? _react2['default'].createElement('div', { className: _style2['default'].overflow, style: styleOverflow }) : null
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root;
      if (this.props.type) className += ' ' + _style2['default'][this.props.type];
      if (this.props.onClick) className += ' ' + _style2['default'].touch;
      if (this.props.image || this.props.color) className += ' ' + _style2['default'].contrast;
      if (this.props.color) className += ' ' + _style2['default'].color;
      if (this.props.loading) className += ' ' + _style2['default'].loading;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        {
          'data-react-toolbox': 'card',
          className: className,
          onMouseDown: this.handleMouseDown
        },
        this.renderTitle(),
        this.props.text ? _react2['default'].createElement(
          'p',
          { 'data-role': 'text', className: _style2['default'].text },
          this.props.text
        ) : null,
        this.renderActions(),
        _react2['default'].createElement(_ripple2['default'], {
          ref: 'ripple',
          className: _style2['default'].ripple,
          loading: this.props.loading,
          spread: 2.5
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      actions: _react2['default'].PropTypes.array,
      className: _react2['default'].PropTypes.string,
      color: _react2['default'].PropTypes.string,
      image: _react2['default'].PropTypes.string,
      loading: _react2['default'].PropTypes.bool,
      onClick: _react2['default'].PropTypes.func,
      text: _react2['default'].PropTypes.string,
      title: _react2['default'].PropTypes.string,
      type: _react2['default'].PropTypes.oneOf(['wide', 'event', 'image'])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      loading: false
    },
    enumerable: true
  }]);

  return Card;
})(_react2['default'].Component);

exports['default'] = Card;
module.exports = exports['default'];