'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var App = function App(props) {
  var className = _style2['default'].root;
  if (props.className) {
    className += ' ' + props.className;
  }

  return _react2['default'].createElement(
    'div',
    { className: className, 'data-react-toolbox': 'app' },
    props.children
  );
};

App.propTypes = {
  className: _react2['default'].PropTypes.string
};

App.defaultProps = {
  className: ''
};

exports['default'] = App;
module.exports = exports['default'];