import BaseResponse from "../../Common/BaseResponse";
import UserDto from "../../DTOs/UserDto";

namespace GetProfileViewModel {
  export interface Request {}

  export interface Response extends UserDto {}
}

export default GetProfileViewModel;
