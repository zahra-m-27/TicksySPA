import {render} from '@testing-library/react';
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

it('edit topic roles correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/topics');

  let {getByTestId, queryByText, findByText, findAllByTestId} = render(sample);

  signIn(history, getByTestId, queryByText);

  const editTopic = await findAllByTestId('edit_topic');
  user.click(editTopic[0]);

  const roles = await findByText('نقش ها');

  user.click(roles);
});
