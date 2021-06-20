import React from 'react';
import {render, waitFor} from '@testing-library/react';
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
const sample2 = (
  <TInput
    isNumeric
    name="number"
    label="Test Label"
    content="123456"
    onChangeText={onChange}
  />
);
const sample3 = (
  <TInput
    isNumeric
    name="number"
    regex={/\d\d/}
    content="123456"
    label="Test Label"
    onChangeText={onChange}
  />
);
const sample4 = (
  <TInput name="tags" label="Tags" tags={['tag1']} onChangeText={onChange} />
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

it('number input onChange', async () => {
  const {getByDisplayValue, getByTestId} = render(sample2);
  const inputElement = getByDisplayValue(/123456/i);
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, '1234');
  expect(onChange).toBeCalledWith('1234', expect.anything());
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, 'R');
  await waitFor(() =>
    expect(getByTestId('input-container').className).toContain(
      'failed_regex_focused_input_container'
    )
  );
  user.clear(inputElement);
  user.type(inputElement, '124');
  expect(onChange).toBeCalledWith('124', expect.anything());
});

it('regex check', () => {
  const {getByDisplayValue} = render(sample3);
  const inputElement = getByDisplayValue(/123456/i);
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, '1234');
});

test('renders tags', () => {
  const {getByText} = render(sample4);

  const tag = getByText(/tag1/i);

  const closeTag = tag.querySelector('.anticon-close');

  if (closeTag) {
    user.click(closeTag);
  }
});

it('snapshot Input', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
