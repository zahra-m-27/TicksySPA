import BaseResponse from '../../Common/BaseResponse';
import TopicsDto from '../../DTOs/TopicsDto';

namespace CreateTopicViewModel {
  export interface Request {
    avatar?: File;
    slug: string;
    title: string;
    description: string;
    supporters_ids: number[];
  }

  export interface Response extends BaseResponse, TopicsDto {}
}

export default CreateTopicViewModel;
