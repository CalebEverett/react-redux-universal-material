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

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var Link = function Link(props) {
  var className = _style2['default'].root;
  if (props.className) className += ' ' + props.className;

  return _react2['default'].createElement(
    'a',
    _extends({}, props, {
      'data-react-toolbox': 'link',
      className: className
    }),
    props.icon ? _react2['default'].createElement(_font_icon2['default'], { className: _style2['default'].icon, value: props.icon }) : null,
    props.label ? _react2['default'].createElement(
      'abbr',
      null,
      props.label
    ) : null,
    props.count && parseInt(props.count) !== 0 ? _react2['default'].createElement(
      'small',
      null,
      props.count
    ) : null
  );
};

Link.propTypes = {
  className: _react2['default'].PropTypes.string,
  count: _react2['default'].PropTypes.number,
  icon: _react2['default'].PropTypes.string,
  label: _react2['default'].PropTypes.string
};

Link.defaultProps = {
  className: ''
};

exports['default'] = Link;
module.exports = exports['default'];