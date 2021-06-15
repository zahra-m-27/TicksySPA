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

it('render university', () => {
  const {getByText} = render(sample);
  getByText(/دانشگاه خوارزمی/i);
});

it('render app name', () => {
  const {getByText} = render(sample);
  getByText(/تیکتینگ/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
