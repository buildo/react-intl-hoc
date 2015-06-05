'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = intl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactIntl = require('react-intl');

function intl(Component) {
  var IntlWrapper = (function (_React$Component) {
    function IntlWrapper() {
      _classCallCheck(this, IntlWrapper);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }
    }

    _inherits(IntlWrapper, _React$Component);

    IntlWrapper.prototype.getChildContext = function getChildContext() {
      return _reactIntl.getChildContext.call(this);
    };

    IntlWrapper.prototype.getProps = function getProps() {
      return _lodash2['default'].extend({}, this.context, this.props);
    };

    IntlWrapper.prototype.render = function render() {
      return _react2['default'].createElement(Component, this.getProps());
    };

    _createClass(IntlWrapper, null, [{
      key: 'contextTypes',
      value: _reactIntl.contextTypes,
      enumerable: true
    }, {
      key: 'childContextTypes',
      value: _reactIntl.childContextTypes,
      enumerable: true
    }]);

    return IntlWrapper;
  })(_react2['default'].Component);

  return IntlWrapper;
}

module.exports = exports['default'];