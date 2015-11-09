'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var ListCheckbox = function ListCheckbox(props) {
  var className = _style2['default'].item + ' ' + _style2['default']['checkbox-item'];
  if (props.legend) className += ' ' + _style2['default']['with-legend'];
  if (props.disabled) className += ' ' + _style2['default'].disabled;
  if (props.className) className += ' ' + props.className;

  return _react2['default'].createElement(
    'li',
    { className: className },
    _react2['default'].createElement(_checkbox2['default'], {
      checked: props.checked,
      className: _style2['default'].checkbox,
      disabled: props.disabled,
      label: _react2['default'].createElement(_content2['default'], { caption: props.caption, legend: props.legend }),
      name: props.name,
      onBlur: props.onBlur,
      onChange: props.onChange,
      onFocus: props.onFocus
    })
  );
};

ListCheckbox.propTypes = {
  caption: _react2['default'].PropTypes.string.isRequired,
  checked: _react2['default'].PropTypes.bool,
  className: _react2['default'].PropTypes.string,
  disabled: _react2['default'].PropTypes.bool,
  legend: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string,
  onBlur: _react2['default'].PropTypes.func,
  onChange: _react2['default'].PropTypes.func,
  onFocus: _react2['default'].PropTypes.func
};

ListCheckbox.defaultProps = {
  checked: false,
  disabled: false
};

exports['default'] = ListCheckbox;
module.exports = exports['default'];