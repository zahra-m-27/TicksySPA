import BaseResponse from "../../Common/BaseResponse";
import UserIdentityDto from "../../DTOs/UserIdentityDto";

namespace GetIdentityViewModel {
  export interface Request {}

  export interface Response extends BaseResponse, UserIdentityDto {}
}

export default GetIdentityViewModel;
