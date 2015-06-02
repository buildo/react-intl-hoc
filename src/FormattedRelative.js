import React from 'react';
import { IntlComponentWrapper } from './IntlComponentWrapper';
import { FormattedRelative as OriginalFormattedRelative } from 'react-intl';

export class FormattedRelative extends React.Component {

  render() {
    return <IntlComponentWrapper {...this.props} intlComponent={OriginalFormattedRelative} />;
  }

}

