import BaseResponse from "../../Common/BaseResponse";

namespace ConfirmCredentialResetPasswordViewModel {
  export interface Request {
    token: string;
    uib64: string;
  }

  export interface Response extends BaseResponse {}
}

export default ConfirmCredentialResetPasswordViewModel;
