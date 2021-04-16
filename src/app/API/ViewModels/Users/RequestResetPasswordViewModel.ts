import BaseResponse from '../../Common/BaseResponse';

namespace RequestResetPasswordViewModel {
  export interface Request {
    email: string;
  }

  export interface Response extends BaseResponse {
    email: string;
  }
}

export default RequestResetPasswordViewModel;
