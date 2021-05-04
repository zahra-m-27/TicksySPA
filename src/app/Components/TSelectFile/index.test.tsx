import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('TSelectFile', () => {
  const file = new File(['select'], '', {type: 'file'});

  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" />
    </div>
  );
  const input = screen.getByLabelText(/upload file/i);
  userEvent.upload(input, file);

  expect(input.files[0]).toStrictEqual(file);
  expect(input.files.item(0)).toStrictEqual(file);
  expect(input.files).toHaveLength(1);
});
