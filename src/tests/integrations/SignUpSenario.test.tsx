import {fireEvent, render, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';

const history = createMemoryHistory();
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('sign up correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/');

  const {getByTestId} = render(sample);

  const signUpButton = getByTestId('sign-up-button');

  user.click(signUpButton);

  expect(history.location.pathname).toEqual('/sign-up');

  const email = getByTestId('email-input');
  const submit = getByTestId('submit-button');
  const password = getByTestId('password-input');
  const lastName = getByTestId('last-name-input');
  const firstName = getByTestId('first-name-input');
  const personalIdentity = getByTestId('personal-identity-input');

  user.click(submit);
  user.type(lastName, 'User2');
  user.click(submit);
  user.type(firstName, 'Test');
  user.click(submit);
  user.type(password, 'TestPassword');
  user.click(submit);
  user.type(email, 'TestUse');
  user.clear(email);
  user.type(email, 'TestUser@gmail.com');
  user.click(submit);
  user.type(personalIdentity, '972023005');
  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/sign-up'));

  user.clear(email);
  user.clear(password);
  user.clear(lastName);
  user.clear(firstName);
  user.clear(personalIdentity);

  user.type(lastName, 'User2');
  user.type(firstName, 'Test');
  user.type(password, 'TestPassword');
  user.type(personalIdentity, '972023005');
  user.type(email, 'duplicate@ticksy.ir');
  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/sign-up'));

  user.clear(email);
  user.clear(password);
  user.clear(lastName);
  user.clear(firstName);
  user.clear(personalIdentity);

  user.type(firstName, 'Test');

  fireEvent.focus(firstName);
  fireEvent.keyDown(firstName, {key: 'Enter', code: 13, charCode: 13});

  user.type(lastName, 'User');

  fireEvent.focus(lastName);
  fireEvent.keyDown(lastName, {key: 'Enter', code: 13, charCode: 13});

  user.type(email, 'TestUser@gmail.com');

  fireEvent.focus(email);
  fireEvent.keyDown(email, {key: 'Enter', code: 13, charCode: 13});

  user.type(personalIdentity, '972023005');

  fireEvent.focus(personalIdentity);
  fireEvent.keyDown(personalIdentity, {key: 'Enter', code: 13, charCode: 13});

  user.type(password, 'TestPassword');

  fireEvent.focus(password);
  fireEvent.keyDown(password, {key: 'Enter', code: 13, charCode: 13});

  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/'));
});
