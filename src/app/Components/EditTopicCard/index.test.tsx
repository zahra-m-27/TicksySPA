import EditTopicCard from '.';
import ReactDOM from 'react-dom';
import Assets from '../../Assets';
import {render} from '@testing-library/react';

const sample = (
  <EditTopicCard
    icon={Assets.SVGs.Topic}
    title="Test Title"
    buttons={[
      {
        loading: false,
        label: 'Test Button 1',
        onClick: () => undefined,
      },
      {
        loading: true,
        label: 'Test Button 2',
        onClick: () => undefined,
      },
    ]}
  />
);

test('renders in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('renders title', () => {
  const {getByText} = render(sample);

  getByText(/Test Title/i);
});

test('renders buttons and loading', () => {
  const {getByText} = render(sample);

  const button1Element = getByText(/Test Button 1/i);
  const button1Loading = button1Element.parentElement?.querySelector(
    '.ant-btn-loading-icon'
  );
  expect(button1Loading).toBeFalsy();

  const button2Element = getByText(/Test Button 2/i);
  const button2Loading = button2Element.parentElement?.querySelector(
    '.ant-btn-loading-icon'
  );
  expect(button2Loading).toBeTruthy();
});
