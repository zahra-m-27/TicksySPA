import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import user from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';

const sample = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

it('renders in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('sign in correctly', async () => {
  mockAllAPI();

  expect(window.location.pathname).toEqual('/');

  const {getByTestId} = render(sample);

  const signInButton = getByTestId('sign-in-button');

  user.click(signInButton);

  const username = getByTestId('email-input');
  const password = getByTestId('password-input');
  const submit = getByTestId('submit-button');

  expect(window.location.pathname).toEqual('/sign-in');

  user.type(username, 'TestUser');
  user.type(password, 'TestPassword');
  user.click(submit);

  expect(window.location.pathname).toEqual('/');
});
