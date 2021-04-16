import BaseResponse from '../../Common/BaseResponse';

namespace NewPasswordResetPasswordViewModel {
  export interface Request {
    uib64: string;
    token: string;
    password: string;
  }

  export interface Response extends BaseResponse {
    uib64: string;
    token: string;
    password: string;
  }
}

export default NewPasswordResetPasswordViewModel;
