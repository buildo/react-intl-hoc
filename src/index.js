if (typeof window !== 'undefined' && typeof Intl === 'undefined') {
  console.log('react-intl-hoc: Including intl polyfill.. you may want to include this by yourself only when needed');
  const IntlPolyfill = require('intl');
  window.Intl = IntlPolyfill;
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
}

import intl from './intl';
import IntlComponentWrapper from './IntlComponentWrapper';
import FormattedMessage from './FormattedMessage';
import FormattedDate from './FormattedDate';
import FormattedNumber from './FormattedNumber';
import FormattedRelative from './FormattedRelative';
import FormattedTime from './FormattedTime';

export default {
  intl,
  IntlComponentWrapper,
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedRelative,
  FormattedTime
};