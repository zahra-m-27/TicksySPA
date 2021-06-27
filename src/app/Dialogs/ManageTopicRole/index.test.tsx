import ReactDOM from 'react-dom';
import React, {useRef} from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ManageTopicRoleDialog from './index';
import user from '@testing-library/user-event';

const Sample: React.FC = ({}) => {
  const ref = useRef(() => {});
  return <ManageTopicRoleDialog topicId={0} onDismissRef={ref} />;
};

const sample = <Sample />;

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render header', () => {
  const {getByText} = render(sample);
  getByText(/افزودن نقش/i);
});

it('render role label', () => {
  const {getByText} = render(sample);
  getByText(/عنوان نقش/i);
});

it('render buttons', () => {
  const {getByText} = render(sample);
  getByText(/نقش جدید/i);
  getByText(/ثبت/i);
});

it('open new dialog', async () => {
  const {getByText, findByTestId} = render(sample);
  const newRoleButton = getByText(/نقش جدید/i);
  user.click(newRoleButton);
  const dialogContainer = await findByTestId('dialog-container');
  user.click(dialogContainer);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
