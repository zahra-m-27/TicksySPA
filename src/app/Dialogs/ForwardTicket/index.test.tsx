import ReactDOM from 'react-dom';
import React, {useRef} from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ForwardTicketDialog from './index';

const Sample: React.FC = ({}) => {
  const ref = useRef(() => {});
  return (
    <ForwardTicketDialog
      onDismissRef={ref}
      otherSections={[]}
      ticketId={0}
      section={'Test Title'}
    />
  );
};

const sample = <Sample />;

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('render header', () => {
  const {getByText} = render(sample);
  getByText(/From:/i);
});

it('render buttons', () => {
  const {getByText} = render(sample);
  getByText(/انصراف/i);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
