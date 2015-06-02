import React from 'react';
import IntlComponentWrapper from './IntlComponentWrapper';
import { FormattedDate as OriginalFormattedDate } from 'react-intl';

export default class FormattedDate extends React.Component {

  render() {
    return <IntlComponentWrapper {...this.props} intlComponent={OriginalFormattedDate} />;
  }

}
