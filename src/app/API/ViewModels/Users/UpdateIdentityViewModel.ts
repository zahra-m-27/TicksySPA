import BaseResponse from '../../Common/BaseResponse';
import UserIdentityDto from '../../DTOs/UserIdentityDto';

namespace UpdateIdentityViewModel {
  export interface Request {
    identifier_image?: File;
  }

  export interface Response extends BaseResponse, UserIdentityDto {}
}

export default UpdateIdentityViewModel;
