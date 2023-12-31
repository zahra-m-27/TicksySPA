import BaseResponse from '../../Common/BaseResponse';

namespace DeleteTopicViewModel {
  export interface Request {
    topicId: number;
  }

  export type Response = BaseResponse;
}

export default DeleteTopicViewModel;
