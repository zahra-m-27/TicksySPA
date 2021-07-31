import {render, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';

const history = createMemoryHistory({
  initialEntries: ['/dashboard/ticket/0'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('forward ticket', async () => {
  mockAllAPI();

  let {findByTestId, getByTestId, queryByText, findByText} = render(sample);

  signIn(history, getByTestId, queryByText);

  await waitFor(() => findByTestId('forward-button'));

  const forwardButton = await findByTestId('forward-button');
  user.click(forwardButton);

  const closeButton = await findByTestId('close-button');
  user.click(closeButton);

  user.click(forwardButton);
  const dialogContainer = await findByTestId('dialog-container');
  user.click(dialogContainer);

  user.click(forwardButton);
  const cancelButton = await findByTestId('cancelButton');
  user.click(cancelButton);

  user.click(forwardButton);

  const forwardType = await findByTestId('forwardType');

  user.click(forwardType);

  const forwardToTopic = await findByText(/ارسال تیکت به سایر تاپیک ها/i);

  user.click(forwardToTopic);

  const topicSearchInput = await findByTestId('topicSearch');

  user.type(topicSearchInput, 'test');

  const topic = await waitFor(() => findByText(/Test Topic 25/i));

  user.click(topic);

  const role = await waitFor(() => findByText(/Test Section 1/i));

  user.click(role);

  const submitButton = await findByTestId('submitButton');

  user.click(submitButton);
});
