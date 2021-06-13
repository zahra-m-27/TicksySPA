import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddUserDialog from './index';

const sample = <AddUserDialog />;

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render header', () => {
  const {getByText} = render(sample);
  getByText(/افزودن کاربر/i);
});

it('render name label', () => {
  const {getByText} = render(sample);
  getByText(/نام و نام خانوادگی/i);
});

it('render email label', () => {
  const {getByText} = render(sample);
  getByText(/ایمیل/i);
});

it('render role label', () => {
  const {getByText} = render(sample);
  getByText(/عنوان نقش/i);
});

it('render buttons', () => {
  const {getByText} = render(sample);
  getByText(/کاربر جدید/i);
  getByText(/ثبت کاربر/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
