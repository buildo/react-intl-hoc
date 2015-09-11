import ri, { contextTypes } from 'react-intl';

export const methods = [
  'formatDate',
  'formatNumber',
  'formatRelative',
  'formatTime',
  'getMessageFormat',
  // "private methods":
  '_format', 'getDateTimeFormat', 'getMessageFormat', 'getNamedFormat', 'getNumberFormat', 'getRelativeFormat'
];

export default function intlMethods(
  // optional keyMap fn
  // When provided, it should map translation keys for Messages to custom translation keys
  // it is executed with Component instance as context
  // (you can access `this.props`, `this.context` or whatever)
  keyMap = v => v,
  // used by `formatMessageIfItExists`
  // should return true if message key exists
  // it is executed with Component instance as context
  // (you can access `this.props`, `this.context` or whatever)
  // key in input is already `keyMap`ped
  keyExists = () => false
) {
  return function(Component) {

    Component.contextTypes = {
      ...(Component.contextTypes || {}),
      ...contextTypes
    };

    // all normal intl methods

    methods.forEach(method => {
      if (process.env.NODE_ENV !== 'production') {
        if (Component.prototype[method]) {
          console.warn(`Overriding instance method '${method}' for Component '${Component.name}'`);
        }
      }

      Component.prototype[method] = function(...args) {
        return ri[method].call(this, ...args);
      };
    });

    // normal `formatMessage`, key transformed by `keyMap`

    if (process.env.NODE_ENV !== 'production') {
      if (Component.prototype.formatMessage) {
        console.warn(`Overriding instance method 'formatMessage' for Component '${Component.name}'`);
      }
    }

    Component.prototype.formatMessage = function(key, ...args) {
      return ri.formatMessage.apply(this, [ri.getIntlMessage.call(this, keyMap.call(this, key)), ...args]);
    };

    // optional `formatMessageIfItExists`,
    // formats only if `keyExists(keyMap(k)) is true`

    if (process.env.NODE_ENV !== 'production') {
      if (Component.prototype.formatMessageIfItExists) {
        console.warn(`Overriding instance method 'formatMessageIfItExists' for Component '${Component.name}'`);
      }
    }

    Component.prototype.formatMessageIfItExists = function(key, ...args) {
      return keyExists.call(this, keyMap.call(this, key)) ? this.formatMessage.apply(this, [key, ...args]) : key;
    };

    return Component;

  };
}
