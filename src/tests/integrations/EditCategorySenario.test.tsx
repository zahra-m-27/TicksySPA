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

it('edit category correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/topics');

  let {getByTestId, queryByText, findByText, findAllByTestId} = render(sample);

  signIn(history, getByTestId, queryByText);

  await waitFor(() => findByText('Title Topic 558'));

  const topic = await findByText('Title Topic 558');
  user.click(topic);

  const editButton = await findAllByTestId('edit_category');

  user.click(editButton[0]);

  await waitFor(() => getByTestId('description'));

  let role = getByTestId('role');
  let title = getByTestId('title');
  let description = getByTestId('description');

  let submit = await findByText('ثبت دسته بندی');

  user.clear(role);
  user.type(role, 'Title');

  let section = await findByText('Title Role 456');

  user.click(section);

  user.clear(description);
  user.type(description, 'Description');
  user.clear(title);
  user.type(title, 'error');
  user.click(submit);

  await waitFor(() => getByTestId('description'));
});
