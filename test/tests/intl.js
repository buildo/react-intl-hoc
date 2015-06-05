import expect from 'expect';
import React from 'react';
import {
  contextTypes,
  childContextTypes
} from 'react-intl';
import { intl } from '../../src';

class Component extends React.Component {
  render() {
    return <div />;
  }
}

const IntlComponent = intl(Component);

describe('intl decorator', () => {

  it('should add intl context statics', () => {
    expect(IntlComponent.contextTypes).toEqual(contextTypes);
    expect(IntlComponent.childContextTypes).toEqual(childContextTypes);
  });

  it('should render the decorated Component', () => {
    const rendered = (new IntlComponent()).render();

    expect(rendered.type.name).toBe('Component');
  });

});