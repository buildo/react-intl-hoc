import React from 'react';
import IntlComponentWrapper from './IntlComponentWrapper';
import { FormattedTime as OriginalFormattedTime } from 'react-intl';

export default class FormattedTime extends React.Component {

  render() {
    return <IntlComponentWrapper {...this.props} intlComponent={OriginalFormattedTime} />;
  }

}
