import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import mockAllAPI from '../mocking';
import App from '../../app/App';
import {createMemoryHistory} from 'history';
import signIn from '../utilities/signIn';

const history = createMemoryHistory({
  initialEntries: ['/ticket/test'],
});
const sample = (
  <Router history={history}>
    <App />
  </Router>
);

it('create ticket correctly', async () => {
  mockAllAPI();

  expect(history.location.pathname).toEqual('/ticket/test');

  let {getByTestId, findByDisplayValue} = render(sample);

  signIn(history, getByTestId, findByDisplayValue);
});
