import React from 'react';
import identity from 'lodash/utility/identity';
import intlMethods from './intlMethods';

// a decorator to translate t.ReactNode "translatable" props
// translatable meaning: is a string and has the form of a translation key
// optional `keyMap` fn: see `@intlMethods`
export default function translateProps(keyMap = identity) {

  const match = /([A-Z][a-zA-Z]+\.)+[a-zA-Z]+/;
  const hasTranslatableForm = v => typeof v === 'string' && match.exec(v) !== null;

  return function(Component) {

    @intlMethods(keyMap)
    class Wrapper extends React.Component {

      maybeTranslateProp(k) {
        const v = keyMap.call(this, this.props[k]);

        return hasTranslatableForm(v) ? this.formatMessage(v) : v;
      }

      translatedProps() {
        return Object.keys(this.props).reduce((ac, k) => ({
          ...ac,
          [k]: this.maybeTranslateProp(k)
        }), {});
      }

      render() {
        return <Component {...this.translatedProps()} />;
      }

    }

    return Wrapper;
  };

}