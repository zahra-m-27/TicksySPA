import SignInInput from "./SignInInput";
import SignUpInput from "./SignUpInput";
import ConfirmEmailPage from "./ConfirmEmail";
import { Props as TemplateProps } from "./Template";
import ForgotPasswordInput from "./ForgotPasswordInput";
import ChangePasswordInput from "./ChangePasswordInput";

interface Route extends Partial<TemplateProps> {
  path: string;
  component?: () => JSX.Element;
}

const routes: Route[] = [
  {
    path: "/sign-up",
    message: undefined,
    messageHeader: undefined,
    inputComponent: SignUpInput,
  },
  {
    path: "/forgot-password",
    message: undefined,
    messageHeader: undefined,
    inputComponent: ForgotPasswordInput,
  },
  {
    path: "/change-password",
    message: undefined,
    messageHeader: undefined,
    inputComponent: ChangePasswordInput,
  },
  {
    path: "/confirm-email",
    component: ConfirmEmailPage,
  },
  {
    path: "/",
    message: undefined,
    messageHeader: undefined,
    inputComponent: SignInInput,
  },
];

export default routes;
