'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Tabs = (function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _this = this;

    _classCallCheck(this, Tabs);

    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      index: this.props.index,
      pointer: {}
    };

    this.handleClick = function (index) {
      _this.setState({
        index: index,
        pointer: _this._pointerPosition(index)
      });
      if (_this.props.onChange) _this.props.onChange(_this);
    };
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ pointer: _this2._pointerPosition(_this2.state.index) });
      }, 20);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next_props) {
      var index = next_props.index || this.state.index;
      this.setState({
        index: index,
        pointer: this._pointerPosition(index)
      });
    }
  }, {
    key: '_pointerPosition',
    value: function _pointerPosition() {
      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      var startPoint = this.refs.tabs.getBoundingClientRect().left;
      var label = this.refs.navigation.children[index].getBoundingClientRect();

      return {
        top: this.refs.navigation.getBoundingClientRect().height + 'px',
        left: label.left - startPoint + 'px',
        width: label.width + 'px'
      };
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels(labels) {
      return labels.map(function (props) {
        return _react2['default'].createElement(
          'label',
          props,
          props.label
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var labels = [];

      var tabs = this.props.children.map(function (tab, index) {
        var active = _this3.state.index === index;
        var className = _style2['default'].label + ' ' + tab.props.className;

        if (active) className += ' ' + _style2['default'].active;
        if (tab.props.disabled) className += ' ' + _style2['default'].disabled;
        if (tab.props.hidden) className += ' ' + _style2['default'].hidden;

        labels.push({
          className: className,
          label: tab.props.label,
          key: index,
          onClick: !tab.props.disabled ? _this3.handleClick.bind(_this3, index) : null
        });

        return _react2['default'].cloneElement(tab, { active: active, key: index, tabIndex: index });
      });

      var className = _style2['default'].root;
      if (this.props.className) className += ' ' + this.props.className;

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'tabs', ref: 'tabs', className: className },
        _react2['default'].createElement(
          'nav',
          { className: _style2['default'].navigation, ref: 'navigation' },
          this.renderLabels(labels)
        ),
        _react2['default'].createElement('span', { className: _style2['default'].pointer, style: this.state.pointer }),
        tabs
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
      className: _react2['default'].PropTypes.string,
      index: _react2['default'].PropTypes.number.isRequired,
      onChange: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      index: 0
    },
    enumerable: true
  }]);

  return Tabs;
})(_react2['default'].Component);

exports['default'] = Tabs;
module.exports = exports['default'];