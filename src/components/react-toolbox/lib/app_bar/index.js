'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var AppBar = function AppBar(props) {
  var className = _style2['default'].root;
  if (props.className) className += ' ' + props.className;
  if (props.fixed) className += ' ' + _style2['default'].fixed;
  if (props.flat) className += ' ' + _style2['default'].flat;

  return _react2['default'].createElement(
    'header',
    { className: className, 'data-react-toolbox': 'app-bar' },
    props.children
  );
};

AppBar.propTypes = {
  className: _react2['default'].PropTypes.string,
  fixed: _react2['default'].PropTypes.bool,
  flat: _react2['default'].PropTypes.bool
};

AppBar.defaultProps = {
  className: '',
  fixed: false,
  flat: false
};

exports['default'] = AppBar;
module.exports = exports['default'];