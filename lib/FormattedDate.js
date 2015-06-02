'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IntlComponentWrapper = require('./IntlComponentWrapper');

var _IntlComponentWrapper2 = _interopRequireDefault(_IntlComponentWrapper);

var _reactIntl = require('react-intl');

var FormattedDate = (function (_React$Component) {
  function FormattedDate() {
    _classCallCheck(this, FormattedDate);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(FormattedDate, _React$Component);

  FormattedDate.prototype.render = function render() {
    return _react2['default'].createElement(_IntlComponentWrapper2['default'], _extends({}, this.props, { intlComponent: _reactIntl.FormattedDate }));
  };

  return FormattedDate;
})(_react2['default'].Component);

exports['default'] = FormattedDate;
module.exports = exports['default'];