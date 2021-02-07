import BaseResponse from "../../Common/BaseResponse";

namespace SignInViewModel {
  export interface Request {
    username: string;
    password: string;
  }

  export interface Response extends BaseResponse {
    token: string;
    username: string;
    password: string;
  }
}

export default SignInViewModel;
