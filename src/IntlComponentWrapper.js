import React from 'react';
import { intl } from './intl';
import { getIntlMessage } from 'react-intl';

@intl
export class IntlComponentWrapper extends React.Component {

  render() {
    const {
      message: messageKey,
      intlComponent: IntlComponent,
      ...rest
    } = this.props;

    if (messageKey) {
      const message = getIntlMessage.call(this, messageKey);
      return <IntlComponent message={message} {...rest} />;
    } else {
      return <IntlComponent {...rest} />;
    }
  }

}