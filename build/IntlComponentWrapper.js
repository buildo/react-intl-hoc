'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intl = require('./intl');

var _intl2 = _interopRequireDefault(_intl);

var _reactIntl = require('react-intl');

var IntlComponentWrapper = (function (_React$Component) {
  function IntlComponentWrapper() {
    _classCallCheck(this, _IntlComponentWrapper);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(IntlComponentWrapper, _React$Component);

  var _IntlComponentWrapper = IntlComponentWrapper;

  _IntlComponentWrapper.prototype.render = function render() {
    var _props = this.props;
    var messageKey = _props.message;
    var IntlComponent = _props.intlComponent;

    var rest = _objectWithoutProperties(_props, ['message', 'intlComponent']);

    if (messageKey) {
      var message = _reactIntl.getIntlMessage.call(this, messageKey);
      return _react2['default'].createElement(IntlComponent, _extends({ message: message }, rest));
    } else {
      return _react2['default'].createElement(IntlComponent, rest);
    }
  };

  IntlComponentWrapper = (0, _intl2['default'])(IntlComponentWrapper) || IntlComponentWrapper;
  return IntlComponentWrapper;
})(_react2['default'].Component);

exports['default'] = IntlComponentWrapper;
module.exports = exports['default'];