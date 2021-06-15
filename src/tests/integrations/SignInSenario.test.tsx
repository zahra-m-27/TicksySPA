import ReactDOM from 'react-dom';
import {render, waitFor} from '@testing-library/react';
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

  expect(window.location.pathname).toEqual('/sign-in');

  const email = getByTestId('email-input');
  const submit = getByTestId('submit-button');
  const password = getByTestId('password-input');

  user.type(email, 'TestUser@gmail.com');
  user.type(password, 'TestPassword222');
  user.click(submit);

  await waitFor(() => expect(window.location.pathname).toEqual('/sign-in'));

  user.clear(email);
  user.clear(password);

  user.type(email, 'TestUser@gmail.com');
  user.type(password, 'TestPassword');
  user.click(submit);

  await waitFor(() => expect(window.location.pathname).toEqual('/'));
});
