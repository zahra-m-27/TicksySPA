import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import EditTopic from './EditTopic/RoleManagement';
import RoleManagement from './EditTopic/RoleManagement';
import SubmitCertificate from '../Tickets';
import Ticket from '../Tickets';
import Tickets from '../Tickets';
import Topics from './index';

const sample = (
  <MemoryRouter>
    <Topics />
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
