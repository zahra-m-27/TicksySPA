import BaseResponse from '../../Common/BaseResponse';
import UserIdentityDto from '../../DTOs/UserIdentityDto';

namespace GetIdentityViewModel {
  export interface Request {
    status: string;
  }

  export interface Response extends BaseResponse, UserIdentityDto {}
}

export default GetIdentityViewModel;
