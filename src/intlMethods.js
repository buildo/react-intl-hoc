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

export default function intlMethods(Component) {

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
    return ri.formatMessage.apply(this, [ri.getIntlMessage.call(this, key), ...args]);
  };

  return Component;

}
