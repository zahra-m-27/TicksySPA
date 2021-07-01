import {fireEvent, render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory({
  initialEntries: ['/dashboard/topics'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('create topic correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/topics');

  let {getByTestId, queryByText, findByText} = render(sample);

  signIn(history, getByTestId, queryByText);

  const addTopic = await findByText('افزودن');
  user.click(addTopic);

  let title = getByTestId('title');
  let avatar = getByTestId('avatar');
  let submit = getByTestId('submit');
  let description = getByTestId('description');

  user.click(submit);
  let file = new File(['select'], '', {type: 'file'});
  userEvent.upload(avatar, file);
  user.click(submit);
  user.type(title, 'error');
  fireEvent.keyDown(title, {key: 'Enter', code: 13, charCode: 13});
  user.click(submit);
  user.type(description, 'Description');
  fireEvent.keyDown(description, {key: 'Enter', code: 13, charCode: 13});
  user.click(submit);
  user.clear(title);
  user.type(title, '403');
  user.click(submit);
  user.clear(title);
  user.type(title, 'Title');
  user.click(submit);
});
