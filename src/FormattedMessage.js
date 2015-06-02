import React from 'react';
import IntlComponentWrapper from './IntlComponentWrapper';
import { FormattedMessage as OriginalFormattedMessage } from 'react-intl';

export default class FormattedMessage extends React.Component {

  render() {
    return <IntlComponentWrapper {...this.props} intlComponent={OriginalFormattedMessage} />;
  }

}
