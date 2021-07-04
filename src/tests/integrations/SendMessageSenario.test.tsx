import {render, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory({
  initialEntries: ['/dashboard/tickets'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('send message correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/dashboard/tickets');

  let {getByTestId, queryByText, findByText, getByAltText} = render(sample);

  signIn(history, getByTestId, queryByText);

  await new Promise((r) => setTimeout(r, 500));

  const logo = getByAltText('logo');
  user.click(logo);

  history.push('/dashboard/tickets');

  await waitFor(() =>
    expect(history.location.pathname).toEqual('/dashboard/tickets')
  );

  const manageTickets = await getByTestId('manage_tickets');
  user.click(manageTickets);

  const ticketItem = await findByText('Ticket Title 155');
  user.click(ticketItem);

  await waitFor(() => getByTestId('message_input'));

  let submitButton = await getByTestId('submit');
  user.click(submitButton);

  const messageInput = await getByTestId('message_input');

  user.type(messageInput, 'error');
  user.click(submitButton);

  user.clear(messageInput);

  user.type(messageInput, 'Message');

  let fileInputElement = getByTestId('attach_input') as HTMLInputElement;
  let file = new File(['select'], '', {type: 'file'});
  userEvent.upload(fileInputElement, file);

  user.click(submitButton);

  await waitFor(() => getByTestId('attach_input'));

  fileInputElement = getByTestId('attach_input') as HTMLInputElement;
  file = new File(['select'], '', {type: 'file'});
  userEvent.upload(fileInputElement, file);

  const cancelAttachment = await getByTestId('cancel_attachment');
  user.click(cancelAttachment);
  user.clear(fileInputElement);

  file = new File(['select111'], '23', {type: 'file'});
  userEvent.upload(fileInputElement, file);

  await new Promise((r) => setTimeout(r, 1000));

  submitButton = await getByTestId('submit');
  user.click(submitButton);
});
