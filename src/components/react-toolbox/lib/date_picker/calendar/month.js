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

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Month = (function (_React$Component) {
  _inherits(Month, _React$Component);

  function Month() {
    var _this = this;

    _classCallCheck(this, Month);

    _get(Object.getPrototypeOf(Month.prototype), 'constructor', this).apply(this, arguments);

    this.handleDayClick = function (day) {
      if (_this.props.onDayClick) _this.props.onDayClick(day);
    };
  }

  _createClass(Month, [{
    key: 'renderWeeks',
    value: function renderWeeks() {
      return _utils2['default'].range(0, 7).map(function (i) {
        return _react2['default'].createElement(
          'span',
          { key: i },
          _utils2['default'].time.getFullDayOfWeek(i).charAt(0)
        );
      });
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _this2 = this;

      return _utils2['default'].range(1, _utils2['default'].time.getDaysInMonth(this.props.viewDate) + 1).map(function (i) {
        return _react2['default'].createElement(_day2['default'], {
          key: i,
          day: i,
          onClick: _this2.handleDayClick.bind(_this2, i),
          selectedDate: _this2.props.selectedDate,
          viewDate: _this2.props.viewDate
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _style2['default'].month },
        _react2['default'].createElement(
          'span',
          { className: _style2['default'].title },
          _utils2['default'].time.getFullMonth(this.props.viewDate),
          ' ',
          this.props.viewDate.getFullYear()
        ),
        _react2['default'].createElement(
          'div',
          { className: _style2['default'].week },
          this.renderWeeks()
        ),
        _react2['default'].createElement(
          'div',
          { className: _style2['default'].days },
          this.renderDays()
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      onDayClick: _react2['default'].PropTypes.func,
      selectedDate: _react2['default'].PropTypes.object,
      viewDate: _react2['default'].PropTypes.object
    },
    enumerable: true
  }]);

  return Month;
})(_react2['default'].Component);

exports['default'] = Month;
module.exports = exports['default'];