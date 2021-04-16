import SEInput from '.';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

const sample = <SEInput label="Test Label" content="Test Content" />;
const sample2 = (
  <SEInput label="Test Label" content="Test Content" type="password" />
);

test('renders in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('renders label', () => {
  const {getByText} = render(sample);

  const labelElement = getByText(/Test Label/i);
  expect(labelElement).toBeTruthy();
});

test('password protection', () => {
  const {getByTestId, getByDisplayValue} = render(sample2);

  const passwordVisibilityButton = getByTestId(/password-visibility/i);

  const input = getByDisplayValue(/Test Content/i);
  expect(input.attributes.getNamedItem('type')?.value).toEqual('password');
  passwordVisibilityButton.click();
  expect(input.attributes.getNamedItem('type')?.value).toEqual('text');
});
