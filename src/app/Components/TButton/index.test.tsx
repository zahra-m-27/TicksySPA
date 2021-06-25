import ReactDOM from 'react-dom';
import React from 'react';
import TButton from '.';
import {render} from '@testing-library/react';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

const onClick = jest.fn();

const sample = (
  <TButton label="Test Label" onClick={onClick} backgroundColor="#232323" />
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render label', () => {
  const {getByText} = render(sample);
  getByText(/Test Label/i);
});

it('render background', () => {
  const {getByText} = render(sample);
  const labelElement = getByText(/Test Label/i);
  expect(
    labelElement.parentElement?.style.backgroundColor === 'rgb(35, 35, 35)'
  ).toBeTruthy();
});

it('button click', () => {
  const {getByText} = render(sample);
  const buttonElement = getByText(/Test Label/i);
  expect(onClick).toBeCalledTimes(0);
  user.click(buttonElement);
  expect(onClick).toBeCalledWith(expect.anything());
  expect(onClick).toBeCalledTimes(1);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
