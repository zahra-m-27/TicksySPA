import ReactDOM from 'react-dom';
import {render, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';

const history = createMemoryHistory({
  initialEntries: ['/dashboard/tickets/0'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('forward ticket', async () => {
  mockAllAPI();

  let {findByTestId, getByTestId, getByText, findByDisplayValue} =
    render(sample);

  signIn(history, getByTestId, findByDisplayValue);

  history.push('/dashboard/tickets/0');

  await waitFor(() => findByTestId('forward-button'));

  const forwardButton = await findByTestId('forward-button');
  user.click(forwardButton);

  const closeButton = await findByTestId('close-button');
  user.click(closeButton);

  user.click(forwardButton);
  const dialogContainer = await findByTestId('dialog-container');
  user.click(dialogContainer);

  user.click(forwardButton);

  const item1 = getByText(/تست 1/i);
  user.click(item1);
});
