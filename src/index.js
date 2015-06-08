if (window.Intl) {
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
} else {
  throw new Error('no intl found');
}