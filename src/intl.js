import React from 'react';
import {
  contextTypes,
  childContextTypes,
  getChildContext
} from 'react-intl';

export default function intl(Component) {

  class IntlWrapper extends React.Component {

    static contextTypes = contextTypes;

    static childContextTypes = childContextTypes;

    getChildContext() {
      return getChildContext.call(this);
    }

    getProps() {
      return {
        ...this.context,
        ...this.props
      };
    }

    render() {
      return <Component {...this.getProps()} />;
    }

  }

  return IntlWrapper;

}
