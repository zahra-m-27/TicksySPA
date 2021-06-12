import EditTopicCard from '.';
import ReactDOM from 'react-dom';
import Assets from '../../Assets';
import {getAllByText, render} from '@testing-library/react';
import renderer from 'react-test-renderer';

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

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

test('renders title', () => {
  const {getByText} = render(sample);

  getByText(/Test Title/i);
});

test('renders buttons', () => {
  const {getAllByText} = render(sample);

  expect(getAllByText(/Test Button/i).length === 2).toBeTruthy();
});

test('renders buttons and no loading', () => {
  const {getByText} = render(sample);

  const button1Element = getByText(/Test Button 1/i);
  const button1Loading = button1Element.parentElement?.querySelector(
    '.ant-btn-loading-icon'
  );
  expect(button1Loading).toBeFalsy();
});

test('renders buttons and loading', () => {
  const {getByText} = render(sample);

  const button2Element = getByText(/Test Button 2/i);
  const button2Loading = button2Element.parentElement?.querySelector(
    '.ant-btn-loading-icon'
  );
  expect(button2Loading).toBeTruthy();
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
