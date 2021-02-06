import { Post } from "../fetch";
import SignInViewModel from "../ViewModels/SignInViewModel";
import SignUpViewModel from "../ViewModels/SignUpViewModel";

const ControllerName = "users/api";

function SignUp(args: SignUpViewModel.Request) {
  return Post<SignUpViewModel.Response>(ControllerName + "/SignUp", args);
}
function SignIn(args: SignInViewModel.Request) {
  return Post<SignInViewModel.Response>(ControllerName + "/SignIn", args);
}

const Actions = {
  SignIn,
  SignUp,
};

export default Actions;
