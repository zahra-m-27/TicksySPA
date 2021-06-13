import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddRoleDialog from './index';

const sample = <AddRoleDialog />;

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render header', () => {
  const {getByText} = render(sample);
  getByText(/افزودن نقش/i);
});

it('render role label', () => {
  const {getByText} = render(sample);
  getByText(/عنوان نقش/i);
});

it('render buttons', () => {
  const {getByText} = render(sample);
  getByText(/نقش جدید/i);
  getByText(/ثبت نقش/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
