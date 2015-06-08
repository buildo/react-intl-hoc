'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _intl = require('./intl');

var _intl2 = _interopRequireDefault(_intl);

var _IntlComponentWrapper = require('./IntlComponentWrapper');

var _IntlComponentWrapper2 = _interopRequireDefault(_IntlComponentWrapper);

var _FormattedMessage = require('./FormattedMessage');

var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

var _FormattedDate = require('./FormattedDate');

var _FormattedDate2 = _interopRequireDefault(_FormattedDate);

var _FormattedNumber = require('./FormattedNumber');

var _FormattedNumber2 = _interopRequireDefault(_FormattedNumber);

var _FormattedRelative = require('./FormattedRelative');

var _FormattedRelative2 = _interopRequireDefault(_FormattedRelative);

var _FormattedTime = require('./FormattedTime');

var _FormattedTime2 = _interopRequireDefault(_FormattedTime);

if (!window.Intl) {
  console.log('react-intl-hoc: Including intl polyfill.. you may want to include this by yourself only when needed');
  var IntlPolyfill = require('intl');
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
}

exports['default'] = {
  intl: _intl2['default'],
  IntlComponentWrapper: _IntlComponentWrapper2['default'],
  FormattedMessage: _FormattedMessage2['default'],
  FormattedDate: _FormattedDate2['default'],
  FormattedNumber: _FormattedNumber2['default'],
  FormattedRelative: _FormattedRelative2['default'],
  FormattedTime: _FormattedTime2['default']
};
module.exports = exports['default'];