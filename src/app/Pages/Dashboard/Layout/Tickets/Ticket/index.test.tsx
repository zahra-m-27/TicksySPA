import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import EditTopic from '../../Topics/EditTopic/RoleManagement';
import RoleManagement from '../../Topics/EditTopic/RoleManagement';
import SubmitCertificate from './index';
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
