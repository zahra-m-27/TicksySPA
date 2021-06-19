import BaseResponse from '../../Common/BaseResponse';

namespace DeleteRoleViewModel {
  export interface Request {
    topicId: number;
    roleId: number;
  }

  export type Response = BaseResponse;
}

export default DeleteRoleViewModel;
