import expect from 'expect';
import * as exportz from '../../src';

const shouldExportValue = [
  'contextTypes', 'childContextTypes'
];
const expectExportValue = k => () => {
  expect(exportz[k]).to;
};

const shouldExportFunction = [
  'intl', 'intlMethods', 'translateProps', 'keyMapFM', 'getChildContext'
];
const expectExportFunction = k => () => {
  expect(exportz[k]).toBeA(Function);
};

const shouldExportComponent = [
  'FormattedMessage', 'FormattedDate', 'FormattedNumber', 'FormattedRelative', 'FormattedTime'
];
const expectExportComponent = k => () => {
  expect(exportz[k] && exportz[k].name).toBe(k);
};

describe('index.js', () => {

  shouldExportValue.forEach(ex => it(`should export ${ex}`,
    expectExportValue(ex)
  ));

  shouldExportFunction.forEach(ex => it(`should export ${ex}`,
    expectExportFunction(ex)
  ));

  shouldExportComponent.forEach(ex => it(`should export ${ex}`,
    expectExportComponent(ex)
  ));

});
