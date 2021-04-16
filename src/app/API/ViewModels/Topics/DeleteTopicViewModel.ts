import BaseResponse from '../../Common/BaseResponse';

namespace DeleteTopicViewModel {
  export interface Request {
    slug: string;
  }

  export type Response = BaseResponse;
}

export default DeleteTopicViewModel;
