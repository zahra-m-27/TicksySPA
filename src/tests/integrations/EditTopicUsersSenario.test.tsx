import {render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';
import user from '@testing-library/user-event';

const history = createMemoryHistory({
  initialEntries: ['/dashboard/topics'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('edit topic users correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/topics');

  let {getByTestId, queryByText, findByText, findAllByTestId, findByTestId} =
    render(sample);

  signIn(history, getByTestId, queryByText);

  const editTopic = await findAllByTestId('edit_topic');
  user.click(editTopic[0]);

  const users = await findByText('کاربران');
  user.click(users);

  const editUser = await findByTestId('edit_user');
  user.click(editUser);

  const email = await findByTestId('email');
  user.type(email, 'Test');

  const suggestedUser = await findByText('Test User (TestUser@Markop.ir)');
  user.click(suggestedUser);

  const submit = await findByTestId('submit_user');
  user.click(submit);
});
