import BaseResponse from '../../Common/BaseResponse';
import TopicListItemDto from '../../DTOs/TopicListItemDto';

namespace GetTopicsViewModel {
  export interface Request {
    limit: number;
    offset: number;
  }

  export interface Response extends BaseResponse {
    count: number;
    results: TopicListItemDto[];
  }
}

export default GetTopicsViewModel;
