import {fireEvent, render, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';

const history = createMemoryHistory({
  initialEntries: ['/confirm-reset-password'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('change password correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/confirm-reset-password');

  const {getByTestId} = render(sample);

  const submit = getByTestId('submit-button');
  const password = getByTestId('password-input');
  const repeatPassword = getByTestId('repeat-password-input');

  user.type(password, 'TestPassword222');
  user.type(repeatPassword, 'TestPassword222');
  user.click(submit);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/confirm-reset-password')
  );

  user.clear(repeatPassword);
  user.clear(password);

  user.type(password, 'TestPassword123');

  fireEvent.focus(password);
  fireEvent.keyDown(password, {key: 'Enter', code: 13, charCode: 13});

  user.type(repeatPassword, 'TestPassword');
  user.click(submit);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/confirm-reset-password')
  );

  user.clear(repeatPassword);
  user.click(submit);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/confirm-reset-password')
  );

  user.clear(password);
  user.click(submit);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/confirm-reset-password')
  );

  user.type(password, 'TestPassword');
  user.type(repeatPassword, 'TestPassword');
  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/'));
});
