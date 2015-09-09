import React from 'react';
import identity from 'lodash/utility/identity';
import intlMethods from './intlMethods';

// a decorator to translate t.ReactNode "translatable" props
// translatable meaning: is a string and has the form of a translation key
export default function translateProps(Component) {

  const match = /([A-Z][a-zA-Z]+\.)+[a-zA-Z]+/;
  const hasTranslatableForm = v => typeof v === 'string' && match.exec(v) !== null;

  // optional keyMap fn, see @intlMethods
  return function(keyMap = identity) {

    @intlMethods(keyMap)
    class Wrapper extends React.Component {

      // hasMorpheusForm(v) {
      //   const msgs = this.context.messages;
      //   return hasTranslatableForm(v) && msgs && msgs.morpheus && msgs.morpheus[v.split('.')[0]];
      // }

      maybeTranslateProp(k) {
        const v = keyMap(this.props[k]);

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