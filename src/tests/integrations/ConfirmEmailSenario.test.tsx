import {render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import user from '@testing-library/user-event';

const history = createMemoryHistory({
  initialEntries: ['/confirm-email?token=12345'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('confirm email correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/confirm-email');

  expect(history.location.search).toEqual('?token=12345');

  const {findByTestId, getByText} = render(sample);

  await findByTestId('confirm-failed');

  let home = getByText('صفحه اصلی');
  user.click(home);

  await waitFor(() => expect(history.location.pathname).toEqual('/'));

  history.replace('/confirm-email?token=Token');

  await waitFor(() => expect(history.location.search).toEqual('?token=Token'));

  await waitFor(() => findByTestId('confirm-successful'));

  home = getByText('صفحه اصلی');
  user.click(home);

  await waitFor(() => expect(history.location.pathname).toEqual('/'));
});
