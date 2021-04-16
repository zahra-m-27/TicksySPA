import TopicDto from '../../DTOs/TopicDto';
import BaseResponse from '../../Common/BaseResponse';

namespace UpdateTopicViewModel {
  export interface Request {
    avatar: any;
    slug: string;
    title: string;
    description: string;
    supporters_ids: number[];
  }

  export interface Response extends BaseResponse, TopicDto {}
}

export default UpdateTopicViewModel;
