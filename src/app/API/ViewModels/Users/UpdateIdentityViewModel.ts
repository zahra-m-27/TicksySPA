import BaseResponse from "../../Common/BaseResponse";
import UserIdentityDto from "../../DTOs/UserIdentityDto";

namespace UpdateIdentityViewModel {
  export interface Request extends UserIdentityDto {}

  export interface Response extends BaseResponse, UserIdentityDto {}
}

export default UpdateIdentityViewModel;
