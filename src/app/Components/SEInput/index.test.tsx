import SEInput from '.';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import user from '@testing-library/user-event';

const onChange = jest.fn();

const sample = (
  <SEInput
    name="email"
    label="Test Label"
    content="Test Content"
    onChangeText={onChange}
  />
);
const sample2 = (
  <SEInput label="Test Label" content="Test Content" type="password" />
);
const sample3 = (
  <SEInput
    name="email"
    minLines={5}
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

test('renders text area value', () => {
  const {getByDisplayValue} = render(sample3);

  getByDisplayValue(/Test Content/i);
});

test('pass input parameter', () => {
  const {getByDisplayValue} = render(sample);

  const inputElement = getByDisplayValue(/Test Content/i);
  expect(
    inputElement.attributes.getNamedItem('name')?.value === 'email'
  ).toBeTruthy();
});

test('password protection', () => {
  const {getByTestId, getByDisplayValue} = render(sample2);

  const passwordVisibilityButton = getByTestId(/password-visibility/i);

  const input = getByDisplayValue(/Test Content/i);
  expect(input.attributes.getNamedItem('type')?.value).toEqual('password');
  passwordVisibilityButton.click();
  expect(input.attributes.getNamedItem('type')?.value).toEqual('text');
});

it('input onChange', () => {
  const {getByDisplayValue} = render(sample);
  const inputElement = getByDisplayValue(/Test Content/i);
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, 'Test Typing');
  expect(onChange).toBeCalledWith('Test Typing', expect.anything());
});

it('text area onChange', () => {
  const {getByDisplayValue} = render(sample3);
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

it('snapshot TextArea', () => {
  const snapshot = renderer.create(sample3).toJSON();
  expect(snapshot).toMatchSnapshot();
});
