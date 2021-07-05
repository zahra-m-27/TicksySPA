import {fireEvent, render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

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

  let {getByTestId, queryByText} = render(sample);

  signIn(history, getByTestId, queryByText);

  await waitFor(() => getByTestId('edit_button'));

  const editButton = getByTestId('edit_button');

  user.click(editButton);

  await waitFor(() => getByTestId('firstname_input'));

  const emailInput = getByTestId('email_input');
  const updateAvatar = getByTestId('update_avatar');
  const lastnameInput = getByTestId('lastname_input');
  const firstnameInput = getByTestId('firstname_input');
  const personnelCodeInput = getByTestId('personnel_code_input');

  user.click(editButton);

  user.clear(emailInput);
  user.clear(lastnameInput);
  user.clear(firstnameInput);
  user.clear(personnelCodeInput);

  user.click(editButton);
  user.type(emailInput, 'TestUser@gmail.com');
  fireEvent.keyDown(emailInput, {key: 'Enter', code: 13, charCode: 13});
  user.click(editButton);
  user.type(lastnameInput, 'LastName');
  fireEvent.keyDown(lastnameInput, {key: 'Enter', code: 13, charCode: 13});
  user.click(editButton);
  user.type(personnelCodeInput, 'Personel Id');
  fireEvent.keyDown(personnelCodeInput, {key: 'Enter', code: 13, charCode: 13});
  user.click(editButton);
  user.type(firstnameInput, 'error');
  fireEvent.keyDown(firstnameInput, {key: 'Enter', code: 13, charCode: 13});
  user.click(editButton);

  let file = new File(['select'], '', {type: 'file'});
  userEvent.upload(updateAvatar, file);

  user.clear(firstnameInput);
  user.type(firstnameInput, 'FirstName');
  user.click(editButton);
});
