import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ChangePasswordInput from './index';
import {MemoryRouter} from 'react-router-dom';

const sample = (
  <MemoryRouter>
    <ChangePasswordInput />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render title', () => {
  const {getByText} = render(sample);
  getByText(/تغيير رمز عبور/i);
});

it('render password field', () => {
  const {getAllByText} = render(sample);
  getAllByText(/گذرواژه/i);
});

it('render repeat password field', () => {
  const {getByText} = render(sample);
  getByText(/تاييد گذرواژه/i);
});

it('render submit button', () => {
  const {getByText} = render(sample);
  getByText(/ثبت/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
