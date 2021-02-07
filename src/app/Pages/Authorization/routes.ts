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
    path: "/sign-in",
    message: undefined,
    messageHeader: undefined,
    InputComponent: SignInInput,
  },
  {
    path: "/sign-up",
    message: undefined,
    messageHeader: undefined,
    InputComponent: SignUpInput,
  },
  {
    path: "/forgot-password",
    message: undefined,
    messageHeader: undefined,
    InputComponent: ForgotPasswordInput,
  },
  {
    path: "/change-password",
    message: undefined,
    messageHeader: undefined,
    InputComponent: ChangePasswordInput,
  },
  {
    path: "/confirm-email",
    component: ConfirmEmailPage,
  },
];

export default routes;
