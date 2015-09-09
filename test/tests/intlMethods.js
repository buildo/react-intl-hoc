import expect from 'expect';
import React from 'react';
import { intlMethods } from '../../src';
import { methods } from '../../src/intlMethods';

class Component extends React.Component {
  render() {
    return <div />;
  }
}

const IntlMethodsComponent = intlMethods()(Component);

describe('intlMethods decorator', () => {

  it('should add intl methods on Component instance', () => {
    const instance = new IntlMethodsComponent();

    methods.forEach(m => {
      expect(instance[m]).toBeA(Function);
    })
  });

});