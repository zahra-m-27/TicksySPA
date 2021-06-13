import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TSelectFile from './index';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import user from '@testing-library/user-event';

const onSelectFile = jest.fn();
const onRemoveAttachment = jest.fn();

const sample = (
  <TSelectFile
    onSelectFile={onSelectFile}
    onRemoveAttachment={onRemoveAttachment}
  />
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('select file', () => {
  const {getByTestId} = render(sample);
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
});

test('remove file', () => {
  const {getByTestId} = render(sample);
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

  expect(fileInputElement.files).toBeFalsy();
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
