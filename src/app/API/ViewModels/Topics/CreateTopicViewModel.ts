import BaseResponse from '../../Common/BaseResponse';
import TopicListItemDto from '../../DTOs/TopicListItemDto';

namespace CreateTopicViewModel {
  export interface Request {
    avatar?: File;
    title: string;
    description: string;
  }

  export interface Response extends BaseResponse, TopicListItemDto {}
}

export default CreateTopicViewModel;
