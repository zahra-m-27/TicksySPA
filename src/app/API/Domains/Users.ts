import { Post } from "../fetch";
import SignInViewModel from "../ViewModels/Users/SignInViewModel";
import SignUpViewModel from "../ViewModels/Users/SignUpViewModel";
import GetProfileViewModel from "../ViewModels/Users/GetProfileViewModel";
import GetIdentityViewModel from "../ViewModels/Users/GetIdentityViewModel";
import UpdateProfileViewModel from "../ViewModels/Users/UpdateProfileViewModel";
import UpdateIdentityViewModel from "../ViewModels/Users/UpdateIdentityViewModel";
import RequestResetPasswordViewModel from "../ViewModels/Users/RequestResetPasswordViewModel";
import NewPasswordResetPasswordViewModel from "../ViewModels/Users/NewPasswordResetPasswordViewModel";
import ConfirmCredentialResetPasswordViewModel from "../ViewModels/Users/ConfirmCredentialResetPasswordViewModel";

const ControllerName = "users/api";

function SignUp(args: SignUpViewModel.Request) {
  return Post<SignUpViewModel.Response>(ControllerName + "/signup/", args);
}
function SignIn(args: SignInViewModel.Request) {
  return Post<SignInViewModel.Response>(ControllerName + "/signin/", args);
}
function RequestResetPassword(args: RequestResetPasswordViewModel.Request) {
  return Post<RequestResetPasswordViewModel.Response>(
    ControllerName + "/reset_password/request/",
    args
  );
}
function NewPasswordResetPassword(
  args: NewPasswordResetPasswordViewModel.Request
) {
  return Post<NewPasswordResetPasswordViewModel.Response>(
    ControllerName + "/reset_password/new-password/",
    args,
    "PATCH"
  );
}
function ConfirmCredentialResetPassword(
  args: ConfirmCredentialResetPasswordViewModel.Request
) {
  return Post<ConfirmCredentialResetPasswordViewModel.Response>(
    ControllerName +
      `/reset_password/confirm-credential/${args.uib64}/${args.token}`,
    undefined,
    "GET"
  );
}
function UpdateProfile(args: UpdateProfileViewModel.Request) {
  return Post<UpdateProfileViewModel.Response>(
    ControllerName + "/profile/",
    args,
    "PATCH"
  );
}
function GetProfile(args: GetProfileViewModel.Request) {
  return Post<GetProfileViewModel.Response>(
    ControllerName + "/profile/",
    undefined,
    "GET"
  );
}
function UpdateIdentity(args: UpdateIdentityViewModel.Request) {
  return Post<UpdateIdentityViewModel.Response>(
    ControllerName + "/identity/",
    args,
    "PUT"
  );
}
function GetIdentity(args: GetIdentityViewModel.Request) {
  return Post<GetIdentityViewModel.Response>(
    ControllerName + "/identity/",
    undefined,
    "GET"
  );
}

const Actions = {
  SignIn,
  SignUp,
  GetProfile,
  GetIdentity,
  UpdateProfile,
  UpdateIdentity,
  RequestResetPassword,
  NewPasswordResetPassword,
  ConfirmCredentialResetPassword,
};

export default Actions;
