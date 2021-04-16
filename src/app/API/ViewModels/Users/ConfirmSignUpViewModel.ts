import BaseResponse from '../../Common/BaseResponse';

namespace ConfirmSignUpViewModel {
  export interface Request {
    token: string;
    uib64: string;
  }

  export type Response = BaseResponse;
}

export default ConfirmSignUpViewModel;
