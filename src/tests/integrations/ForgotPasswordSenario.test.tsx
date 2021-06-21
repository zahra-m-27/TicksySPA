import {render, waitFor} from '@testing-library/react';
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

it('forgot password correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/');

  const {getByTestId} = render(sample);

  const signInButton = getByTestId('sign-in-button');

  user.click(signInButton);

  await waitFor(() => expect(history.location.pathname).toEqual('/sign-in'));

  const forgotButton = getByTestId('forgot-button');

  user.click(forgotButton);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/forgot-password')
  );

  const submit = getByTestId('submit-button');
  const email = getByTestId('email-input');

  user.type(email, 'TestUser12m');
  user.click(submit);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/forgot-password')
  );

  user.clear(email);

  user.type(email, 'TestUser123@gmail.com');
  user.click(submit);

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/forgot-password')
  );

  user.clear(email);
  user.type(email, 'TestUser@gmail.com');
  user.click(submit);

  await waitFor(() => expect(history.location.pathname).toEqual('/'));
});
