import {fireEvent, render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory({
  initialEntries: ['/ticket/-1'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('create ticket correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/ticket/-1');

  let {getByTestId, queryByText, findByText, getByAltText} = render(sample);

  signIn(history, getByTestId, queryByText);

  await new Promise((r) => setTimeout(r, 2000));

  const logo = getByAltText('logo');

  user.click(logo);

  history.push('/ticket/1');

  await waitFor(() => expect(history.location.pathname).toEqual('/ticket/1'));

  const category = await findByText('انتخاب كنيد');

  user.click(category);

  const section = await findByText('Test Section 216');

  user.click(section);

  const submitButton = getByTestId('submit');

  const titleInput = getByTestId('title_input');

  user.type(titleInput, 'error');

  user.click(submitButton);

  user.clear(titleInput);

  user.type(titleInput, 'Test Title');

  fireEvent.keyDown(titleInput, {key: 'Enter', code: 13, charCode: 13});

  const tags = getByTestId('tags_input');

  user.type(tags, 'Hashtag');

  fireEvent.keyDown(tags, {key: 'Enter', code: 13, charCode: 13});

  const tag = await findByText(/Hashtag/i);

  const closeTag = tag.querySelector('.anticon-close');

  if (closeTag) {
    user.click(closeTag);
  }

  const fileInputElement = getByTestId(/file-input/i) as HTMLInputElement;

  const file = new File(['select'], '', {type: 'file'});
  userEvent.upload(fileInputElement, file);

  const removeFileElement = getByTestId(/remove-file/i);
  user.click(removeFileElement);

  user.click(submitButton);
});
