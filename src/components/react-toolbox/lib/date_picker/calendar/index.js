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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _animations = require('../../animations');

var _font_icon = require('../../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _ripple = require('../../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _month = require('./month');

var _month2 = _interopRequireDefault(_month);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var Calendar = (function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _this = this;

    _classCallCheck(this, Calendar);

    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      selectedDate: this.props.selectedDate,
      viewDate: this.props.selectedDate
    };

    this.handleDayClick = function (day) {
      var newDate = _utils2['default'].time.setDay(_this.state.viewDate, day);
      _this.setState({ selectedDate: newDate });
      if (_this.props.onChange) _this.props.onChange(newDate);
    };

    this.handleYearClick = function (year) {
      var newDate = _utils2['default'].time.setYear(_this.state.selectedDate, year);
      _this.setState({ selectedDate: newDate, viewDate: newDate });
      if (_this.props.onChange) _this.props.onChange(newDate);
    };

    this.incrementViewMonth = function () {
      _this.refs.rippleRight.start(event);
      _this.setState({
        direction: 'right',
        viewDate: _utils2['default'].time.addMonths(_this.state.viewDate, 1)
      });
    };

    this.decrementViewMonth = function () {
      _this.refs.rippleLeft.start(event);
      _this.setState({
        direction: 'left',
        viewDate: _utils2['default'].time.addMonths(_this.state.viewDate, -1)
      });
    };
  }

  _createClass(Calendar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.refs.activeYear) {
        this.scrollToActive();
      }
    }
  }, {
    key: 'scrollToActive',
    value: function scrollToActive() {
      this.refs.years.scrollTop = this.refs.activeYear.offsetTop - this.refs.years.offsetHeight / 2 + this.refs.activeYear.offsetHeight / 2;
    }
  }, {
    key: 'renderYear',
    value: function renderYear(year) {
      var props = {
        className: year === this.state.viewDate.getFullYear() ? _style2['default'].active : '',
        key: year,
        onClick: this.handleYearClick.bind(this, year)
      };

      if (year === this.state.viewDate.getFullYear()) {
        props.ref = 'activeYear';
      }

      return _react2['default'].createElement(
        'li',
        props,
        year
      );
    }
  }, {
    key: 'renderYears',
    value: function renderYears() {
      var _this2 = this;

      return _react2['default'].createElement(
        'ul',
        { ref: 'years', className: _style2['default'].years },
        _utils2['default'].range(1900, 2100).map(function (i) {
          return _this2.renderYear(i);
        })
      );
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var animation = this.state.direction === 'left' ? _animations.SlideLeft : _animations.SlideRight;
      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'calendar' },
        _react2['default'].createElement(
          _font_icon2['default'],
          { className: _style2['default'].prev, value: 'chevron-left', onMouseDown: this.decrementViewMonth },
          _react2['default'].createElement(_ripple2['default'], { ref: 'rippleLeft', className: _style2['default'].ripple, spread: 1.2, centered: true })
        ),
        _react2['default'].createElement(
          _font_icon2['default'],
          { className: _style2['default'].next, value: 'chevron-right', onMouseDown: this.incrementViewMonth },
          _react2['default'].createElement(_ripple2['default'], { ref: 'rippleRight', className: _style2['default'].ripple, spread: 1.2, centered: true })
        ),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: animation, transitionEnterTimeout: 350, transitionLeaveTimeout: 350 },
          _react2['default'].createElement(_month2['default'], {
            key: this.state.viewDate.getMonth(),
            viewDate: this.state.viewDate,
            selectedDate: this.state.selectedDate,
            onDayClick: this.handleDayClick })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _style2['default'].root },
        this.props.display === 'months' ? this.renderMonths() : this.renderYears()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      display: _react2['default'].PropTypes.oneOf(['months', 'years']),
      onChange: _react2['default'].PropTypes.func,
      selectedDate: _react2['default'].PropTypes.object,
      viewDate: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      display: 'months',
      selectedDate: new Date()
    },
    enumerable: true
  }]);

  return Calendar;
})(_react2['default'].Component);

exports['default'] = Calendar;
module.exports = exports['default'];