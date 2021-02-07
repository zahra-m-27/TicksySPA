import TopicDto from "../../DTOs/TopicDto";
import BaseResponse from "../../Common/BaseResponse";

namespace GetTopicViewModel {
  export interface Request {
    slug: string;
  }

  export interface Response extends BaseResponse, TopicDto {}
}

export default GetTopicViewModel;
