'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var intlProps = {
  messages: _tcomb2['default'].Any,
  locales: _tcomb2['default'].Any,
  formats: _tcomb2['default'].Any
};

exports['default'] = intlProps;
module.exports = exports['default'];