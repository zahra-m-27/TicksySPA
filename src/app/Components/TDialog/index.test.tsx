import {cleanup, fireEvent, render} from '@testing-library/react';
import {Button} from 'antd';

it('captures clicks', (done) => {
  function TDialog() {
    done();
  }
  const {getByText} = render(<Button onClick={TDialog}>Accept</Button>);
  const node = getByText('Accept');
  fireEvent.click(node);
});

afterEach(cleanup);
