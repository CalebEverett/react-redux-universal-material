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

var Head = (function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head() {
    var _this = this;

    _classCallCheck(this, Head);

    _get(Object.getPrototypeOf(Head.prototype), 'constructor', this).apply(this, arguments);

    this.handleSelectChange = function (event) {
      _this.props.onSelect(event);
    };
  }

  _createClass(Head, [{
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
      return _react2['default'].createElement(
        'thead',
        { 'data-react-toolbox-table': 'head', className: this.props.className },
        _react2['default'].createElement(
          'tr',
          null,
          this.renderCellSelectable(),
          Object.keys(this.props.model).map(function (key) {
            return _react2['default'].createElement(
              'th',
              { key: key },
              key
            );
          })
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      model: _react2['default'].PropTypes.object,
      onSelect: _react2['default'].PropTypes.func,
      selected: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      className: '',
      model: {},
      selected: false
    },
    enumerable: true
  }]);

  return Head;
})(_react2['default'].Component);

exports['default'] = Head;
module.exports = exports['default'];