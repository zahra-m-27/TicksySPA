import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import SignUpInput from './index';

const sample = (
  <MemoryRouter>
    <SignUpInput />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render title', () => {
  const {getByText} = render(sample);
  getByText(/ثبت نام کنید/i);
});

it('render first name field', () => {
  const {getAllByText} = render(sample);
  getAllByText(/نام/i);
});

it('render last name field', () => {
  const {getByText} = render(sample);
  getByText(/نام خانوادگی/i);
});

it('render email field', () => {
  const {getByText} = render(sample);
  getByText(/ايميل/i);
});

it('render personnel id field', () => {
  const {getByText} = render(sample);
  getByText(/شماره دانشجویی/i);
});

it('render password field', () => {
  const {getByText} = render(sample);
  getByText(/گذرواژه/i);
});

it('render submit button', () => {
  const {getAllByText} = render(sample);
  getAllByText(/ثبت نام/i);
});

it('render sign up button', () => {
  const {getByText} = render(sample);
  getByText(/حساب کابری دارم/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
