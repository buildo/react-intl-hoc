import React from 'react';
import FormattedMessage from './FormattedMessage';

// factory to create custom `FormattedMessage` components
// `custom` meaning: using a custom `keyMap`, see also @intlMethods
export default function keyMapFM(keyMap) {
  return class KMFormattedMessage extends React.Component {

    render() {
      const { message: m, ...moreProps } = this.props;

      return (
        <FormattedMessage {...{
          message: keyMap(m),
          ...moreProps
        }} />
      );
    }

  };
}
