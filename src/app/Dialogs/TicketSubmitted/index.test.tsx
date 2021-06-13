import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import TicketSubmittedDialog from './index';

const sample = <TicketSubmittedDialog identifier="Test Identifier" />;

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render title', () => {
  const {getByText} = render(sample);
  getByText(/درخواست شما با موفقیت ارسال شد./i);
});

it('render message', () => {
  const {getByText} = render(sample);
  getByText(/برایتان ایمیل خواهد شد/i);
});

it('render identifier label', () => {
  const {getByText} = render(sample);
  getByText(/شناسه درخواست/i);
});

it('render identifier', () => {
  const {getByText} = render(sample);
  getByText(/Test Identifier/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
