import BaseResponse from "../../Common/BaseResponse";

namespace GetProfileViewModel {
  export interface Request {}

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

export default GetProfileViewModel;
