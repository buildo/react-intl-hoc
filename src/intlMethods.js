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

const identity = v => v;

// optional keyMap fn
// When provided, it should map translation keys for Messages to custom translation keys
// it is executed with Component instance as context
// (you can access `this.props`, `this.context` or whatever)
export default function intlMethods(keyMap = identity) {
  return function(Component) {

    Component.contextTypes = {
      ...(Component.contextTypes || {}),
      ...contextTypes
    };

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

    if (process.env.NODE_ENV !== 'production') {
      if (Component.prototype.formatMessage) {
        console.warn(`Overriding instance method 'formatMessage' for Component '${Component.name}'`);
      }
    }

    Component.prototype.formatMessage = function(key, ...args) {
      return ri.formatMessage.apply(this, [ri.getIntlMessage.call(this, keyMap.call(this, key)), ...args]);
    };

    return Component;

  };
}
