import React from 'react';
import FormattedMessage from './FormattedMessage';
import intlMethods from './intlMethods';

// factory to create custom `FormattedMessage` components
// `custom` means: using a custom `keyMap`, see @intlMethods for more
export default function keyMapFM(keyMap) {

  if (process.env.NODE_ENV === 'development') {
    if (typeof keyMap !== 'function') {
      throw new Error('`keyMapFM` expects a function');
    }
  }

  @intlMethods(keyMap)
  class KMFormattedMessage extends React.Component {

    render() {
      const { message: m, ...moreProps } = this.props;

      return <FormattedMessage {...{ message: keyMap.call(this, m), ...moreProps }} />;
    }

  }

  return KMFormattedMessage;
}
