import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TInput from './index';
import ReactDOM from 'react-dom';

const sample = <TInput label="Test Label" content="Test Content" />;
test(' ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('TInput', () => {
  const {getByText, getByDisplayValue} = render(sample);
  const labelElement = getByText(/Test Label/i);
  expect(labelElement).toBeTruthy();
  /* const input = getByDisplayValue(/Test Content/i);
  expect(input.attributes.getNamedItem('type')?.value).toEqual('text');*/
});
