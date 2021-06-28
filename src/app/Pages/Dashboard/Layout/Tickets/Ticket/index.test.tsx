import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Ticket from './index';

const sample = (
  <MemoryRouter>
    <Ticket />
  </MemoryRouter>
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
