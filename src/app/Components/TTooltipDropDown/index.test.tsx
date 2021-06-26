import React from 'react';
import {render} from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import user from '@testing-library/user-event';
import TTooltipDropDown from './index';

const onSelect = jest.fn();

const sample = (
  <TTooltipDropDown
    onSelect={onSelect}
    items={[
      {
        value: 'val1',
        label: 'تست1',
      },
      {
        value: 'val2',
        label: 'تست2',
      },
      {
        value: 'val3',
        label: 'تست3',
      },
    ]}>
    <div></div>
  </TTooltipDropDown>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('render items', () => {
  const {getByText} = render(sample);
  getByText(/تست1/i);
  getByText(/تست2/i);
  getByText(/تست3/i);
});

test('onSelect drop down', () => {
  const {getByText} = render(sample);
  const item1 = getByText(/تست1/i);
  user.click(item1);
  expect(onSelect).toBeCalledTimes(1);
  expect(onSelect).toBeCalledWith('val1');
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
