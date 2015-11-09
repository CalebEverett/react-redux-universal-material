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

var _checkbox = require('../../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

// Private
var _castType = function _castType(type) {
  var input_type = 'text';
  if (type === Date) {
    input_type = 'date';
  } else if (type === Number) {
    input_type = 'number';
  } else if (type === Boolean) {
    input_type = 'checkbox';
  }
  return input_type;
};

var _castValue = function _castValue(value, type) {
  var cast = value;
  if (value && type === Date) {
    cast = new Date(value).toISOString().slice(0, 10);
  }
  return cast;
};

var Row = (function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _this = this;

    _classCallCheck(this, Row);

    _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);

    this.handleInputChange = function (key, event) {
      _this.props.onChange(event, _this, key, event.target.value);
    };

    this.handleSelectChange = function (event) {
      _this.props.onSelect(event, _this);
    };
  }

  _createClass(Row, [{
    key: 'renderCell',
    value: function renderCell(key) {
      var value = this.props.data[key];

      if (this.props.onChange) {
        var attr = this.props.model[key];
        value = _castValue(value, attr.type);
        return _react2['default'].createElement('input', {
          type: _castType(attr.type),
          value: value,
          onChange: this.handleInputChange.bind(null, key)
        });
      } else {
        return value;
      }
    }
  }, {
    key: 'renderCellSelectable',
    value: function renderCellSelectable() {
      if (this.props.onSelect) {
        return _react2['default'].createElement(
          'th',
          { className: _style2['default'].selectable },
          _react2['default'].createElement(_checkbox2['default'], { onChange: this.handleSelectChange, checked: this.props.selected })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = this.props.className + ' ' + _style2['default'].row;
      if (this.props.changed) className += ' ' + _style2['default'].changed;
      if (this.props.onChange) className += ' ' + _style2['default'].editable;
      if (this.props.selected) className += ' ' + _style2['default'].selected;

      return _react2['default'].createElement(
        'tr',
        { 'data-react-toolbox-table': 'row', className: className },
        this.renderCellSelectable(),
        Object.keys(this.props.model).map(function (key) {
          return _react2['default'].createElement(
            'td',
            { key: key },
            _this2.renderCell(key)
          );
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      changed: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      data: _react2['default'].PropTypes.object,
      index: _react2['default'].PropTypes.number,
      onChange: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      selected: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: ''
    },
    enumerable: true
  }]);

  return Row;
})(_react2['default'].Component);

exports['default'] = Row;
module.exports = exports['default'];