'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var FontIcon = function FontIcon(props) {
  var className = _style2['default'][props.value];
  if (props.className) className += ' ' + props.className;
  return _react2['default'].createElement(
    'span',
    _extends({ 'data-react-toolbox': 'icon' }, props, { className: className }),
    props.children
  );
};

FontIcon.propTypes = {
  className: _react2['default'].PropTypes.string,
  value: _react2['default'].PropTypes.string
};

FontIcon.defaultProps = {
  className: ''
};

exports['default'] = FontIcon;
module.exports = exports['default'];