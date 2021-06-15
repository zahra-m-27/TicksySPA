import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import EditTopic from './index';

const sample = (
  <MemoryRouter>
    <EditTopic />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render member header', () => {
  const {getByText} = render(sample);
  getByText(/اعضا/i);
});

it('render detail header', () => {
  const {getByText} = render(sample);
  getByText(/ویرایش تاپيک/i);
});

it('render add member', () => {
  const {getByText} = render(sample);
  getByText(/افزودن عضو/i);
});

it('render subject', () => {
  const {getByText} = render(sample);
  getByText(/عنوان/i);
});

it('render username', () => {
  const {getByText} = render(sample);
  getByText(/شناسه/i);
});

it('render description', () => {
  const {getByText} = render(sample);
  getByText(/توضيح/i);
});

it('render submit', () => {
  const {getByText} = render(sample);
  getByText(/ثبت/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
