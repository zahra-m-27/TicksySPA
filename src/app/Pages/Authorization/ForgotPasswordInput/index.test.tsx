import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ForgotPasswordInput from './index';
import {MemoryRouter} from 'react-router-dom';

const sample = (
  <MemoryRouter>
    <ForgotPasswordInput />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render title', () => {
  const {getByText} = render(sample);
  getByText(/فراموشي گذرواژه/i);
});

it('render email field', () => {
  const {getAllByText} = render(sample);
  getAllByText(/ايميل/i);
});

it('render submit button', () => {
  const {getByText} = render(sample);
  getByText(/ثبت/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
