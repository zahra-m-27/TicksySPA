import TDropDown from './index';
import React from 'react';
import {render} from '@testing-library/react';

const sample = (
  <TDropDown
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
    ]}
  />
);
test('TDrop', () => {
  const {getByText} = render(sample);
  getByText(/تست1/i);
  getByText(/تست2/i);
  getByText(/تست3/i);
});
