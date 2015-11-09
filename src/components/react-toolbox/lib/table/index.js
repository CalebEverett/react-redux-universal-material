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

var _componentsHead = require('./components/head');

var _componentsHead2 = _interopRequireDefault(_componentsHead);

var _componentsRow = require('./components/row');

var _componentsRow2 = _interopRequireDefault(_componentsRow);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var Table = (function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _this = this;

    _classCallCheck(this, Table);

    _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      dataSource: _utils2['default'].cloneObject(this.props.dataSource),
      selected: false,
      selected_rows: []
    };

    this.componentWillReceiveProps = function (next_props) {
      if (next_props.dataSource) {
        _this.setState({ dataSource: _utils2['default'].cloneObject(next_props.datasSource) });
      }
    };

    this.handleRowChange = function (event, row, key, value) {
      var dataSource = _this.state.dataSource;
      dataSource[row.props.index][key] = value;
      _this.setState({ dataSource: dataSource });
      if (_this.props.onChange) {
        _this.props.onChange(event, _this, row);
      }
    };

    this.handleRowSelect = function (event, instance) {
      if (_this.props.onSelect) {
        var index = instance.props.index;
        var selected_rows = _this.state.selected_rows;
        var selected = selected_rows.indexOf(index) === -1;
        if (selected) {
          selected_rows.push(index);
          _this.props.onSelect(event, instance.props.data);
        } else {
          delete selected_rows[selected_rows.indexOf(index)];
        }
        _this.setState({ selected_rows: selected_rows });
      }
    };

    this.handleRowsSelect = function (event) {
      _this.setState({ selected: !_this.state.selected });
    };

    this.isChanged = function (data, base) {
      var changed = false;
      Object.keys(data).map(function (key) {
        if (data[key] !== base[key]) {
          changed = true;
        }
      });
      return changed;
    };
  }

  _createClass(Table, [{
    key: 'renderHead',
    value: function renderHead() {
      if (this.props.heading) {
        return _react2['default'].createElement(_componentsHead2['default'], {
          model: this.props.model,
          onSelect: this.props.onSelect ? this.handleRowsSelect : null,
          selected: this.state.selected
        });
      }
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var _this2 = this;

      return _react2['default'].createElement(
        'tbody',
        null,
        this.state.dataSource.map(function (data, index) {
          return _react2['default'].createElement(_componentsRow2['default'], {
            changed: _this2.isChanged(data, _this2.props.dataSource[index]),
            data: data,
            index: index,
            key: index,
            model: _this2.props.model,
            onChange: _this2.props.onChange ? _this2.handleRowChange : null,
            onSelect: _this2.props.onSelect ? _this2.handleRowSelect : null,
            selected: _this2.state.selected || _this2.state.selected_rows.indexOf(index) !== -1
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className + ' ' + _style2['default'].root;
      return _react2['default'].createElement(
        'table',
        { 'data-react-toolbox': 'table', className: className },
        this.renderHead(),
        this.renderBody()
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.dataSource;
    }
  }, {
    key: 'getSelected',
    value: function getSelected() {
      var _this3 = this;

      var rows = [];
      this.state.dataSource.map(function (row, index) {
        if (_this3.state.selected_rows.indexOf(index) !== -1) rows.push(row);
      });
      return rows;
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      dataSource: _react2['default'].PropTypes.array,
      model: _react2['default'].PropTypes.object,
      heading: _react2['default'].PropTypes.bool,
      onChange: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      dataSource: [],
      heading: true
    },
    enumerable: true
  }]);

  return Table;
})(_react2['default'].Component);

exports['default'] = Table;
module.exports = exports['default'];