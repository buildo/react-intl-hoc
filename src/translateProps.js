import React from 'react';
import intlMethods from './intlMethods';

const identity = v => v;

// a decorator to translate t.ReactNode "translatable" props
// translatable meaning: is a string and has the form of a translation key
// optional `keyMap` and `keyExists` fns: see `@intlMethods`
export default function translateProps(keyMap, keyExists) {

  return function(Component) {

    @intlMethods(keyMap, keyExists)
    class Wrapper extends React.Component {

      translatedProps() {
        return Object.keys(this.props).reduce((ac, k) => ({
          ...ac,
          [k]: this.formatMessageIfItExists(k)
        }), {});
      }

      render() {
        return <Component {...this.translatedProps()} />;
      }

    }

    return Wrapper;
  };

}