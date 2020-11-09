import SignUpViewModel from "../ViewModels/SignUpViewModel";
import SignInViewModel from "../ViewModels/SignInViewModel";

import { Post } from "../fetch";

const ControllerName1 = "SignUpViewModel";
const ControllerName2 = "SignInViewModel";

function SignUp(args: SignUpViewModel.Request) {
    return Post<SignUpViewModel.Response>(ControllerName1 + "/SignUp", args);
}
function SignIn(args: SignInViewModel.Request) {
    return Post<SignInViewModel.Response>(ControllerName2 + "/SignIn", args);
}
export default {
    SignUp,SignIn
};
