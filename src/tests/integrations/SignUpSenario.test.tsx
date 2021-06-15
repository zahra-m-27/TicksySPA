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

it('sign up correctly', async () => {
  mockAllAPI();

  expect(window.location.pathname).toEqual('/');

  const {getByTestId} = render(sample);

  const signUpButton = getByTestId('sign-up-button');

  user.click(signUpButton);

  expect(window.location.pathname).toEqual('/sign-up');

  const email = getByTestId('email-input');
  const submit = getByTestId('submit-button');
  const password = getByTestId('password-input');
  const lastName = getByTestId('last-name-input');
  const firstName = getByTestId('first-name-input');
  const personalIdentity = getByTestId('personal-identity-input');

  user.type(lastName, 'User2');
  user.type(firstName, 'Test1');
  user.type(password, 'TestPassword');
  user.type(email, 'TestUser@gmail.com');
  user.type(personalIdentity, '972023005');

  user.click(submit);

  await waitFor(() => expect(window.location.pathname).toEqual('/sign-up'));

  user.clear(email);
  user.clear(password);
  user.clear(lastName);
  user.clear(firstName);
  user.clear(personalIdentity);

  user.type(lastName, 'User');
  user.type(firstName, 'Test');
  user.type(password, 'TestPassword');
  user.type(email, 'TestUser@gmail.com');
  user.type(personalIdentity, '972023005');

  user.click(submit);

  await waitFor(() => expect(window.location.pathname).toEqual('/'));
});
