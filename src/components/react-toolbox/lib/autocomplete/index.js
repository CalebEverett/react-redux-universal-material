'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var Autocomplete = (function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete() {
    var _this = this;

    _classCallCheck(this, Autocomplete);

    _get(Object.getPrototypeOf(Autocomplete.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      dataSource: this._indexDataSource(this.props.dataSource),
      focus: false,
      query: '',
      up: false,
      values: new Map(),
      width: undefined
    };

    this.handleKeyPress = function (event) {
      if (event.which === 13 && _this.state.active) {
        _this._selectOption(_this.state.active);
      }

      if ([40, 38].indexOf(event.which) !== -1) {
        var suggestionsKeys = [].concat(_toConsumableArray(_this._getSuggestions().keys()));
        var index = suggestionsKeys.indexOf(_this.state.active) + (event.which === 40 ? +1 : -1);
        if (index < 0) index = suggestionsKeys.length - 1;
        if (index >= suggestionsKeys.length) index = 0;
        _this.setState({ active: suggestionsKeys[index] });
      }
    };

    this.handleBlur = function () {
      if (_this.state.focus) _this.setState({ focus: false });
    };

    this.handleFocus = function () {
      var client = _reactDom2['default'].findDOMNode(_this.refs.input).getBoundingClientRect();
      var screen_height = window.innerHeight || document.documentElement.offsetHeight;
      var up = _this.props.auto ? client.top > screen_height / 2 + client.height : false;

      _this.refs.suggestions.scrollTop = 0;
      _this.setState({ active: '', up: up, focus: true });
    };

    this.handleHover = function (event) {
      _this.setState({ active: event.target.getAttribute('id') });
    };

    this.handleQueryChange = function () {
      var query = _this.refs.input.getValue();
      if (_this.state.query !== query) {
        _this.setState({ query: query });
      }
    };

    this.handleSelect = function (event) {
      _utils2['default'].events.pauseEvent(event);
      _this._selectOption(event.target.getAttribute('id'));
    };

    this.handleUnselect = function (event) {
      _this._unselectOption(event.target.getAttribute('id'));
    };
  }

  _createClass(Autocomplete, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.value) this.setValue(this.props.value);
      this.setState({
        width: _reactDom2['default'].findDOMNode(this).getBoundingClientRect().width
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.dataSource) {
        this.setState({ dataSource: this._indexDataSource(props.dataSource) });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props, state) {
      this.refs.input.setValue(state.query);
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      if (this.props.label) {
        return _react2['default'].createElement(
          'label',
          { 'data-role': 'label', className: _style2['default'].label },
          this.props.label
        );
      }
    }
  }, {
    key: 'renderSelected',
    value: function renderSelected() {
      if (this.props.multiple) {
        return _react2['default'].createElement(
          'ul',
          { className: _style2['default'].values, 'data-role': 'selections', onClick: this.handleUnselect },
          [].concat(_toConsumableArray(this.state.values)).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            return _react2['default'].createElement(
              'li',
              { key: key, id: key, 'data-role': 'selection', className: _style2['default'].value },
              value
            );
          })
        );
      }
    }
  }, {
    key: 'renderSuggestions',
    value: function renderSuggestions() {
      var _this2 = this;

      return [].concat(_toConsumableArray(this._getSuggestions())).map(function (_ref3) {
        var _ref32 = _slicedToArray(_ref3, 2);

        var key = _ref32[0];
        var value = _ref32[1];

        var className = _style2['default'].suggestion;
        if (_this2.state.active === key) className += ' ' + _style2['default'].active;
        return _react2['default'].createElement(
          'li',
          { id: key, key: key, 'data-role': 'suggestion', className: className },
          value
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2['default'].root;
      if (this.props.className) className += ' ' + this.props.className;
      if (this.state.focus) className += ' ' + _style2['default'].focus;

      var suggestionsClassName = _style2['default'].suggestions;
      if (this.state.up) suggestionsClassName += ' ' + _style2['default'].up;
      var suggestionsStyle = { width: this.state.width };

      return _react2['default'].createElement(
        'div',
        { 'data-react-toolbox': 'autocomplete', className: className },
        this.renderLabel(),
        this.renderSelected(),
        _react2['default'].createElement(_input2['default'], _extends({
          'data-role': 'input'
        }, this.props, {
          ref: 'input',
          className: _style2['default'].input,
          label: '',
          onBlur: this.handleBlur,
          onChange: this.handleQueryChange,
          onFocus: this.handleFocus,
          onKeyUp: this.handleKeyPress,
          value: ''
        })),
        _react2['default'].createElement(
          'ul',
          {
            ref: 'suggestions',
            'data-role': 'suggestions',
            className: suggestionsClassName,
            onMouseDown: this.handleSelect,
            onMouseOver: this.handleHover,
            style: suggestionsStyle
          },
          this.renderSuggestions()
        )
      );
    }
  }, {
    key: '_getSuggestions',
    value: function _getSuggestions() {
      var query = this.state.query.toLowerCase().trim() || '';
      var suggestions = new Map();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.dataSource[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2);

          var key = _step$value[0];
          var value = _step$value[1];

          if (!this.state.values.has(key) && value.toLowerCase().trim().startsWith(query)) {
            suggestions.set(key, value);
          }
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

      return suggestions;
    }
  }, {
    key: '_indexDataSource',
    value: function _indexDataSource() {
      var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (data.length) {
        return new Map(data.map(function (item) {
          return [item, item];
        }));
      } else {
        return new Map(Object.keys(data).map(function (key) {
          return [key, data[key]];
        }));
      }
    }
  }, {
    key: '_selectOption',
    value: function _selectOption(key) {
      var _this3 = this;

      var dataSource = this.state.dataSource;
      var values = this.state.values;

      var query = !this.props.multiple ? dataSource.get(key) : '';
      values = new Map(values);

      if (!this.props.multiple) values.clear();
      values.set(key, dataSource.get(key));

      this.setState({ focus: false, query: query, values: values }, function () {
        _this3.refs.input.blur();
        if (_this3.props.onChange) _this3.props.onChange(_this3);
      });
    }
  }, {
    key: '_unselectOption',
    value: function _unselectOption(key) {
      var _this4 = this;

      if (key) {
        var values = new Map(this.state.values);
        values['delete'](key);
        this.setState({ focus: false, values: values }, function () {
          if (_this4.props.onChange) _this4.props.onChange(_this4);
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var values = [].concat(_toConsumableArray(this.state.values.keys()));
      return this.props.multiple ? values : values.length > 0 ? values[0] : null;
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      var dataParam = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      var values = new Map();
      var data = typeof dataParam === 'string' ? [dataParam] : dataParam;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.state.dataSource[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2);

          var key = _step2$value[0];
          var value = _step2$value[1];

          if (data.indexOf(key) !== -1) values.set(key, value);
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

      this.setState({ values: values, query: this.props.multiple ? '' : values.get(data[0]) });
    }
  }], [{
    key: 'propTypes',
    value: {
      auto: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      dataSource: _react2['default'].PropTypes.any,
      disabled: _react2['default'].PropTypes.bool,
      error: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.string,
      multiple: _react2['default'].PropTypes.bool,
      onChange: _react2['default'].PropTypes.func,
      required: _react2['default'].PropTypes.bool,
      value: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      auto: true,
      className: '',
      dataSource: {},
      multiple: true
    },
    enumerable: true
  }]);

  return Autocomplete;
})(_react2['default'].Component);

exports['default'] = Autocomplete;
module.exports = exports['default'];