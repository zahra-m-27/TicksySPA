import TDropDown from './index';
import React from 'react';
import {render} from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import user from '@testing-library/user-event';
import TPagination from './index';

const onChange = jest.fn();

const sample = (
  <TPagination total={100} pageSize={20} pageNumber={2} onChange={onChange} />
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('render items', () => {
  const {getByText} = render(sample);
  getByText(/1/i);
  getByText(/2/i);
  getByText(/3/i);
});

test('on page click', () => {
  const {getByText} = render(sample);
  const item1 = getByText(/1/i);
  user.click(item1);
  expect(onChange).toBeCalledTimes(1);
  expect(onChange).toBeCalledWith(1);

  const item3 = getByText(/3/i);
  user.click(item3);
  expect(onChange).toBeCalledTimes(2);
  expect(onChange).toBeCalledWith(3);
});

test('on arrow click', () => {
  const {getByTestId} = render(sample);
  const previous = getByTestId('previous_page_arrow');
  user.click(previous);
  expect(onChange).toBeCalledTimes(1);
  expect(onChange).toBeCalledWith(1);

  const next = getByTestId('next_page_arrow');
  user.click(next);
  expect(onChange).toBeCalledTimes(2);
  expect(onChange).toBeCalledWith(3);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
