import BaseResponse from "../../Common/BaseResponse";
import UserDto from "../../DTOs/UserDto";

namespace UpdateProfileViewModel {
  export interface Request {
    code: string;
    avatar?: File;
    email: string;
    last_name: string;
    first_name: string;
  }

  export interface Response extends UserDto {}
}

export default UpdateProfileViewModel;
