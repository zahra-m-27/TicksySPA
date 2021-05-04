import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TTextArea from './index';

const sample = (
  <TTextArea
    content="Text area"
    placeholder="Text area"
    onChange={() => 'some text'}
  />
);
test('TTextArea', () => {
  const {getByText, getByTestId, getByLabelText} = render(sample);
  const input = getByLabelText('some text');
  input.value = 'Text area';
  fireEvent.change(input);
  fireEvent.click(getByText('Text area'));
  expect(getByTestId('Text area')).toHaveTextContent('Text area');
});
