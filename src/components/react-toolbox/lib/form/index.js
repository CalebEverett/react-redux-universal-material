'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _autocomplete = require('../autocomplete');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _date_picker = require('../date_picker');

var _date_picker2 = _interopRequireDefault(_date_picker);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _radioRadio_group = require('../radio/radio_group');

var _radioRadio_group2 = _interopRequireDefault(_radioRadio_group);

var _slider = require('../slider');

var _slider2 = _interopRequireDefault(_slider);

var _switch = require('../switch');

var _switch2 = _interopRequireDefault(_switch);

var _time_picker = require('../time_picker');

var _time_picker2 = _interopRequireDefault(_time_picker);

var Form = (function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _this = this;

    _classCallCheck(this, Form);

    _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      attributes: this.storage(this.props)
    };

    this.onSubmit = function (event) {
      event.preventDefault();
      if (_this.props.onSubmit) {
        _this.props.onSubmit(event, _this);
      }
    };

    this.onChange = function (event) {
      var is_valid = true;
      var value = _this.getValue();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.state.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var attr = _step.value;

          if (attr.required && value[attr.ref] !== undefined && value[attr.ref].trim() === '') {
            is_valid = false;
            if (_this.refs[attr.ref].setError) _this.refs[attr.ref].setError('Requited field');
            break;
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

      if (_this.props.onChange) _this.props.onChange(event, _this);
      if (_this.props.storage) _this.storage(_this.props, value);

      if (is_valid) {
        if (_this.refs.submit) _this.refs.submit.getDOMNode().removeAttribute('disabled');
        if (_this.props.onValid) _this.props.onValid(event, _this);
      } else {
        if (_this.refs.submit) _this.refs.submit.getDOMNode().setAttribute('disabled', true);
        if (_this.props.onError) _this.props.onError(event, _this);
      }
    };
  }

  _createClass(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next_props) {
      if (next_props.attributes) {
        var attributes = this.storage(next_props);
        this.setState({ attributes: attributes });
        this.setValue(attributes.map(function (item) {
          return item;
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = _style2['default'].root + ' ' + this.props.className;
      var attributes = this.state.attributes.map(function (attribute, index) {
        if (attribute.type === 'autocomplete') {
          return _react2['default'].createElement(_autocomplete2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'submit') {
          return _react2['default'].createElement(_button2['default'], _extends({ key: index }, attribute, { ref: 'submit', onClick: _this2.onSubmit, type: 'square' }));
        } else if (attribute.type === 'checkbox') {
          return _react2['default'].createElement(_checkbox2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'date_picker') {
          return _react2['default'].createElement(_date_picker2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'dropdown') {
          return _react2['default'].createElement(_dropdown2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'radio_group') {
          return _react2['default'].createElement(_radioRadio_group2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'slider') {
          return _react2['default'].createElement(_slider2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'switch') {
          return _react2['default'].createElement(_switch2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else if (attribute.type === 'time_picker') {
          return _react2['default'].createElement(_time_picker2['default'], _extends({ key: index }, attribute, { onChange: _this2.onChange }));
        } else {
          return _react2['default'].createElement(_input2['default'], _extends({ key: index }, attribute));
        }
      });

      return _react2['default'].createElement(
        'form',
        {
          'data-react-toolbox': 'form',
          className: className,
          onChange: this.onChange,
          onSubmit: this.onSubmit
        },
        attributes,
        this.props.children
      );
    }
  }, {
    key: 'storage',
    value: function storage(props, value) {
      var key = 'react-toolbox-form-' + props.storage;
      if (value) {
        var store = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = props.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var attr = _step2.value;

            if (attr.storage) store[attr.ref] = value[attr.ref];
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

        window.localStorage.setItem(key, JSON.stringify(store));
      } else if (props.storage) {
        var store = JSON.parse(window.localStorage.getItem(key) || {});
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = props.attributes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var input = _step3.value;

            if (store && store[input.ref]) {
              input.value = store[input.ref];
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
              _iterator3['return']();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      return props.attributes;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _this3 = this;

      var value = {};
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop = function () {
          var ref = _step4.value;

          var el = _this3.refs[ref];
          if (el.getValue) {
            if (ref.indexOf('.') === -1) {
              value[ref] = el.getValue();
            } else {
              (function () {
                var parent = value;
                var hierarchy = ref.split('.');
                hierarchy.forEach(function (attr, index) {
                  if (index === hierarchy.length - 1) {
                    parent[attr] = el.getValue();
                  } else {
                    parent[attr] = parent[attr] || {};
                    parent = parent[attr];
                  }
                });
              })();
            }
          }
        };

        for (var _iterator4 = Object.keys(this.refs)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4['return']) {
            _iterator4['return']();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return value;
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var field = _step5.value;

          if (this.refs[field.ref].setValue) {
            this.refs[field.ref].setValue(field.value);
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5['return']) {
            _iterator5['return']();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }], [{
    key: 'propTypes',
    value: {
      attributes: _react2['default'].PropTypes.array,
      className: _react2['default'].PropTypes.string,
      onChange: _react2['default'].PropTypes.func,
      onError: _react2['default'].PropTypes.func,
      onSubmit: _react2['default'].PropTypes.func,
      onValid: _react2['default'].PropTypes.func,
      storage: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      attributes: [],
      className: ''
    },
    enumerable: true
  }]);

  return Form;
})(_react2['default'].Component);

exports['default'] = Form;
module.exports = exports['default'];