import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Profile from './index';

const sample = (
  <MemoryRouter>
    <Profile />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render header', () => {
  const {getByText} = render(sample);
  getByText(/پروفايل/i);
});

it('render name field', () => {
  const {getByText} = render(sample);
  getByText(/نام و خانوادگي/i);
});

it('render email field', () => {
  const {getByText} = render(sample);
  getByText(/ايميل/i);
});

it('render personal identifier', () => {
  const {getByText} = render(sample);
  getByText(/شماره دانشجویی/i);
});

it('render register date field', () => {
  const {getByText} = render(sample);
  getByText(/تاريخ ثبت نام/i);
});

it('render verification button', () => {
  const {getByText} = render(sample);
  getByText(/احراز هویت/i);
});

it('render submit', () => {
  const {getByText} = render(sample);
  getByText(/تغییر/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
