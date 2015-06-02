import React from 'react';
import { IntlComponentWrapper } from './IntlComponentWrapper';
import { FormattedNumber as OriginalFormattedNumber } from 'react-intl';

export class FormattedNumber extends React.Component {

  render() {
    return <IntlComponentWrapper {...this.props} intlComponent={OriginalFormattedNumber} />;
  }

}
