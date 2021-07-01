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

it('create category correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/topics');

  let {getByTestId, queryByText, findByText, getByAltText} = render(sample);

  signIn(history, getByTestId, queryByText);

  await waitFor(() => findByText('Title Topic 558'));

  const topic = await findByText('Title Topic 558');
  user.click(topic);

  let newCategory = await findByText('ایجاد دسته بندی');
  user.click(newCategory);

  let role = getByTestId('role');
  let title = getByTestId('title');
  let description = getByTestId('description');

  let submit = await findByText('ثبت دسته بندی');
  user.click(submit);

  user.type(role, 'Title');

  let section = await findByText('Title Role 456');

  user.click(section);

  user.type(title, 'Title');
  user.type(description, 'Description');

  user.click(submit);

  history.push('/dashboard/topics');

  newCategory = await findByText('ایجاد دسته بندی');
  user.click(newCategory);

  submit = await findByText('ثبت دسته بندی');

  role = getByTestId('role');
  title = getByTestId('title');
  description = getByTestId('description');

  user.type(role, 'Title');

  section = await findByText('Title Role 456');
  user.click(section);

  user.type(description, 'Description');
  user.type(title, 'error');
  user.click(submit);

  history.push('/dashboard/topics/1/edit/1');

  await waitFor(() => getByTestId('description'));

  submit = await findByText('ثبت دسته بندی');

  role = getByTestId('role');
  title = getByTestId('title');
  description = getByTestId('description');

  user.clear(role);
  user.type(role, 'Title');

  section = await findByText('Title Role 456');

  user.click(section);

  user.clear(description);
  user.type(description, 'Description');
  user.clear(title);
  user.type(title, 'error');
  user.click(submit);

  await waitFor(() => getByTestId('description'));
});
