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

    const maybeWarnForOverride = method => {
      if (process.env.NODE_ENV !== 'production') {
        if (Component.prototype[method] && !Component.prototype[method].__mine) {
          console.warn(`Overriding instance method '${method}' for Component '${Component.name}'`); // eslint-disable-line no-console
        }
      }
    };

    Component.contextTypes = {
      ...(Component.contextTypes || {}),
      ...contextTypes
    };

    // all normal intl methods

    methods.forEach(method => {
      if (!Component.prototype[method] || !Component.prototype[method].__mine) {
        maybeWarnForOverride(method);

        Component.prototype[method] = function(...args) {
          return ri[method].call(this, ...args);
        };
        Component.prototype[method].__mine = true;
      }
    });

    // normal `formatMessage`, key transformed by `keyMap`

    if (!Component.prototype.formatMessage || !Component.prototype.formatMessage.__mine) {
      maybeWarnForOverride('formatMessage');

      Component.prototype.formatMessage = function(key, ...args) {
        return ri.formatMessage.apply(this, [ri.getIntlMessage.call(this, keyMap.call(this, key)), ...args]);
      };
      Component.prototype.formatMessage.__mine = true;
    }

    // optional `formatMessageIfItExists`,
    // formats only if `keyExists(keyMap(k)) is true`

    if (!Component.prototype.formatMessageIfItExists || !Component.prototype.formatMessageIfItExists.__mine) {
      maybeWarnForOverride('formatMessageIfItExists');

      Component.prototype.formatMessageIfItExists = function(key, ...args) {
        return keyExists.call(this, keyMap.call(this, key)) ? this.formatMessage.apply(this, [key, ...args]) : key;
      };
      Component.prototype.formatMessageIfItExists.__mine = true;
    }

    return Component;

  };
}
