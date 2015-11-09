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

var _utilsTime = require('../utils/time');

var _utilsTime2 = _interopRequireDefault(_utilsTime);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var CalendarDialog = (function (_React$Component) {
  _inherits(CalendarDialog, _React$Component);

  function CalendarDialog() {
    var _this = this;

    _classCallCheck(this, CalendarDialog);

    _get(Object.getPrototypeOf(CalendarDialog.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      date: this.props.initialDate,
      display: 'months',
      actions: [{ label: 'Cancel', className: _style2['default'].button, onClick: this.onDateCancel.bind(this) }, { label: 'Ok', className: _style2['default'].button, onClick: this.onDateSelected.bind(this) }]
    };

    this.handleCalendarChange = function (date) {
      _this.setState({ date: date, display: 'months' });
    };

    this.displayMonths = function () {
      _this.setState({ display: 'months' });
    };

    this.displayYears = function () {
      _this.setState({ display: 'years' });
    };
  }

  _createClass(CalendarDialog, [{
    key: 'onDateCancel',
    value: function onDateCancel() {
      this.refs.dialog.hide();
    }
  }, {
    key: 'onDateSelected',
    value: function onDateSelected() {
      if (this.props.onDateSelected) this.props.onDateSelected(this.state.date);
      this.refs.dialog.hide();
    }
  }, {
    key: 'show',
    value: function show() {
      this.refs.dialog.show();
    }
  }, {
    key: 'render',
    value: function render() {
      var display = 'display-' + this.state.display;
      var headerClassName = _style2['default'].header + ' ' + _style2['default'][display];

      return _react2['default'].createElement(
        _dialog2['default'],
        { ref: 'dialog', type: 'custom', className: _style2['default'].dialog, actions: this.state.actions },
        _react2['default'].createElement(
          'header',
          { className: headerClassName },
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].weekday },
            _utilsTime2['default'].getFullDayOfWeek(this.state.date.getDay())
          ),
          _react2['default'].createElement(
            'div',
            { onClick: this.displayMonths },
            _react2['default'].createElement(
              'span',
              { className: _style2['default'].month },
              _utilsTime2['default'].getShortMonth(this.state.date)
            ),
            _react2['default'].createElement(
              'span',
              { className: _style2['default'].day },
              this.state.date.getDate()
            )
          ),
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].year, onClick: this.displayYears },
            this.state.date.getFullYear()
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: _style2['default'].wrapper },
          _react2['default'].createElement(_calendar2['default'], {
            ref: 'calendar',
            display: this.state.display,
            onChange: this.handleCalendarChange,
            selectedDate: this.state.date })
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      initialDate: _react2['default'].PropTypes.object,
      onDateSelected: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      initialDate: new Date()
    },
    enumerable: true
  }]);

  return CalendarDialog;
})(_react2['default'].Component);

exports['default'] = CalendarDialog;
module.exports = exports['default'];