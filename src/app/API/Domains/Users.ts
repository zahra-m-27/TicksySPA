import { Post } from "../fetch";
import SignInViewModel from "../ViewModels/SignInViewModel";
import SignUpViewModel from "../ViewModels/SignUpViewModel";

const ControllerName = "users/api";

function SignUp(args: SignUpViewModel.Request) {
  return Post<SignUpViewModel.Response>(ControllerName + "/signup/", args);
}
function SignIn(args: SignInViewModel.Request) {
  return Post<SignInViewModel.Response>(ControllerName + "/signin/", args);
}

const Actions = {
  SignIn,
  SignUp,
};

export default Actions;
