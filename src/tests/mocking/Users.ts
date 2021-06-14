import {error, noError} from '.';
import Users from '../../app/API/Domains/Users';
import SignUpViewModel from '../../app/API/ViewModels/Users/SignUpViewModel';
import SignInViewModel from '../../app/API/ViewModels/Users/SignInViewModel';
import GetProfileViewModel from '../../app/API/ViewModels/Users/GetProfileViewModel';
import GetIdentityViewModel from '../../app/API/ViewModels/Users/GetIdentityViewModel';

export function mockUsers() {
  mockSignIn();
  mockSignUp();
  mockGetProfile();
  mockGetIdentity();
}

function mockSignIn() {
  jest.spyOn(Users, 'SignIn');
  const mocked = Users.SignIn as jest.MockedFunction<typeof Users.SignIn>;
  mocked.mockImplementation(({username, password}) => {
    if (username === 'TestUser' && password === 'TestPassword')
      return noError<SignInViewModel.Response>({
        username: 'TestUser',
        password: '12345678',
        token: 'token',
      });
    return error(400);
  });
}

function mockSignUp() {
  jest.spyOn(Users, 'SignUp');
  const mocked = Users.SignUp as jest.MockedFunction<typeof Users.SignUp>;
  mocked.mockImplementation(
    ({first_name, last_name, code, email, password}) => {
      if (first_name === 'Test' && last_name === 'User') {
        return noError<SignUpViewModel.Response>({
          email: 'TestUser@markop.ir',
          password: '12345678',
          last_name: 'User',
          first_name: 'Test',
        });
      }
      return error(400);
    }
  );
}

function mockGetProfile() {
  jest.spyOn(Users, 'GetProfile');
  const mocked = Users.GetProfile as jest.MockedFunction<
    typeof Users.GetProfile
  >;
  mocked.mockImplementation(({}) => {
    return noError<GetProfileViewModel.Response>({
      email: 'TestUser@markop.ir',
      last_name: 'User',
      first_name: 'Test',
      code: '972023005',
      avatar: '',
      id: 12345,
      date_joined: new Date(),
      is_identified: true,
    });
  });
}

function mockGetIdentity() {
  jest.spyOn(Users, 'GetIdentity');
  const mocked = Users.GetIdentity as jest.MockedFunction<
    typeof Users.GetIdentity
  >;
  mocked.mockImplementation(({}) => {
    return noError<GetIdentityViewModel.Response>({
      status: '1',
      identifier_image: '',
      expire_time: new Date(),
      request_time: new Date(),
    });
  });
}
