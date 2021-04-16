import BaseResponse from '../../Common/BaseResponse';

namespace SignUpViewModel {
  export interface Request {
    code: string;
    email: string;
    password: string;
    last_name: string;
    first_name: string;
  }

  export interface Response extends BaseResponse {
    email: string;
    password: string;
    last_name: string;
    first_name: string;
  }
}

export default SignUpViewModel;
