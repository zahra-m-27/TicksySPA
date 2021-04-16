import BaseResponse from '../../Common/BaseResponse';
import UserDto from '../../DTOs/UserDto';

namespace GetProfileViewModel {
  export interface Request {}

  export type Response = UserDto;
}

export default GetProfileViewModel;
