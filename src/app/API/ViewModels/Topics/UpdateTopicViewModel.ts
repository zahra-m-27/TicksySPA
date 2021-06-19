import TopicDto from '../../DTOs/TopicDto';
import BaseResponse from '../../Common/BaseResponse';

namespace UpdateTopicViewModel {
  export interface Request {
    avatar: any;
    title: string;
    topicId: number;
    description: string;
  }

  export interface Response extends BaseResponse, TopicDto {}
}

export default UpdateTopicViewModel;
