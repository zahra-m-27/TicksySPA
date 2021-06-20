import {error, noError} from '.';
import Users from '../../app/API/Domains/Users';
import SignUpViewModel from '../../app/API/ViewModels/Users/SignUpViewModel';
import SignInViewModel from '../../app/API/ViewModels/Users/SignInViewModel';
import GetProfileViewModel from '../../app/API/ViewModels/Users/GetProfileViewModel';
import GetIdentityViewModel from '../../app/API/ViewModels/Users/GetIdentityViewModel';
import ConfirmSignUpViewModel from '../../app/API/ViewModels/Users/ConfirmSignUpViewModel';
import RequestResetPasswordViewModel from '../../app/API/ViewModels/Users/RequestResetPasswordViewModel';
import NewPasswordResetPasswordViewModel from '../../app/API/ViewModels/Users/NewPasswordResetPasswordViewModel';
import SearchEmailViewModel from '../../app/API/ViewModels/Users/SearchEmailViewModel';

export function mockUsers() {
  mockSignIn();
  mockSignUp();
  mockGetProfile();
  mockGetIdentity();
  mockSearchEmail();
  mockConfirmSignUp();
  mockRequestResetPassword();
  mockNewPasswordResetPassword();
}

function mockSignIn() {
  jest.spyOn(Users, 'SignIn');
  const mocked = Users.SignIn as jest.MockedFunction<typeof Users.SignIn>;
  mocked.mockImplementation(({username, password}) => {
    if (password === 'TestPassword')
      return noError<SignInViewModel.Response>({
        username: 'TestUser',
        password: '12345678',
        token: 'token',
      });
    return error(400);
  });
}

function mockRequestResetPassword() {
  jest.spyOn(Users, 'RequestResetPassword');
  const mocked = Users.RequestResetPassword as jest.MockedFunction<
    typeof Users.RequestResetPassword
  >;
  mocked.mockImplementation(({email}) => {
    if (email === 'TestUser@gmail.com')
      return noError<RequestResetPasswordViewModel.Response>({
        email: email,
      });
    return error(400);
  });
}

function mockNewPasswordResetPassword() {
  jest.spyOn(Users, 'NewPasswordResetPassword');
  const mocked = Users.NewPasswordResetPassword as jest.MockedFunction<
    typeof Users.NewPasswordResetPassword
  >;
  mocked.mockImplementation(({password, token, uib64}) => {
    if (password === 'TestPassword')
      return noError<NewPasswordResetPasswordViewModel.Response>({
        password: password,
        token: token,
        uib64: uib64,
      });
    return error(400);
  });
}

function mockConfirmSignUp() {
  jest.spyOn(Users, 'ConfirmSignUp');
  const mocked = Users.ConfirmSignUp as jest.MockedFunction<
    typeof Users.ConfirmSignUp
  >;
  mocked.mockImplementation(({token, uib64}) => {
    if (token === 'Token') return noError<ConfirmSignUpViewModel.Response>({});
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
      return error(400, {
        json: () =>
          new Promise((resolve) => {
            resolve({
              non_field_errors: [
                email === 'duplicate@ticksy.ir'
                  ? 'email address has been taken befor'
                  : 'error',
              ],
            });
          }),
      });
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

function mockSearchEmail() {
  jest.spyOn(Users, 'SearchEmail');
  const mocked = Users.SearchEmail as jest.MockedFunction<
    typeof Users.SearchEmail
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
