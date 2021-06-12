import React from 'react';
import {render} from '@testing-library/react';
import TInput from './index';
import ReactDOM from 'react-dom';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

const onChange = jest.fn();

const sample = (
  <TInput
    name="email"
    label="Test Label"
    content="Test Content"
    onChangeText={onChange}
  />
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('renders label', () => {
  const {getByText} = render(sample);

  getByText(/Test Label/i);
});

test('renders input value', () => {
  const {getByDisplayValue} = render(sample);

  getByDisplayValue(/Test Content/i);
});

test('pass input parameter', () => {
  const {getByDisplayValue} = render(sample);

  const inputElement = getByDisplayValue(/Test Content/i);
  expect(
    inputElement.attributes.getNamedItem('name')?.value === 'email'
  ).toBeTruthy();
});

it('input onChange', () => {
  const {getByDisplayValue} = render(sample);
  const inputElement = getByDisplayValue(/Test Content/i);
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, 'Test Typing');
  expect(onChange).toBeCalledWith('Test Typing', expect.anything());
});

it('snapshot Input', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
