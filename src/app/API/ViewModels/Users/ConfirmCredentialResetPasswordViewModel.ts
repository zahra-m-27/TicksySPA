import BaseResponse from '../../Common/BaseResponse';

namespace ConfirmCredentialResetPasswordViewModel {
  export interface Request {
    token: string;
    uib64: string;
  }

  export type Response = BaseResponse;
}

export default ConfirmCredentialResetPasswordViewModel;
