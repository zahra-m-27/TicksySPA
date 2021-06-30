import ReactDOM from 'react-dom';
import React, {useRef} from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import RoleManagement from './index';

const Sample: React.FC = ({}) => {
  const ref = useRef(() => {});
  return (
    <MemoryRouter>
      <RoleManagement onUpdate={ref} />
    </MemoryRouter>
  );
};

const sample = <Sample />;

test('render in ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(sample, div);
});

it('snapshot', () => {
  const snapshot = renderer.create(sample).toJSON();
  expect(snapshot).toMatchSnapshot();
});
