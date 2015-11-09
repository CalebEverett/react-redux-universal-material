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

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _selectValue = function _selectValue(value, dataSource) {
  var item = undefined;
  if (value) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dataSource[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        item = _step.value;

        if (item.value.toString() === value.toString()) break;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return item;
  } else {
    return dataSource[0];
  }
};

var Dropdown = (function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _this = this;

    _classCallCheck(this, Dropdown);

    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      active: false,
      selected: _selectValue(this.props.value, this.props.dataSource),
      up: false,
      width: undefined
    };

    this.handleClick = function (event) {
      var client = event.target.getBoundingClientRect();
      var screen_height = window.innerHeight || document.documentElement.offsetHeight;
      var up = _this.props.auto ? client.top > screen_height / 2 + client.height : false;
      _this.setState({ active: true, up: up });
    };

    this.handleClickValue = function (id) {
      if (!_this.props.disabled) {
        var value = id.toString();
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this.props.dataSource[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (item.value.toString() === value) {
              _this.setState({ active: false, selected: item });
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    };
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        width: _reactDom2['default'].findDOMNode(this).getBoundingClientRect().width
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prev_props, prev_state) {
      if (this.props.onChange && prev_state.selected !== this.state.selected && prev_state.active) {
        this.props.onChange(this);
      }
    }
  }, {
    key: 'renderValues',
    value: function renderValues() {
      var _this2 = this;

      var items = this.props.dataSource.map(function (item, index) {
        var className = undefined;
        if (item.value === _this2.state.selected.value) className = ' ' + _style2['default'].selected;

        return _react2['default'].createElement(
          'li',
          {
            key: index,
            className: className,
            id: item.value,
            onClick: _this2.handleClickValue.bind(_this2, item.value)
          },
          _this2.props.template ? _this2.props.template(item) : item.label,
          _react2['default'].createElement(_ripple2['default'], { className: _style2['default'].ripple })
        );
      });

      var className = _style2['default'].values;
      var valuesStyle = { width: this.state.width };
      if (this.state.up) className += ' ' + _style2['default'].up;

      return _react2['default'].createElement(
        'ul',
        { ref: 'values', className: className, style: valuesStyle },
        items
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root;
      if (this.props.className) className += ' ' + this.props.className;
      if (this.props.disabled) className += ' ' + _style2['default'].disabled;
      if (this.state.active) className += ' ' + _style2['default'].active;

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'dropdown', className: className },
        this.props.label ? _react2['default'].createElement(
          'label',
          { className: _style2['default'].label },
          this.props.label
        ) : null,
        this.renderValues(),
        _react2['default'].createElement(
          'div',
          { ref: 'value', className: _style2['default'].value, onClick: this.handleClick },
          this.props.template ? this.props.template(this.state.selected) : _react2['default'].createElement(
            'span',
            null,
            this.state.selected.label
          )
        )
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.selected.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(data) {
      this.setState({ selected: data });
    }
  }], [{
    key: 'propTypes',
    value: {
      auto: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      dataSource: _react2['default'].PropTypes.array.isRequired,
      disabled: _react2['default'].PropTypes.bool,
      label: _react2['default'].PropTypes.string,
      onChange: _react2['default'].PropTypes.func,
      template: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      auto: true,
      className: '',
      disabled: false
    },
    enumerable: true
  }]);

  return Dropdown;
})(_react2['default'].Component);

exports['default'] = Dropdown;
module.exports = exports['default'];