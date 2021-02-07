import BaseResponse from "../../Common/BaseResponse";

namespace DeleteTopicViewModel {
  export interface Request {
    slug: string;
  }

  export interface Response extends BaseResponse {}
}

export default DeleteTopicViewModel;
