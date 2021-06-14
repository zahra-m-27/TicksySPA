import {error, noError} from '.';
import Email from '../../app/API/Domains/Email';
import SearchEmailViewModel from '../../app/API/ViewModels/Email/SearchEmailViewModel';

export function mockEmail() {
  mockSearchEmail();
}

function mockSearchEmail() {
  jest.spyOn(Email, 'SearchEmail');
  const mocked = Email.SearchEmail as jest.MockedFunction<
    typeof Email.SearchEmail
  >;
  mocked.mockImplementation(({search}) => {
    if (search !== 'error')
      return noError<SearchEmailViewModel.Response[]>([
        {
          id: 12345,
          avatar: '',
          last_name: 'User',
          first_name: 'Test',
          email: 'TestUser@Markop.ir',
        },
      ]);
    return error(400);
  });
}
