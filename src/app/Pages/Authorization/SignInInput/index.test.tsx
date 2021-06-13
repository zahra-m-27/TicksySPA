import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SignInInput from './index';
import {MemoryRouter} from 'react-router-dom';

const sample = (
  <MemoryRouter>
    <SignInInput />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render title', () => {
  const {getByText} = render(sample);
  getByText(/وارد شوید/i);
});

it('render email field', () => {
  const {getAllByText} = render(sample);
  getAllByText(/ايميل/i);
});

it('render password field', () => {
  const {getAllByText} = render(sample);
  getAllByText(/گذرواژه/i);
});

it('render submit button', () => {
  const {getByText} = render(sample);
  getByText(/ورود/i);
});

it('render sign up button', () => {
  const {getByText} = render(sample);
  getByText(/حساب کابری ندارم/i);
});

it('render forgot button', () => {
  const {getByText} = render(sample);
  getByText(/فراموشی گذرواژه/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
