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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _progress_bar = require('../progress_bar');

var _progress_bar2 = _interopRequireDefault(_progress_bar);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var Slider = (function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    var _this = this;

    _classCallCheck(this, Slider);

    _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      sliderStart: 0,
      sliderLength: 0,
      value: this.props.value
    };

    this.handleInputBlur = function () {
      _this.setState({ value: _this.trimValue(_this.refs.input.getValue()) });
    };

    this.handleKeyDown = function (event) {
      if ([13, 27].indexOf(event.keyCode) !== -1) {
        _this.refs.input.blur();
        _reactDom2['default'].findDOMNode(_this).blur();
      }
      if (event.keyCode === 38) _this.addToValue(_this.props.step);
      if (event.keyCode === 40) _this.addToValue(-_this.props.step);
    };

    this.handleMouseDown = function (event) {
      _utils2['default'].events.addEventsToDocument(_this.getMouseEventMap());
      _this.start(_utils2['default'].events.getMousePosition(event));
      _utils2['default'].events.pauseEvent(event);
    };

    this.handleMouseMove = function (event) {
      _utils2['default'].events.pauseEvent(event);
      _this.move(_utils2['default'].events.getMousePosition(event));
    };

    this.handleMouseUp = function () {
      _this.end(_this.getMouseEventMap());
    };

    this.handleResize = function (event, callback) {
      var _ReactDOM$findDOMNode$getBoundingClientRect = _reactDom2['default'].findDOMNode(_this.refs.progressbar).getBoundingClientRect();

      var left = _ReactDOM$findDOMNode$getBoundingClientRect.left;
      var right = _ReactDOM$findDOMNode$getBoundingClientRect.right;

      var cb = callback || function () {};
      _this.setState({ sliderStart: left, sliderLength: right - left }, cb);
    };

    this.handleSliderBlur = function () {
      _utils2['default'].events.removeEventsFromDocument(_this.getKeyboardEvents());
    };

    this.handleSliderFocus = function () {
      _utils2['default'].events.addEventsToDocument(_this.getKeyboardEvents());
    };

    this.handleTouchEnd = function () {
      _this.end(_this.getTouchEventMap());
    };

    this.handleTouchMove = function (event) {
      _this.move(_utils2['default'].events.getTouchPosition(event));
    };

    this.handleTouchStart = function (event) {
      _this.start(_utils2['default'].events.getTouchPosition(event));
      _utils2['default'].events.addEventsToDocument(_this.getTouchEventMap());
      _utils2['default'].events.pauseEvent(event);
    };
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.value !== this.state.value) {
        if (this.props.onChange) this.props.onChange(this);
        if (this.refs.input) this.refs.input.setValue(this.valueForInput(this.state.value));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'addToValue',
    value: function addToValue(value) {
      this.setState({ value: this.trimValue(this.state.value + value) });
    }
  }, {
    key: 'getKeyboardEvents',
    value: function getKeyboardEvents() {
      return {
        keydown: this.handleKeyDown
      };
    }
  }, {
    key: 'getMouseEventMap',
    value: function getMouseEventMap() {
      return {
        mousemove: this.handleMouseMove,
        mouseup: this.handleMouseUp
      };
    }
  }, {
    key: 'getTouchEventMap',
    value: function getTouchEventMap() {
      return {
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      };
    }
  }, {
    key: 'end',
    value: function end(revents) {
      _utils2['default'].events.removeEventsFromDocument(revents);
      this.setState({ pressed: false });
    }
  }, {
    key: 'knobOffset',
    value: function knobOffset() {
      var _props = this.props;
      var max = _props.max;
      var min = _props.min;

      return this.state.sliderLength * (this.state.value - min) / (max - min);
    }
  }, {
    key: 'move',
    value: function move(position) {
      this.setState({ value: this.positionToValue(position) });
    }
  }, {
    key: 'positionToValue',
    value: function positionToValue(position) {
      var _state = this.state;
      var start = _state.sliderStart;
      var length = _state.sliderLength;
      var _props2 = this.props;
      var max = _props2.max;
      var min = _props2.min;

      return this.trimValue((position.x - start) / length * (max - min) + min);
    }
  }, {
    key: 'start',
    value: function start(position) {
      var _this2 = this;

      this.handleResize(null, function () {
        _this2.setState({ pressed: true, value: _this2.positionToValue(position) });
      });
    }
  }, {
    key: 'stepDecimals',
    value: function stepDecimals() {
      return (this.props.step.toString().split('.')[1] || []).length;
    }
  }, {
    key: 'trimValue',
    value: function trimValue(value) {
      if (value < this.props.min) return this.props.min;
      if (value > this.props.max) return this.props.max;
      return _utils2['default'].round(value, this.stepDecimals());
    }
  }, {
    key: 'valueForInput',
    value: function valueForInput(value) {
      var decimals = this.stepDecimals();
      return decimals > 0 ? value.toFixed(decimals) : value.toString();
    }
  }, {
    key: 'renderSnaps',
    value: function renderSnaps() {
      if (this.props.snaps) {
        return _react2['default'].createElement(
          'div',
          { ref: 'snaps', className: _style2['default'].snaps },
          _utils2['default'].range(0, (this.props.max - this.props.min) / this.props.step).map(function (i) {
            return _react2['default'].createElement('div', { key: 'span-' + i, className: _style2['default'].snap });
          })
        );
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      if (this.props.editable) {
        return _react2['default'].createElement(_input2['default'], {
          ref: 'input',
          className: _style2['default'].input,
          onBlur: this.handleInputBlur,
          value: this.valueForInput(this.state.value) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var knobStyles = _utils2['default'].prefixer({ transform: 'translateX(' + this.knobOffset() + 'px)' });
      var className = this.props.className;
      if (this.props.editable) className += ' ' + _style2['default'].editable;
      if (this.props.pinned) className += ' ' + _style2['default'].pinned;
      if (this.state.pressed) className += ' ' + _style2['default'].pressed;
      if (this.state.value === this.props.min) className += ' ' + _style2['default'].ring;

      return _react2['default'].createElement(
        'div',
        {
          'data-react-toolbox': 'slider',
          className: _style2['default'].root + className,
          tabIndex: '0',
          onBlur: this.handleSliderBlur,
          onFocus: this.handleSliderFocus
        },
        _react2['default'].createElement(
          'div',
          {
            ref: 'slider',
            className: _style2['default'].container,
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          },
          _react2['default'].createElement(
            'div',
            {
              ref: 'knob',
              className: _style2['default'].knob,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart,
              style: knobStyles
            },
            _react2['default'].createElement('div', { className: _style2['default'].innerknob, 'data-value': parseInt(this.state.value) })
          ),
          _react2['default'].createElement(
            'div',
            { className: _style2['default'].progress },
            _react2['default'].createElement(_progress_bar2['default'], {
              ref: 'progressbar',
              className: _style2['default'].innerprogress,
              max: this.props.max,
              min: this.props.min,
              mode: 'determinate',
              value: this.state.value
            }),
            this.renderSnaps()
          )
        ),
        this.renderInput()
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      editable: _react2['default'].PropTypes.bool,
      max: _react2['default'].PropTypes.number,
      min: _react2['default'].PropTypes.number,
      onChange: _react2['default'].PropTypes.func,
      pinned: _react2['default'].PropTypes.bool,
      snaps: _react2['default'].PropTypes.bool,
      step: _react2['default'].PropTypes.number,
      value: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      editable: false,
      max: 100,
      min: 0,
      pinned: false,
      snaps: false,
      step: 0.01,
      value: 0
    },
    enumerable: true
  }]);

  return Slider;
})(_react2['default'].Component);

exports['default'] = Slider;
module.exports = exports['default'];