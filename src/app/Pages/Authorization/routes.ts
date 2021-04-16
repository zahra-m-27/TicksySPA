import SignInInput from './SignInInput';
import SignUpInput from './SignUpInput';
import ConfirmSignUp from './ConfirmSignUp';
import {Props as TemplateProps} from './Template';
import ForgotPasswordInput from './ForgotPasswordInput';
import ChangePasswordInput from './ChangePasswordInput';

interface Route extends Partial<TemplateProps> {
  path: string;
  component?: () => JSX.Element;
}

const routes: Route[] = [
  {
    path: '/sign-up',
    message:
      'ما تلاش می‌کنیم مشکلات و درخواست‌ها، انتقادات و پیشنهادات دانشجویان رو به اطلاع مسئولین برسونیم. مسئولین هم همینجا مشغول بررسی درخواست‌ها هستند، پس همین حالا ثبت نام کنید!',
    messageHeader: undefined,
    inputComponent: SignUpInput,
  },
  {
    path: '/forgot-password',
    message: '',
    messageHeader: undefined,
    inputComponent: ForgotPasswordInput,
  },
  {
    message: '',
    messageHeader: undefined,
    path: '/confirm-reset-password',
    inputComponent: ChangePasswordInput,
  },
  {
    path: '/confirm-email',
    component: ConfirmSignUp,
  },
  {
    path: '/',
    message:
      'ما تلاش می‌کنیم مشکلات و درخواست‌ها، انتقادات و پیشنهادات دانشجویان رو به اطلاع مسئولین برسونیم. مسئولین هم همینجا مشغول بررسی درخواست‌ها هستند، پس همین حالا وارد شو!',
    messageHeader: undefined,
    inputComponent: SignInInput,
  },
];

export default routes;
