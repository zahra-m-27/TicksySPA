import SEInput from '.';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {getByText, render, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();
const onSelectFile = jest.fn();
const onRemoveAttachment = jest.fn();

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
const sample4 = (
  <SEInput
    isNumeric
    name="number"
    label="Test Label"
    content="123456"
    onChangeText={onChange}
  />
);
const sample5 = (
  <SEInput
    isNumeric
    name="number"
    label="Test Label"
    content="123456"
    regex={/\d\d/}
    onChangeText={onChange}
  />
);
const sample6 = (
  <SEInput name="tags" label="Tags" tags={['tag1']} onChangeText={onChange} />
);

const sample7 = (
  <SEInput
    name="files"
    label="Files"
    attachments={[
      {
        name: '',
        type: '',
        size: 0,
      } as any,
    ]}
    onRemoveAttachment={onRemoveAttachment}
    onSelectFile={onSelectFile}
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

test('renders tags', () => {
  const {getByText} = render(sample6);

  const tag = getByText(/tag1/i);

  const closeTag = tag.querySelector('.anticon-close');

  if (closeTag) {
    user.click(closeTag);
  }
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

it('number input onChange', async () => {
  const {getByDisplayValue, getByTestId} = render(sample4);
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

it('text area onChange', () => {
  const {getByDisplayValue} = render(sample3);
  const inputElement = getByDisplayValue(/Test Content/i);
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, 'Test Typing');
  expect(onChange).toBeCalledWith('Test Typing', expect.anything());
});

it('regex check', () => {
  const {getByDisplayValue} = render(sample5);
  const inputElement = getByDisplayValue(/123456/i);
  user.clear(inputElement);
  expect(onChange).toBeCalledWith('', expect.anything());
  user.type(inputElement, '1234');
});

test('select file', () => {
  const {getByTestId} = render(sample7);
  const fileInputElement = getByTestId(/file-input/i) as HTMLInputElement;

  const file = new File(['select'], '', {type: 'file'});
  userEvent.upload(fileInputElement, file);

  expect(fileInputElement.files).toBeTruthy();
  if (fileInputElement.files) {
    expect(fileInputElement.files[0]).toStrictEqual(file);
    expect(fileInputElement.files.item(0)).toStrictEqual(file);
  }
  expect(fileInputElement.files).toHaveLength(1);

  expect(onSelectFile).toBeCalledTimes(1);
  expect(onSelectFile).toBeCalledWith(file);

  const removeFileElement = getByTestId(/remove-file/i);
  user.click(removeFileElement);
  expect(onRemoveAttachment).toBeCalledTimes(1);
});

it('snapshot Input', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});

it('snapshot TextArea', () => {
  const snapshot = renderer.create(sample3).toJSON();
  expect(snapshot).toMatchSnapshot();
});
