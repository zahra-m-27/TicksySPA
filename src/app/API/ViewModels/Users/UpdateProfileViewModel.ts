import BaseResponse from "../../Common/BaseResponse";

namespace UpdateProfileViewModel {
  export interface Request {
    code: string;
    email: string;
    last_name: string;
    first_name: string;
  }

  export interface Response extends BaseResponse {
    id: string;
    code: string;
    email: string;
    avatar: string;
    last_name: string;
    first_name: string;
    date_joined: string;
  }
}

export default UpdateProfileViewModel;
