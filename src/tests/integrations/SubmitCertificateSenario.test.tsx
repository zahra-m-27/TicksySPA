import {render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';
import user from '@testing-library/user-event';

const history = createMemoryHistory({
  initialEntries: ['/dashboard/profile'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('update profile correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/profile');

  let {getByTestId, queryByText, findByText} = render(sample);

  signIn(history, getByTestId, queryByText);

  await waitFor(() => getByTestId('submit_certificate'));

  const submitCertificateButton = getByTestId('submit_certificate');

  user.click(submitCertificateButton);

  history.push('/dashboard/submit-certificate?status=3');

  await findByText('وضعیت درخواست:');
});
