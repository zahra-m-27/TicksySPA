import ReactDOM from 'react-dom';
import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import MessageDialog from './index';

const sample = (
  <MessageDialog
    title="Test Title"
    message="Test Message"
    identifier="Test Identifier"
    identifier_label="Test Label Identifier"
  />
);

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render title', () => {
  const {getByText} = render(sample);
  getByText(/Test Title/i);
});

it('render message', () => {
  const {getByText} = render(sample);
  getByText(/Test Message/i);
});

it('render identifier', () => {
  const {getByText} = render(sample);
  getByText(/Test Identifier/i);
});

it('render identifier label', () => {
  const {getByText} = render(sample);
  getByText(/Test Label Identifier/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
