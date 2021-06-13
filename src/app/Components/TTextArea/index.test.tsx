import React from 'react';
import {render} from '@testing-library/react';
import TTextArea from './index';
import ReactDOM from 'react-dom';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

const onChange = jest.fn();

const sample = (
  <TTextArea
    content="Test Content"
    placeholder="Test placeholder"
    onChange={onChange}
  />
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

// test('render content', () => {
//   const {getByText} = render(sample);
//   getByText('Test Content');
// });

// test('change text', () => {
//   const {getByText} = render(sample);
//   const inputElement = getByText('Test Content') as HTMLTextAreaElement;
//
//   user.clear(inputElement);
//   expect(inputElement.value).toEqual('');
//   user.type(inputElement, 'Test Typing');
//   expect(inputElement.value).toEqual('Test Typing');
// });
