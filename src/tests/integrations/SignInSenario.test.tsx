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

it('sign in correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/');

  const {getByTestId} = render(sample);

  const signInButton = getByTestId('sign-in-button');

  user.click(signInButton);

  await waitFor(() => expect(history.location.pathname).toEqual('/sign-in'));

  const email = getByTestId('email-input');
  const submit = getByTestId('submit-button');
  const password = getByTestId('password-input');

  user.click(submit);
  user.type(email, 'TestUser@gmail.com');
  user.click(submit);
  user.type(password, 'TestPassword222');
  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/sign-in'));

  user.clear(email);
  user.clear(password);

  user.type(email, 'TestUser@gmail.com');

  fireEvent.focus(email);
  fireEvent.keyDown(email, {key: 'Enter', code: 13, charCode: 13});

  user.type(password, 'TestPassword');
  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/'));
});
